import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


export async function POST(req: NextRequest){
    try{
        const {email, password} = await req.json();
        console.log(email, password)

        let user = await prisma.user.findUnique({where:email})
        if(!user){
            NextResponse.json({message:"User not found"}, {status:404})
        }

        const token = jwt.sign({user}, process.env.JWT_SECRET || "")
    }catch(err:any){

    }
}