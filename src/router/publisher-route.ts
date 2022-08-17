

import {Router} from "express";
import PublisherController from "../controller/publisher-controller";

export const publisherRoute = Router();
publisherRoute.get('', PublisherController.getAll);
publisherRoute.post('', PublisherController.updatePublisher)
publisherRoute.delete('/:id', PublisherController.deletePublisher);
publisherRoute.get('/:id', PublisherController.getPublisher)
publisherRoute.put('/:id', PublisherController.updatePublisher)