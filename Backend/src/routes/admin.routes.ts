import express from 'express';
import * as adminhandle from '../controllers/admin.controller'
import { isAdmin } from '../middleware/admin.check';
import { Router } from 'express';

const adminRouter = Router();

adminRouter.get('/login',isAdmin, adminhandle.adminlogin_get);
adminRouter.post('/login',isAdmin, adminhandle.adminLogin);

adminRouter.get('/dashboard',isAdmin, adminhandle.admindashboard_get);

adminRouter.get('/complaints',isAdmin, adminhandle.complaints_get);
adminRouter.get('/complaints/:id',isAdmin, adminhandle.complaintsId_read);
adminRouter.put('/complaints/:id',isAdmin, adminhandle.complaints_update );

export default adminRouter;
