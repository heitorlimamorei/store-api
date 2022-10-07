import ClientModel from '../models/Client.model.js'
async function insertClient(client) {
  try {
    return await ClientModel.create(client)
  } catch (err) {
    throw  Error
  }
}
async function getClients() {
  try {
    return await ClientModel.findAll();
  }catch(err) {
    throw err
  }
}
async function getClient(id){
  try{
    return await ClientModel.findByPk(id)
  }catch(err){
    throw err
  }
}
async function updateClient(client) {
  try {
     await ClientModel.update(client, {
      where:{
        clientId: client.clientId
      }
     })
     return await getClient(client.clientId)
  } catch(err){
    throw err
  }
}
async function deleteClient(id){
  try{
    await ClientModel.destroy({
      where: {
        clientId: id
      }
    })
  }catch(err){
    throw err
  }
}

export default {
  insertClient,
  getClients,
  getClient,
  deleteClient,
  updateClient
};
