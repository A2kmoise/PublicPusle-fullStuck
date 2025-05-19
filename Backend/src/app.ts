import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './routes/user.routes';
import adminRouter from './routes/admin.routes';

dotenv.config();

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express.json());


app.use('/user', userRouter);
app.use('/admin', adminRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
console.log(`Server started on http://localhost:${PORT}`);
});
