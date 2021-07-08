import { Router } from 'express';
import answerRouter from './routes/answer.route';
import questionRouter from './routes/question.route';
import titleRouter from './routes/topic.route';
import userRouter from './routes/user.route';

const routes = Router();

routes.use('/user', userRouter)
routes.use('/title', titleRouter)
routes.use('/question', questionRouter)
routes.use('/answer', answerRouter)

export default routes;


