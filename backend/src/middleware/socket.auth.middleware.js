import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";
import cookie from "cookie";

export const socketAuthMiddleware = async (socket, next) => {
  try {
    const rawCookie = socket.handshake.headers.cookie;
    if (!rawCookie) {
      return next(new Error("Unauthorized - No Cookie Header"));
    }

    const parsed = cookie.parse(rawCookie);
    const token = parsed.jwt;

    if (!token) {
      return next(new Error("Unauthorized - No Token Provided"));
    }

    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    // decoded = { userId: "...", iat, exp }
    if (!decoded?.userId) {
      return next(new Error("Unauthorized - Invalid Token Payload"));
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return next(new Error("User not found"));
    }

    socket.user = user;
    socket.userId = user._id.toString();

    next();
  } catch (error) {
    next(new Error("Unauthorized - Authentication failed"));
  }
};
