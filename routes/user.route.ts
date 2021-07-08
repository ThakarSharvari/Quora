import { Router } from 'express';
import user from "../models/user";
import User from '../schemas/user.schema';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    try {
        const usermodel = await User.find({})
        res.status(200).json({ data: usermodel, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

userRouter.post('/', async (req, res) => {
    try {
        let user: user = req.body;
        await User.create(user)
        res.status(200).json({ data: "User Created Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

userRouter.get('/:id', async (req, res) => {
    try {
        const usermodel = await User.findById(req.params.id)
        res.status(200).json({ data: usermodel, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

userRouter.delete('/:id', async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(200).json({ data: "User Deleted Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

userRouter.put('/', async (req, res) => {
    try {
        await User.updateOne(req.body)
        res.status(200).json({ data: "User Updated Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})
export default userRouter;