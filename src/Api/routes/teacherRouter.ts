import { Router } from 'express';

import { teacherController } from '../controllers';

const teacherRouter = Router();

teacherRouter.get('/', teacherController.getAll);
teacherRouter.get('/:id', teacherController.getById);
teacherRouter.post('/', teacherController.create);
teacherRouter.put('/:id', teacherController.update);
teacherRouter.delete('/:id', teacherController.delete);

export default teacherRouter;