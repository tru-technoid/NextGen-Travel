import express from 'express'
import { createTour, deleteTour, getSingleTour, updateTour, getAllTour } from "./../controllers/tourController.js";

const router = express.Router()

//Create New Tour
router.post('/', createTour)

//Update Tour
router.put('/:id', updateTour)

//Delete New Tour
router.delete('/:id', deleteTour)

//Get Single Tour
router.get('/:id', getSingleTour)

//Create New Tour
router.get('/', getAllTour)

export default router;