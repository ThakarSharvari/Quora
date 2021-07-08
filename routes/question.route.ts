import { Router } from 'express';
import { IQuestion } from '../models/quora';
import Question from '../schemas/question.schema';

const question_router = Router();

question_router.get('/', async (req, res) => {
    try {
        const question_model = await Question.find({})
        res.status(200).json({ data: question_model, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

question_router.post('/', async (req, res) => {
    try {
        let question: IQuestion = req.body;
        await Question.create(question)
        res.status(200).json({ data: "Question Created Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

question_router.get('/:id', async (req, res) => {
    try {
        const question_model: any = await Question.findById(req.params.id).
            populate("followers", "-_id -__v -lastname").
            populate("userRef", "-_id -__v").
            populate("topicRef", "-_id -__v")
        // .exec((err, resData) => {
        //      res.status(200).json({ data: resData, status: true })
        // });
        res.status(200).json({ data: question_model, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

question_router.delete('/:id', async (req, res) => {
    try {
        await Question.deleteOne({ _id: req.params.id })
        res.status(200).json({ data: "Question Deleted Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

question_router.put('/', async (req, res) => {
    try {
        await Question.updateOne(req.body)
        res.status(200).json({ data: "Question Updated Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})
export default question_router