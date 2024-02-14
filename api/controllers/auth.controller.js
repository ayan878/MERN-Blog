import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return res.json({ message: "Signup successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    // Pass the error to the error handling middleware
    next(error);
  }
};

export default signup;
