import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from "./../controllers/userController.js";
const router = express.Router()

//Update User
router.put("/:id", updateUser);

//Delete New User
router.delete("/:id", deleteUser);

//Get Single User
router.get("/:id", getSingleUser);

//Get all users
router.get("/", getAllUser);

export default router;