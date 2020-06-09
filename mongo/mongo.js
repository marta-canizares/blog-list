import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const url = process.env.MONGODB_URI

export default mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });