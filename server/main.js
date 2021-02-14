import express from 'express'
import bodyParser from 'body-parser'
import { initializeMongoServer } from './src/config/db.config';
import UserRoute from "./src/routes/UserRoute"
import Route from "./src/routes/Route"

export const app = express();

initializeMongoServer();

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", UserRoute);
app.use("/blockchain", Routeé);

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
