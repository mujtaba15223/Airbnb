const joi = require("joi")

module.exports.listingSchema = joi.object({
    listing : joi.object({
        title : joi.string().required(),
        description:joi.string().required(),
        location:joi.string().required(),
        country:joi.string().required(),
        price:joi.string().required().min(0),
        image:joi.string().allow("",null)

    }).required()
})

const Joi = require("joi");

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required()
  }).required()
});
