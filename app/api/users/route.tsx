import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

// GET - getting data
export async function GET(request: NextRequest ) {
    const users = await prisma.user.findMany();

    // To prevent caching, we need to add `request: NextRequest`
    // fetch users from a db
    return NextResponse.json(users);
}

// POST - for creating data/objects {id, name}
export async function POST(request: NextRequest) {
   const body = await request.json();
   const validation = schema.safeParse(body);
   // Validate
   // If invalid, return 400
   // Else, return
   if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

    const user = await prisma.user.findUnique({
        where: { email: body.email }
    });

    if (user)
        return NextResponse.json({ error: 'User already exists'}, { status: 400 })

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    });

   return NextResponse.json(newUser, { status: 201 });
}



// PUT/PATCH - updating data

