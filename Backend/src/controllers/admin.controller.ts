import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const maxAge = 3 * 24 * 60 * 60
const createTokens = (id: string) => {
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) {
        throw new Error("JWT_SECRET_KEY is not defined in environment variables");
    }
    return jwt.sign({ id }, secret, {
        expiresIn: maxAge
    })
}

export const adminlogin_get = (req: Request, res: Response) => {
    res.send('User Logged in');
};

export const adminLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {


        const admin = await prisma.Admin.findUnique({ where: { email } });

        if (!admin || admin.role !== 'ADMIN') {
            res.status(400).send('Access denied. Admins only')
        }

        if (admin) {
            const auth = await bcrypt.compare(password, admin.password);
            if (auth) {
                res.status(200).json(admin);
            }
            throw Error('password incorrect');
        }
        const token = createTokens(admin.id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ message: 'User loggedin', admin });
    } catch (error) {
        res.status(500).json({ message: "Server error", details: error });
    }
}

export const admindashboard_get = (req: Request, res: Response) => {
    res.send('Dashboard accessible');
};
export const complaints_get = async (req: Request, res: Response) => {
    try {
        const complaints = await prisma.complaint.findMany({
            include: {
                user: true
            },
        });

        res.status(200).json(complaints);
    } catch (err) {
        res.status(500).json({ message: "internal server error", details: err })
    }
};

export const complaintsId_read = async(req: Request, res: Response) => {
    const {id} = req.body;
    try {
        const constraint = await prisma.complaint.findUnique({where:{id}, include:{user:true, admin:true},});
      if (!constraint){
        res.status(404).json({message: 'Contraint no found'});
      }
      res.status(200).json(constraint);
    } catch (error) {
      res.status(500).json({message:"Server error", details: error});  
    }
};

export const complaints_update = async (req: Request, res: Response) => {
  const { id } = req.body;  
  const { title, description, status, adminId } = req.body; 

  try {
    
    const complaint = await prisma.complaint.findUnique({
      where: {
        id,
      },
    });

    
    if (!complaint) {
      res.status(404).json({ message: 'Complaint not found' });
    }

   
    const updatedComplaint = await prisma.complaint.update({
      where: {
        id: id,
      },
      data: {
        title: title ,
        description: description ,
        status: status ,
        adminId: adminId,
      },
    });

    res.status(200).json(updatedComplaint);
    
  } catch (error) {
     res.status(500).json({ message: 'Server error', details: error });
  }
};

