import express from "express";
import { getAllcontacts, getMessageByUserId, sendMessage, getChatPartners } from "../controllers/message.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js";
const router = express.Router();
import { arcjetProtection } from "../middleware/arcjet.middleware.js";


//protect all routes after this middleware
//this is done to avoid repeating the same middleware in all routes
router.use(arcjetProtection, protectRoute);

router.get("/contacts", getAllcontacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessageByUserId);
router.post("/send/:id", sendMessage);


export default router;