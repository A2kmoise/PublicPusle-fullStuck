import { Request, Response } from 'express';
import express, { NextFunction } from 'express';
import { PrismaClient } from '../generated/prisma/client';
import { Role } from '../generated/prisma';


const prisma = new PrismaClient();

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
try {
      const admin = await prisma.Admin.findMany({
        where: {
            Role: 'ADMIN'
        }
    });

    if (admin) {
        next()
    } else {
        res.send('Access denied. For admins only');
    }  
} catch (error) {
    res.status(500).json({message:"Server error", details:error})
}


}