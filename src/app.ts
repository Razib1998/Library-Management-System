import express, { NextFunction, Request, Response, urlencoded } from "express";
import { BookRoutes } from "./app/modules/Book/book.routes";
import { MemberRoutes } from "./app/modules/Member/member.routes";
import globalErrorHandler from "./app/Middlewares/globalErrorHandler";
import cors from "cors";
import notFound from "./app/Middlewares/notFound";
import router from "./app/routes";

const app = express();

app.use(cors());

// Parsers

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Library Management Server is Running",
  });
});

app.use("/api", router);

app.use(globalErrorHandler);
// app.use(notFound);
export default app;
