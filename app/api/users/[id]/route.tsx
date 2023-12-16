import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
    request: NextRequest, 
    { params }: {params: { id: string } }) {
        const user = await prisma.user.findUnique({
            where: { id: params.id }
        })
        // Fetch data from a db
        // If not found, return 404 error
        // Else return data
        if (!user)
            return NextResponse.json({ error: 'User not found'}, { status: 404 })

        return NextResponse.json(user);
    }

    
    // PUT - for replacing the entire object {k:v, k:v, k:v} with a new set of data vs. 
    // PATCH - for updating one or more properties (each kv pair within an obj is a property), you only send properties what you want to update
    export async function PUT(
        request: NextRequest,
        { params }: {params: { id: string } }) {
        // Validate the request body
       const body = await request.json();
       const validation = schema.safeParse(body);
       if (!validation.success)
            return NextResponse.json(validation.error.errors, { status: 400 })
        // If invalid, return 400 - bad request
       const user = await prisma.user.findUnique({
            where: { id: params.id }
        });

        if (!user)
            return NextResponse.json(
                { error: 'User not found' }, 
                { status: 404 }
            );
        // Fetch the user with the given id
        // If doesn't exist, return 404
        const updatedUser = await prisma.user.update({
           where: { id: user.id },
           data: {
            name: body.name,
            email: body.email
           }
        })

        return NextResponse.json(updatedUser);
        // Update the user
        // Return the updated user  
        }


    export async function DELETE(
        request: NextRequest,
        { params }: {params: { id: string }}
    ) {
       const user = await prisma.user.findUnique({
            where: { id: params.id}
        })
      if (!user)
        return NextResponse.json(
            { error: 'User not found'}, 
            { status: 404}
        );

    await prisma.user.delete({ 
        where: { id: user.id }
    });
      // Fetch user from db
      // If not found, return 404

      // Delete the user from db
      return NextResponse.json({});
      // Return 200
    }