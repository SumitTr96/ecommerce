import type {
  Request,
  Response,
  NextFunction,
} from "express";

export const notFound =
  (
    req: Request,
    res: Response
  ) => {

    res.status(404);

    throw new Error(
      `Not Found - ${req.originalUrl}`
    );
  };

export const errorHandler =
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    const statusCode =
      res.statusCode === 200
        ? 500
        : res.statusCode;

    res.status(
      statusCode
    );

    res.json({
      message:
        err.message,
      stack:
        process.env
          .NODE_ENV ===
        "production"
          ? undefined
          : err.stack,
    });
  };