import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

// GET - getting data
export async function GET(request: NextRequest) {
    const products = await prisma.product.findMany();
    // To prevent caching, we need to add `request: NextRequest`
    // fetch users from a db
    return NextResponse.json(products);
}

// POST - for creating data/objects {id, name, price}
export async function POST(request: NextRequest) {
   const body = await request.json();
   const validation = schema.safeParse(body);
   if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

   const newProduct = await prisma.product.create({
      data: {
         name: body.name,
         price: body.price
      }
   });

   return NextResponse.json(newProduct, { status: 201 });
}

// PUT/PATCH - updating data