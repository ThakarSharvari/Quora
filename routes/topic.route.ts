import { Router } from 'express';
import Topic from '../schemas/topic.schema';

const topic_router = Router();

topic_router.get('/', async (req, res) => {
    try {
        const topic_model = await Topic.find({})
        res.status(200).json({ data: topic_model, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

topic_router.post('/', async (req, res) => {
    try {
        await Topic.create(req.body)
        res.status(200).json({ data: "Topic Created Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})


topic_router.get('/:id', async (req, res) => {
    try {
        const topic_model = await Topic.findById(req.params.id)
        res.status(200).json({ data: topic_model, status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

topic_router.delete('/:id', async (req, res) => {
    try {
        await Topic.deleteOne({ _id: req.params.id })
        res.status(200).json({ data: "Topic Deleted Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})

topic_router.put('/', async (req, res) => {
    try {
        await Topic.updateOne(req.body)
        res.status(200).json({ data: "Topic Updated Successfully", status: true })
    } catch (error) {
        res.status(200).json({ data: error.message, status: false })
    }
})
export default topic_router