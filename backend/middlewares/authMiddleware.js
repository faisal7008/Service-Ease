const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      // token looks like - Bearer <token> something
      token = req.headers.authorization.split(" ")[1]; // we need token

      // verify token
      // JWT_SECRET = 'abcd1234'
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
      // next(error)
      
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

const leaderProtect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      // token looks like - Bearer <token> something
      token = req.headers.authorization.split(" ")[1]; // we need token

      // verify token
      // JWT_SECRET = 'abcd1234'
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");
    //   console.log(req.user)
      if (req.user.role === 'Leader') {
        next();
      } 
      else {
        throw new Error("Access denied. Contact Leader");
      }
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error(error.message);
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

const managerProtect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      // token looks like - Bearer <token> something
      token = req.headers.authorization.split(" ")[1]; // we need token

      // verify token
      // JWT_SECRET = 'abcd1234'
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");
    //   console.log(req.user)
      if (req.user.role === 'Manager' || req.user.role === 'Leader') {
        next();
      } 
      else {
        throw new Error("Access denied. Contact Manager");
      }
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error(error.message);
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

module.exports = { protect, leaderProtect, managerProtect };
