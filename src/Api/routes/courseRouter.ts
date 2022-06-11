import { Router } from 'express';

import { courseController } from '../controllers';

const courseRouter = Router();

courseRouter.get('/', courseController.getAll);
courseRouter.get('/:id', courseController.getById);
courseRouter.post('/', courseController.create);
courseRouter.put('/:id', courseController.update);
courseRouter.delete('/:id', courseController.delete);

export default courseRouter;
