import express from "express";
import ClientRouter from "./routes/client.route.js";
import winston from "winston";
import ProductRouter from "./routes/product.route.js";
import SaleRouter from "./routes/sale.route.js";
import SupplierRouter from "./routes/supplier.route.js";
import cors from "cors";
const { combine, label, timestamp, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
export const logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "store-api.log" }),
  ],
  format: combine(label({ label: "store-api" }), timestamp(), myFormat),
});
const app = express();
app.use(express.json());
app.use(cors());
app.use("/client", ClientRouter);
app.use("/product", ProductRouter);
app.use("/sale", SaleRouter);
app.use("/supplier", SupplierRouter);
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} -  ${err}`)
  res.status(400).send({error: err.message});
})
app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));
