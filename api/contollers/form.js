// Main controller to resolve get request for forms

// Import internal modules
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getForms = (req, res) => {
  // Get token from cookie
  // In the case if we want to latter filter data from forms according to user.id
  /*
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

  */
  // Create query
  // Select all from forms table
  const q = `SELECT * FROM forms`;

  // Send query to DB
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
