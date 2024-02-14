import express from "express";
import test from "../controllers/user.controller.js";

const router = express.Router();

// import it form user controller

router.get("/test", test);

// router.get("/test", (req, res) => {
//   res.json({ message: "API is working" });
// });

export default router;
