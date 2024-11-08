import  express  from "express";
import { createBooking, getBooking,  getAllBooking, getBookingsByEmail, updateBooking } from "../controllers/bookingController.js";
import { verifyAdmin, verifyUser} from "../Utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);
// Add a route in your booking routes file
router.get("/", verifyUser, getBookingsByEmail);
router.put("/:id",updateBooking);

export default router;