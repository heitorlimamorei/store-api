import saleRepository from "../repositories/sale.repository.js";
import clientRepository from "../repositories/client.repository.js";
import productRepository from "../repositories/product.repository.js";
async function createSale(sale) {
    const product = await productRepository.getProduct(sale.productId);
  if (await clientRepository.getClient(sale.clientId) &&  await product) {
    if(product.stock > 0){
        product.stock = product.stock - 1
        await productRepository.updateProduct(product)
        return await saleRepository.insertSale(sale);
    } else {
        throw new Error('No stock avalible')
    }
  } else {
    throw new Error("Client_id or product_id not found!");
  }
}
async function getSales(productId, supplierId) {
  if(productId) {
    return await saleRepository.getSalesByProductId(productId);
  }  else if(supplierId) {
    return await saleRepository.getSalesBySupplierId(supplierId);
  } else {
    return await saleRepository.getSales();
  }
}
async function getSale(id) {
  return await saleRepository.getSale(id);
}
async function deleteSale(id) {
  const sale = await saleRepository.getSale(id)
  if (sale) {
    const product = await productRepository.getProduct(sale.productId)  
    product.stock = product.stock + 1
    await productRepository.updateProduct(product)
    await saleRepository.deleteSale(id);
  } else {
    throw new Error("Sale not found!");
  }
}
async function updateSale(sale) {
  if (await clientRepository.getClient(sale.clientId) && await productRepository.getProduct(sale.productId)) {
    return await saleRepository.updateSale(sale);
  } else {
    throw new Error("Client_id or product_id not found!");
  }
}
export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};
