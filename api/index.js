// Create express server
import express from "express";

// Import external module
import cookieParser from "cookie-parser";
import cors from "cors";

// Import routes
import userRoutes from "./routes/users.js";
//import formRoutes from "./routes/forms.js";
import authRoutes from "./routes/auth.js";

// Create server object
const app = express();

// Create routes middlewares

// Allow access to client side
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json()); // Allow us to parse data to json object

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use("/api/users", userRoutes);
//app.use("/api/forms", formRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("API working");
});
