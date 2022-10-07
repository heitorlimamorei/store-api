import { logger } from '../index.js'
import ClientServices from '../services/client.service.js'
async function createClient(req, res, next) {
  try{
    let client = req.body;
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.adress
    ) {
        throw new Error('name, cpf, phone, email e  address são obrigatorios')
    }
    res.send(await ClientServices.createClient(client));
    logger.info(`POST /client ${JSON.stringify(client)}`)
  } catch(err){
    next(err)
  }
}
async function getClients(req, res, next){
  try{
    res.send(await ClientServices.getClients())
    logger.info(`GET /client all clients `)
  } catch(err) {
    next(err)
  }
}
async function getClient(req, res, next){
  const id  = req.params.id
  try{
    res.send(await ClientServices.getClient(id))
    logger.info(`GET /client Id:${id} `)
  } catch(err) {
    next(err)
  }
}
async function deleteClient(req, res, next){
  const id  = req.params.id
  try{
    await ClientServices.deleteClient(id)
    res.end()
    logger.info(`DELETE /client Id:${id} `)
  } catch(err) {
    next(err)
  }
}
async function updateClient(req, res, next){
  try{
    let client = req.body;
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.adress ||
      !client.clientId
    ) {
        throw new Error('name, cpf, phone, email e client_id e address são obrigatorios')
    }
    client = await ClientServices.updateClient(client)
    res.send(client);
    logger.info(`PUT /client ${JSON.stringify(client)}`)
  } catch(err){
    next(err)
  }
}
export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient
};
