import { Metadata } from 'next'
import React from 'react'

interface Props {
    params: { slug: string[] };
    searchParams: { sortOrder: string }
}

const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return (
    <div> ProductPage {slug} {sortOrder}</div>
  )
}

export default ProductPage

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch('');

  return {
    title: 'product.title',
    description: '....'
  }
}