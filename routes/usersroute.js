import express from "express";
import { createUsers, deleteUsers, getAllUsers, getSingleUser, updateUser } from "../controllers/userscontrollers.js";
const route = express.Router();

// Route GET "/users"
route.get("/", getAllUsers);

// Route GET "/users/:id"
route.get("/:id", getSingleUser)

// Route POST "/users"
route.post("/", createUsers);

// Route PATCH "/users:id"
route.patch("/:id", updateUser);

//Route DELETE "/users/:id"
route.delete("/:id,", deleteUsers);

export default route

// allways export 