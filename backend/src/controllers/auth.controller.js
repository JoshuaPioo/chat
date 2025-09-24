import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken }  from "../lib/utils.js";

export const signup = async  (req, res) => {
    const {fullname, email, password} = req.body;

    try {
        if(!fullname || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }
        
        if (password.length < 6){
            return res.status(400).json({message: "Password must be at least 6 characters"});
        }

        //check if emails exists

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)){
            return res.status(400).json({message: "Please enter a valid email address"});
        }

        const user = await User.findOne({email});
        if (user){
            return res.status(400).json({message: "Email already exists"});
        }

        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        });

        if (newUser) {
            generateToken(newUser._id, res)
            await newUser.save();

            res.status(201).json({_id: newUser._id,
                                fullname: newUser.fullname,
                                email: newUser.email,
                                profilePic: newUser.profilePic,});
            
            // todo: send welcome email 
        } else { res.status(400).json({message: "Error creating user"});
        
        }
    } catch (error) {
        console.error("Error in Signup Controller", error);
        res.status(500).json({message: "Server Error"});
        
    }
}