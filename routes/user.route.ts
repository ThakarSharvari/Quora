import { Router } from 'express';
import user from "../models/user";
import { userModel } from '../schemas/user.schema';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.status(200).json({ data: "success" })
})

userRouter.post('/', async (req, res) => {
    let user: user = req.body;
    const usermodel = new userModel({ user: user })
    await usermodel.save();
    res.status(200).json({ data: "success", status: true })
})

export default userRouter;