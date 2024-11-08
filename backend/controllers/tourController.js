import Tour from "../models/Tour.js";

//Create New Tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully Created",
        data: savedTour,
      });
  } 
  
  catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed To Create. Try Again",
        data: savedTour,
      });
  }
};

//Update Tour
export const updateTour = async (req,res) => {
        const id = req.params.id
    try {
        
    const updatedTour = await Tour.findByIdAndUpdate(id,{
        $set : req.body
    }, {new:true})

    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedTour,
    });

    } catch (err) {

    res.status(500).json({
        success: false,
        message: "Failed To Update. Try Again"
    });

    }    
}

//Delete Tour
export const deleteTour = async (req,res) => {
    
    const id = req.params.id;
    
    try {
        
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
        success: true,
        message: "Successfully Deleted"
        });

    } catch (err) {

    res.status(500).json({
        success: false,
        message: "Failed To Delete. Try Again"
    });

    }    
}

//Get Single Tour
export const getSingleTour = async (req,res) => {
    
    const id = req.params.id;
    
    try {    
            const tour = await Tour.findById(id).populate("reviews");

            res.status(200).json({
            success: true,
            message: "Successfully Loaded",
            data : tour
            });
    
        } catch (err) {
    
        res.status(404).json({
            success: false,
            message: "Not Found. Try Again"
        });
    
    }    
}

//Get All Tour
export const getAllTour = async (req,res) => {
    //For Paging
    const page = parseInt(req.query.page)

    try {

        const tours = await Tour.find({})
        .populate("reviews")
        .skip(page * 8)
        .limit(8);

        res.status(200).json({
            success: true,
            count : tours.length,
            message: "Successfully Loaded All Tours",
            data : tours
            });
    
        } catch (err) {
    
        res.status(404).json({
            success: false,
            message: "Not Found Tours. Try Again"
        });
    }    
};




//get tour by search
export const getTourBySearch = async(req,res)=>{

    //here 'i' means case sensitive
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try{
        const tours = await Tour.find({ city, distance:{$gte:distance}, maxGroupSize:{$gte:maxGroupSize}}).populate("reviews");

        res.status(200).json({
            success: true,
            message: "Successful",
            data : tours
        });
    }catch (err) {
        res.status(404).json({
            success: false,
            message: "Not Found Tours. Try Again"
        });
    }
};


//Get Featured Tour
export const getFeaturedTour = async (req,res) => {

    try {

        const tours = await Tour.find({featured:true})
        .populate("reviews")
        .limit(8);

        res.status(200).json({
            success: true,
            message: "Successfully Loaded All Tours",
            data : tours
            });
    
        } catch (err) {
    
        res.status(404).json({
            success: false,
            message: "Not Found Tours. Try Again"
        });
    }    
};

//get tour counts
export const getTourCount = async(req,res)=>{
    try{
        const tourCount = await Tour.estimatedDocumentCount();

        res.status(200).json({success:true, data:tourCount});
    }catch(err) {
        res.status(500).json({success:false, message: "failed to fetch"});
    }
};
