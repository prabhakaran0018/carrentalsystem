import express from "express";
import {createcar,getcars,createbook,getbooks} from "../controllers/CarControllers.js";
const router=express.Router()
router.get("/allcars",getcars);
router.get("/allbooks",getbooks);
router.post("/createbook",createbook);
router.post("/createcar",createcar);
export default router;