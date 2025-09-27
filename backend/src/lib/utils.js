import jwt from "jsonwebtoken"
import { ENV } from "./env.js";
export const generateToken = (userID, res) => {
    const {JWT_SECRET} = ENV;
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not configured");
    }


    const token = jwt.sign({userID}, JWT_SECRET, {
        expiresIn: "7d",
})

    res.cookie("jwt", token, {
        maxAge: 7*24*60*100, //7 days 7d
        httpOnly: true, //prevent XSS attacks : cross-site scripting attacks
        sameSite: "strict", //CSRF attacks : cross-site request forgery attacks
        secure: ENV.NODE_ENV === "development" ? false : true //HTTPS only in production
    })

    return token;   
}