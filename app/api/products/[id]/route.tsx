import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }) {
       const product = await prisma.product.findUnique({
            where: { id: parseInt(params.id) },
        });

        if (!product)
            return NextResponse.json({ error: 'Product not found'}, { status: 400 }) 
        return NextResponse.json(product); 
    }

    
// PUT - for replacing an object {id, name, price} vs. PATCH - for updating one or more properties
export async function PUT(
    request: NextRequest,
    { params }: {params: { id: number } }) {
    // Validate the request body
   const body = await request.json();
   const validation = schema.safeParse(body);
   if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })
    // If invalid, return 400 - bad request

    if (params.id > 10)
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    // Fetch the user with the given id
    // If doesn't exist, return 404

    return NextResponse.json({ id: 1, name: body.name, price: body.price })
    // Update the user
    // Return the updated user  
    }


export function DELETE(
    request: NextRequest,
    { params }: {params: { id: number }}
) {
  if (params.id > 10)
    return NextResponse.json({ error: 'Product not found'}, { status: 404})
  // Fetch user from db
  // If not found, return 404

  // Delete the user from db
  return NextResponse.json({});
  // Return 200

}