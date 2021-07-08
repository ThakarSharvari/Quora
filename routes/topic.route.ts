import { Router } from 'express';
import Topic from '../schemas/topic.schema';

const topicRouter = Router();

topicRouter.get('/', async (req, res) => {
    try {
        const topicmodel = await Topic.find({})
        res.status(200).json({ data: topicmodel, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

topicRouter.post('/', async (req, res) => {
    try {
        await Topic.create(req.body)
        res.status(200).json({ data: "Topic Created Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})


topicRouter.get('/:id', async (req, res) => {
    try {
        const topicmodel = await Topic.findById(req.params.id)
        res.status(200).json({ data: topicmodel, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

topicRouter.delete('/:id', async (req, res) => {
    try {
        await Topic.deleteOne({ _id: req.params.id })
        res.status(200).json({ data: "Topic Deleted Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

topicRouter.put('/', async (req, res) => {
    try {
        await Topic.updateOne(req.body)
        res.status(200).json({ data: "Topic Updated Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})
export default topicRouter