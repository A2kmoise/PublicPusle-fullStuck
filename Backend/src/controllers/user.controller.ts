import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import validator from 'validator';
import { login } from '../services/user.services';
import { PrismaClient } from '../generated/prisma/client';
import { Request, Response } from 'express';

dotenv.config();
const prisma = new PrismaClient();

const maxAge = 3 * 24 * 60 * 60
const createTokens = (id:string) => {
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) {
        throw new Error("JWT_SECRET_KEY is not defined in environment variables")
    }
    return jwt.sign({ id }, secret, { 
        expiresIn: maxAge
    })
}

export const landing_get= (req:Request, res:Response) => {
res.send('Landing page');
};

export const signup_get= (req:Request, res:Response) => {
  res.send('Login page here');  
};

export const signup_post = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !validator.isEmail(email)) {
     res.status(400).json({ message: 'Invalid email format' });
  }

  if (!firstName || !lastName) {
     res.status(400).json({ message: 'First name and last name are required' });
  }

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName
      }
    });

    const token = createTokens(user.id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    console.error("Error in signup:", err);
    res.status(500).json({ message: 'Server error', details:err});
  }
};


export const login_get = (req:Request, res:Response) => {
    res.send("User loggedin");
};

export const login_post= async (req:Request, res:Response) => {
       const { email, password } = req.body;
    try {
        const user = await login(email, password);
        const token = createTokens(user.id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ message: 'User loggedin', user });
    } catch (err) {
        res.status(500).json({ message: 'Server error', details: err })
    } 
};

export const logout_post= (req:Request, res:Response) => {
        res.cookie('jwt', '', { httpOnly: true, maxAge: 1 });
        res.status(200).send('loggedout');
};
export const dashboard_get= (req:Request, res:Response) => {
    res.send('Dashboard accessed');
};

export const complaints_get = async (req: Request, res: Response) => {
  const { userId } = req.params;
  if (!userId) {
     res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const complaints = await prisma.complaint.findMany({where: { userId },});
     res.status(200).json(complaints);
  } catch (error) {
     res.status(500).json({message: 'Failed to fetch complaints',details:error });
  }
};

export const complaints_post = async (req: Request, res: Response) => {
  const { title, description, location, category } = req.body;
  const {userId} = req.params;  

  if (!userId) {
     res.status(401).json({ message: 'Unauthorized: No user logged in' });  
     return;
  }

  if (!title || !description) {
    res.status(400).json({ message: 'Title and description are required' });  
    return;
  }

  try {
    const Complaint = await prisma.complaint.create({
      data: {
        title,
        description,
        category,
        location,
        userId
       },
    });
  res.status(201).json(Complaint);  
  } catch (error) {
    console.error();
    res.status(500).json({ message: 'Server error', details: error });  
  }

} ;

export const complaintId_update = async (req:Request, res:Response) => {
const {id, title, description} = req.body;
try {
const updatedComplaint = await prisma.complaint.update({
    where:{id},
    data:{
        title,
        description,
    },});

    res.status(200).json(updatedComplaint);
}
 catch (error) {
   res.status(500).json({message:'Server error' , details:error}); 
}
};

export const complaintId_delete = async (req:Request, res:Response) => {
    const {id} = req.body;
    try {
        await prisma.complaint.delete({where:{id},});
        res.status(200).send('Delete successsfully');
    } catch (error) {
        res.status(500).json({messagr:'Server error', details:error});
    }
};