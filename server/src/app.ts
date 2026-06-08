import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import authRoutes from "./routes/authRoutes";

import {
  notFound,
  errorHandler,
} from "./middleware/errorMiddleware";

import productRoutes
from "./routes/productRoutes";

import cartRoutes
from "./routes/cartRoutes";

import orderRoutes
from "./routes/orderRoutes";

const app = express();


app.use(express.json());

app.use(
  cors({
    origin:
      "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(
  "/uploads",
  express.static(
    path.join(
      process.cwd(),
      "uploads"
    )
  )
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/cart",
  cartRoutes
);

app.use(
  "/api/orders",
  orderRoutes
);

app.use(notFound);

app.use(errorHandler);
export default app;