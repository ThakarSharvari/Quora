import { Router } from 'express';
import { IAnswer } from '../models/quora';
import Answer from '../schemas/answer.schema';

const answer_router = Router();

answer_router.get('/', async (req, res) => {
    try {
        const answer_model = await Answer.find({})
        res.status(200).json({ data: answer_model, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

answer_router.post('/', async (req, res) => {
    try {
        let answer: IAnswer = req.body;
        await Answer.create(answer)
        res.status(200).json({ data: "Answer Created Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

answer_router.get('/:id', async (req, res) => {
    try {
        const answer_model: any = await Answer.findById(req.params.id).
            populate("questinRef", "-_id -__v ").
            populate("userRef", "-_id -__v")
        // .exec((err, resData) => {
        //      res.status(200).json({ data: resData, status: true })
        // });
        res.status(200).json({ data: answer_model, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

answer_router.delete('/:id', async (req, res) => {
    try {
        await Answer.deleteOne({ _id: req.params.id })
        res.status(200).json({ data: "Answer Deleted Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

answer_router.put('/', async (req, res) => {
    try {
        await Answer.updateOne(req.body)
        res.status(200).json({ data: "Answer Updated Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})
export default answer_router