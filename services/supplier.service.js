import supplierRepository from '../repositories/supplier.repository.js'
async function createSupplier(supplier){
    return await supplierRepository.insertSupplier(supplier)
}
async function getSuppliers(){
    return await supplierRepository.getSuppliers()
}
async function getSupplier(id){
    return await supplierRepository.getSupplier(id)
}
async function deleteSupplier(id){
    if(await supplierRepository.getSupplier(id)) {
        await supplierRepository.deleteSupplier(id)
    } else {
        throw new Error('Supplier not found!')
    }

    
}
async function updateSupplier(supplier){
    return await supplierRepository.updateSupplier(supplier)
}
export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    deleteSupplier,
    updateSupplier
}