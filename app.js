import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import blogRouter from './router/blogRouter.js'
import mongoose from 'mongoose'

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/blogs', blogRouter);

/*
app.get('/api/blogs', (request, response) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

app.post('/api/blogs', (request, response) => {
    const blog = new Blog(request.body)

    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})
*/




const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
