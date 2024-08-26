import express from 'express';
import auth from '../middleware/auth.js';
import { createProperty, getAllProperties,updateProperty, markAsFavorite, getFavorites, searchProperties, unmarkAsFavorite, createMultipleProperties, addProperty, viewPropertyOfParticularUser } from '../controller/property.controller.js';

const router = express.Router();

router.post("/createProperty", createProperty);

router.post("/add-property",auth,addProperty);
router.get("/viewProperties", getAllProperties);
router.get("/searchProperties", searchProperties);
router.post("/favorite",markAsFavorite);
router.post("/viewFavourites", getFavorites);
router.delete("/deleteProperty/:id", unmarkAsFavorite);     
router.post("/add-property-in-bulk",createMultipleProperties);
router.post("/view-property-of-user",viewPropertyOfParticularUser)
router.put('/updateProperty/:id',updateProperty);
export default router;