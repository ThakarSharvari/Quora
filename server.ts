import { Router } from 'express';
import answer_router from './routes/answer.route';
import question_router from './routes/question.route';
import topic_router from './routes/topic.route';
import user_router from './routes/user.route';


const routes = Router();

routes.use('/user', user_router)
routes.use('/title', topic_router)
routes.use('/question', question_router)
routes.use('/answer', answer_router)

export default routes;


