import { Router } from 'express';

import { studentController } from '../controllers';

const studentRouter = Router();

studentRouter.get('/', studentController.getAll);
studentRouter.get('/:id', studentController.getById);
studentRouter.post('/', studentController.create);
studentRouter.put('/:id', studentController.update);
studentRouter.delete('/:id', studentController.delete);

export default studentRouter;