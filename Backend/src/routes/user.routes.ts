import express from 'express';
import * as userComplaints from '../controllers/user.controller';
import { requireAuth } from '../middleware/authenticatedUser';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', userComplaints.landing_get);  

userRouter.get('/signup',userComplaints.signup_get);
userRouter.post('/signup',userComplaints.signup_post);

userRouter.get('/login',userComplaints.login_get);
userRouter.post('/login',userComplaints.login_post );

userRouter.post('/logout',userComplaints.logout_post);
userRouter.get('/dashboard',userComplaints.dashboard_get);

userRouter.get('/complaints/:userId',userComplaints.complaints_get );
userRouter.post('/complaints/:userId',userComplaints.complaints_post);
userRouter.put('/complaints/:id', userComplaints.complaintId_update ); 
userRouter.delete('/complaint/:id', userComplaints.complaintId_delete);

export default userRouter;