import express from "express";
import { BookControllers } from "./book.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.findAllBooks);
router.get("/:id", BookControllers.findSingleBook);
router.patch("/:id", BookControllers.updateBook);
router.delete("/:id", BookControllers.deleteBook);

export const BookRoutes = router;
