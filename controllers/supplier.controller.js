import { logger } from '../index.js'
import SupplierServices from '../services/supplier.service.js'
async function createSupplier(req, res, next) {
  try{
    let supplier = req.body;
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address
    ) {
        throw new Error('name, cnpj, phone, email e  address são obrigatorios')
    }
    res.send(await SupplierServices.createSupplier(supplier));
    logger.info(`POST /supplier ${JSON.stringify(supplier)}`)
  } catch(err){
    next(err)
  }
}
async function getSuppliers(req, res, next){
  try{
    res.send(await SupplierServices.getSuppliers())
    logger.info(`GET /supplier all suppliers `)
  } catch(err) {
    next(err)
  }
}
async function getSupplier(req, res, next){
  const id  = req.params.id
  try{
    res.send(await SupplierServices.getSupplier(id))
    logger.info(`GET /supplier Id:${id} `)
  } catch(err) {
    next(err)
  }
}
async function deleteSupplier(req, res, next){
  const id  = req.params.id
  try{
    await SupplierServices.deleteSupplier(id)
    res.end()
    logger.info(`DELETE /supplier Id:${id} `)
  } catch(err) {
    next(err)
  }
}
async function updateSupplier(req, res, next){
  try{
    let supplier = req.body;
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address ||
      !supplier.supplierId
    ) {
        throw new Error('name, cnpj, phone, email e client_id e address são obrigatorios')
    }
    supplier = await SupplierServices.updateSupplier(supplier)
    res.send(supplier);
    logger.info(`PUT /supplier ${JSON.stringify(supplier)}`)
  } catch(err){
    next(err)
  }
}
export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier
};
