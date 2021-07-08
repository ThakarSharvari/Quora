import { Router } from 'express';
import { IUser } from '../models/quora';
import User from '../schemas/user.schema';

const user_router = Router();

user_router.get('/', async (req, res) => {
    try {
        const user_model = await User.find({})
        res.status(200).json({ data: user_model, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

user_router.post('/', async (req, res) => {
    try {
        let user: IUser = req.body;
        await User.create(user)
        res.status(200).json({ data: "User Created Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

user_router.get('/:id', async (req, res) => {
    try {
        const user_model = await User.findById(req.params.id)
        res.status(200).json({ data: user_model, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

user_router.delete('/:id', async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(200).json({ data: "User Deleted Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

user_router.put('/', async (req, res) => {
    try {
        await User.updateOne(req.body)
        res.status(200).json({ data: "User Updated Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})
export default user_router;