import User from "../models/Tour.js";

//Create New User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully Created",
        data: savedUser,
      });
  } 
  
  catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed To Create. Try Again",
        data: savedUser,
      });
  }
};

//Update User
export const updateUser = async (req,res) => {
    
        const id = req.params.id
    
    try {
        
    const updatedUser = await User.findByIdAndUpdate(id,{
        $set : req.body
    }, {new:true})

    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedUser,
    });

    } catch (err) {

    res.status(500).json({
        success: false,
        message: "Failed To Update. Try Again"
    });

    }    
}

//Delete User
export const deleteUser = async (req,res) => {
    
    const id = req.params.id;
    
    try {
        
        await User.findByIdAndDelete(id);

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

//Get Single User
export const getSingleUser = async (req,res) => {
    
    const id = req.params.id;
    
    try {    
            const user = await User.findById(id)

            res.status(200).json({
            success: true,
            message: "Successfully Loaded",
            data : user
            });
    
        } catch (err) {
    
        res.status(404).json({
            success: false,
            message: "Not Found. Try Again"
        });
    
    }    
}

//Get All User
export const getAllUser = async (req,res) => {

    try {

        const users = await User.find({})

        res.status(200).json({
            success: true,
            message: "Successfully Loaded All Tours",
            data : users
            });
    
        } catch (err) {
    
        res.status(404).json({
            success: false,
            message: "Not Found Users. Try Again"
        });
    }    
};