import { Router } from 'express';
import Answer from '../schemas/answer.schema';

const answerRouter = Router();

answerRouter.get('/', async (req, res) => {
    try {
        const answermodel = await Answer.find({})
        res.status(200).json({ data: answermodel, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

answerRouter.post('/', async (req, res) => {
    try {
        await Answer.create(req.body)
        res.status(200).json({ data: "Answer Created Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

answerRouter.get('/:id', async (req, res) => {
    try {
        const answermodel: any = await Answer.findById(req.params.id).
            populate("questinRef", "-_id -__v ").
            populate("userRef", "-_id -__v")
        // .exec((err, resData) => {
        //      res.status(200).json({ data: resData, status: true })
        // });
        res.status(200).json({ data: answermodel, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

answerRouter.delete('/:id', async (req, res) => {
    try {
        await Answer.deleteOne({ _id: req.params.id })
        res.status(200).json({ data: "Answer Deleted Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

answerRouter.put('/', async (req, res) => {
    try {
        await Answer.updateOne(req.body)
        res.status(200).json({ data: "Answer Updated Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})
export default answerRouter