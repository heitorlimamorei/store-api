import {connect} from "./db.js";
import SaleModel from "../models/Sale.model.js"
import Product from "../models/Product.model.js";
import Client from "../models/Client.model.js";
async function insertSale(sale) {
  try {
    return await SaleModel.create(sale)
  } catch (err) {
    throw err;
  } 
}
async function getSales() {
  try {
   return await SaleModel.findAll({
    include: [
      {
        model : Product
      },
      {
        model: Client
      }
    ]
   })
  } catch (err) {
    throw err;
  } 
}
async function getSalesByProductId(productId) {
  try {
    return await SaleModel.findAll({
      where: {
        productId: productId
      }
    })
  } catch (err) {
    throw err;
  }
}
async function getSalesBySupplierId(supplierId){
  try{
    return await SaleModel.findAll({
      include:[
        {
          model: Product,
          where: {
            supplierId: supplierId
          }
        }
      ]
      
    })
  }catch(err){
    throw err
  }
}
async function getSale(id){
  try{
    return await SaleModel.findByPk(id)
  }catch(err){
    throw err
  }
}
async function updateSale(sale) {
  try {
    await SaleModel.update(sale, {
     where:{
       SaleId: sale.saleId
     }
    })
    return await getSale(sale.saleId)
 } catch(err){
   throw err
 }
}
async function deleteSale(id){
    try{
      await  SaleModel.destroy({
        where: {
          SaleId: id
        }
      })
    }catch(err){
      throw err; 
    }
}

export default {
  insertSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
  getSalesByProductId,
  getSalesBySupplierId
};

