import ClientController from '../controllers/client.controller.js'
import express from 'express';
const ClientRouter = express.Router();
ClientRouter.post('/', ClientController.createClient)
ClientRouter.get('/', ClientController.getClients)
ClientRouter.get('/:id', ClientController.getClient)
ClientRouter.delete('/:id', ClientController.deleteClient)
ClientRouter.put('/', ClientController.updateClient)
export default ClientRouter