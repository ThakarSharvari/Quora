import { Router } from 'express';
import Question from '../schemas/question.schema';

const questionRouter = Router();

questionRouter.get('/', async (req, res) => {
    try {
        const questionmodel = await Question.find({})
        res.status(200).json({ data: questionmodel, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

questionRouter.post('/', async (req, res) => {
    try {
        await Question.create(req.body)
        res.status(200).json({ data: "Question Created Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

questionRouter.get('/:id', async (req, res) => {
    try {
        const questionmodel: any = await Question.findById(req.params.id).
            populate("followers", "-_id -__v -lastname").
            populate("userRef", "-_id -__v").
            populate("topicRef", "-_id -__v")
        // .exec((err, resData) => {
        //      res.status(200).json({ data: resData, status: true })
        // });
        res.status(200).json({ data: questionmodel, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

questionRouter.delete('/:id', async (req, res) => {
    try {
        await Question.deleteOne({ _id: req.params.id })
        res.status(200).json({ data: "Question Deleted Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

questionRouter.put('/', async (req, res) => {
    try {
        await Question.updateOne(req.body)
        res.status(200).json({ data: "Question Updated Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})
export default questionRouter