import express from "express";
import bookController from "../controllers/bookController.js";
import userController from "../controllers/userController.js";

const router = express.Router();

// Rota para listar todos os livros
router.get("/livros", bookController.listarLivros);

router.get("/users", userController.listarUsers);

export default router;
