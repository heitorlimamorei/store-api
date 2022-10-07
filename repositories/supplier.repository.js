import SupplierModel from '../models/Supplier.model.js'
async function insertSupplier(supplier) {
  try {
    return await SupplierModel.create(supplier)
  } catch (err) {
    throw  Error
  }
}
async function getSuppliers() {
  try {
    return await SupplierModel.findAll();
  }catch(err) {
    throw err
  }
}
async function getSupplier(id){
  try{
    return await SupplierModel.findByPk(id)
  }catch(err){
    throw err
  }
}
async function updateSupplier(supplier) {
  try {
     await SupplierModel.update(supplier, {
      where:{
        supplierId: supplier.supplierId
      }
     })
     return await getSupplier(supplier.supplierId)
  } catch(err){
    throw err
  }
}
async function deleteSupplier(id){
  try{
    await SupplierModel.destroy({
      where: {
        supplierId: id
      }
    })
  }catch(err){
    throw err
  }
}

export default {
  insertSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier
};
