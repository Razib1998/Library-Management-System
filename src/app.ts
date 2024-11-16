import express, { NextFunction, Request, Response, urlencoded } from "express";
import { BookRoutes } from "./app/modules/Book/book.routes";

const app = express();

const port = 3000;

// Parsers

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Library Management Server is Running",
  });
});

app.use("/api/books", BookRoutes);
export default app;
