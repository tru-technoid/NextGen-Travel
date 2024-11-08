import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    dayPack:{
      type:Number,
      required: true,
    },
    nightPack:{
      type:Number,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
    geoTitle : {
      type: String,
      required: true,
    },
    geoUrl : {
      type: String,
      required: true,
    },
    direcUrl : {
      type: String,
      required: true,
    },
    categoryTour : {
      type:String,
      required:true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
