import { logger } from "../index.js";
import SaleServices from "../services/sale.service.js";
async function createSale(req, res, next) {
  try {
    let sale = req.body;
    if (!sale.value || !sale.clientId || !sale.productId) {
      throw new Error("value, clientId, productId são obrigatorios");
    }
    res.send(await SaleServices.createSale(sale));
    logger.info(`POST /sale ${JSON.stringify(sale)}`);
  } catch (err) {
    next(err);
  }
}
async function getSales(req, res, next) {
  try {
    res.send(await SaleServices.getSales(req.query.productId, req.query.supplierId));
    logger.info(`GET /sale all sales `);
  } catch (err) {
    next(err);
  }
}
async function getSale(req, res, next) {
  const id = req.params.id;
  try {
    res.send(await SaleServices.getSale(id));
    logger.info(`GET /sale Id:${id} `);
  } catch (err) {
    next(err);
  }
}
async function deleteSale(req, res, next) {
  const id = req.params.id;
  try {
    await SaleServices.deleteSale(id);
    res.end();
    logger.info(`DELETE /sale Id:${id} `);
  } catch (err) {
    next(err);
  }
}
async function updateSale(req, res, next) {
  try {
    let sale = req.body;
    if (!sale.value || !sale.clientId || !sale.productId || !sale.saleId) {
      throw new Error(
        "name, cnpj, phone, email e clientId e address são obrigatorios"
      );
    }
    sale = await SaleServices.updateSale(sale);
    res.send(sale);
    logger.info(`PUT /sale ${JSON.stringify(sale)}`);
  } catch (err) {
    next(err);
  }
}
export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};
