const express = require("express")
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const {listingSchema,reviewSchema} = require("../Schema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingcontroller = require("../controllers/listings.js")
const multer = require("multer");
const {storage} = require("../cloudconfig.js")
const upload = multer({storage}); 



router
.route("/")
 .get(wrapAsync(listingcontroller.index))
  .post(isLoggedIn,validateListing,upload.single('listing[image]'),wrapAsync(listingcontroller.createListing));



  //New route
router.get("/new",isLoggedIn,listingcontroller.renderNewForm);


router
.route("/:id")  
//show route
.get(wrapAsync(listingcontroller.showListing))
//upadte route
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingcontroller.updateListing))
//Delete Route
.delete(isLoggedIn,isOwner,wrapAsync(listingcontroller.deleteListing))


 

//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingcontroller.editListing)) 


module.exports = router