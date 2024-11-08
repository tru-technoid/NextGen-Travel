import Booking from "../models/Booking.js";

//Create new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Your tour is booked",
        data: savedBooking,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: true, message: "chek internal server error" });
  }
};

// get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);

    res.status(200).json({ success: true, message: "successful", data: book });
  } catch (err) {
    res.status(404).json({ success: true, message: "not found" });
  }
};

// get all booking
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res.status(200).json({ success: true, message: "successful", data: books });
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};

export const getBookingsByEmail = async (req, res) => {
  const userEmail = req.user.email; // Assuming the email is stored in the token

  try {
    const bookings = await Booking.find({ userEmail: userEmail }); // Filter by userEmail
    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
    });
  }
};

export const updateBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed To Update. Try Again",
    });
  }
};
