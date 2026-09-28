if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
console.log(process.env.secret);


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
app.use(express.static(path.join(__dirname,"/public")));
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("./Schema.js");
const Review = require("./models/review.js");
const review = require("./models/review.js");
const session = require("express-session");
const { MongoStore } = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const dbUrl = process.env.ATLASDB_URL;

const store = MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24 * 3600,
});


const sessionOption = {
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge:7 * 24 * 60 * 60 * 1000,
        httpOnly:true,
    }
};


app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate)

app.use(session(sessionOption))
app.use(flash())

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success = req.flash("success")
    res.locals.error = req.flash("error")
    res.locals.currUser = req.user;
    next()
})

/*app.get("/demouser",async(req,res)=>{
    let fakeuser = new User({
        email:"mansj@gmail.com",
        username:"delta-student"
    }) 

    let registeredUser = await User.register(fakeuser,"hello");
    res.send(registeredUser);
})*/



app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

main().then(()=>{
    console.log("connected successfuly")
}).catch((err)=>{
    console.log(err)    
})

async function main() {
    await mongoose.connect(dbUrl)
}





app.all("/{*splat}",(req,res,next)=>{
next(new ExpressError(404,"PAGE NOT FOUND"));
})

app.use((err,req,res,next)=>{
    let {statusCode=500,message} = err;
    res.status(statusCode).render("error.ejs",{message})
    //res.status(statusCode).send(message)
})

app.listen(9999,()=>{
    console.log("Airbnb is running")
})





















/*app.get("/testlisting",async(req,res)=>{
    let sampleListing = new Listing({
        title:"Stylish Big 1BHK w Pool Balcony | Near Anjuna Baga",
        description:"Stylish and spacious 1BHK centrally located near popular beaches like Baga, Anjuna, Vagator - close to cafes & nightlife etc. Ideal for 2 to 4 guests. Features a double bed and a double sofa-cum-bed along with a jungle-view balcony. ",
        price:13900,
        location:"hyderabad",
        country:"India"
    })
    await sampleListing.save();
    console.log("sample was saved")
    res.send("successful testing")

})*/