import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}

// This is how you can access route params
const UserDetailPage = ( { params: { id } }: Props) => {
  if (id > 10) notFound();
  
  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage