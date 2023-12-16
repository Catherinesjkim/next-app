// In this page we can access the string query params
// Loading...This is not going to affect SEO since this is what the Client will initially see. 
// So, the Server send it to the Client, but it doesn't close the connection, so it doesn't terminate the Request Response Lifecycle.
// It will then wait for the user table component to render, & then it will send additional data back to the Client. 
// This is called streaming, the same technology we have when streaming videos, audios and so on and we can also stream HTML content. 
// On a given page, we can have multiple suspense components or boundaries. 
import React from 'react';
import Link from 'next/link';
import UserTable from './UserTable';

interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className='btn'>New User</Link>
        <UserTable sortOrder={sortOrder} />
    </>
  );
}


export default UsersPage