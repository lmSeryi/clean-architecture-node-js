import { Router } from 'express';
import userRouter from './userRouter';
import studentRouter from './studentRouter';
import courseRouter from './courseRouter';
import teacherRouter from './teacherRouter';

const router = Router();

router.use('/users', userRouter);
router.use('/students', studentRouter);
router.use('/courses', courseRouter);
router.use('/teachers', teacherRouter);

export default router;
