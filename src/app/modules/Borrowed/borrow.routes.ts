import express from "express";
import { BorrowedControllers } from "./borrow.controller";

const router = express.Router();

router.post("/", BorrowedControllers.borrowedBook);

export const BorrowRoutes = router;
