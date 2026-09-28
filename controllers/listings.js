const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingclient = mbxGeocoding({ accessToken: mapToken});

module.exports.index = async (req,res)=>{
    const availableCategories = ["all", "homes", "experiences", "services"];
    const category = availableCategories.includes(req.query.type) ? req.query.type : "all";
    const searchTerm = String(req.query.search || "").trim().slice(0, 100);
    const escapedSearch = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const filter = searchTerm ? {
        $or: ["title", "location", "country"].map((field) => ({
            [field]: { $regex: escapedSearch, $options: "i" },
        })),
    } : {};
    const allListings = ["all", "homes"].includes(category) ? await Listing.find(filter) : [];
    res.render("listings/index.ejs",{allListings, searchTerm, category})
};

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs")
}

module.exports.showListing = async(req,res)=>{
let {id} = req.params;
const listing = await Listing.findById(id).populate({path:"reviews",
    populate:{
        path:"author",
        

    }
    }).populate("owner");
if(!listing){
    req.flash("error","Listing you requested for doesn't exist!")
    return res.redirect("/listings")
}
if (!listing.geometry || !Array.isArray(listing.geometry.coordinates) || listing.geometry.coordinates.length !== 2) {
    const geocodingResponse = await geocodingclient.forwardGeocode({
        query: [listing.location, listing.country].filter(Boolean).join(", "),
        limit: 1,
    }).send();
    const feature = geocodingResponse.body.features[0];
    if (feature) {
        listing.geometry = feature.geometry;
        await listing.save();
    }
}
res.render("listings/show.ejs",{listing})
}

module.exports.createListing = async(req,res,next)=>{
    let response = await geocodingclient.forwardGeocode({
    query:req.body.listing.location,
     limit:1,
    })
    .send();

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing)  
    newListing.owner = req.user._id;  
    newListing.image = {url,filename};
    newListing.geometry = response.body.features[0].geometry;
    let savedListing = await newListing.save()
    req.flash("success","New Listing Created!")
    res.redirect("/listings");
};

module.exports.editListing = async(req,res)=>{
    let {id} = req.params;
const listing = await Listing.findById(id)
if(!listing){
    req.flash("error","Listing you requested for doesn't exist!")
    return res.redirect("/listings")
}
let originalImageUrl = listing.image.url;
originalImageUrl = originalImageUrl.replace("/upload/","/upload/w_200/")
res.render("listings/edit.ejs",{listing,originalImageUrl})
}

module.exports.updateListing = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing})

     if(typeof req.file !== "undefined"){
     let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url,filename};
    await listing.save();
     }


    req.flash("success","user updated successfully")
    res.redirect(`/listings/${id}`)
}

module.exports.deleteListing = async(req,res)=>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing)
    req.flash("success","Listing deleted!")
    res.redirect("/listings")
}