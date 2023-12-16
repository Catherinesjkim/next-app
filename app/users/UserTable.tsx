import React from 'react'
import Link from 'next/link';
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    const users: User[] = await res.json();

    // Sort users in ascending order by name or email
    const sortedUsers = sort(users).asc(
        sortOrder === 'email'
            ? (user) => user.email 
            : (user) => user.name
    ); 

// http://localhost:3000/products?sortOrder=
// It's a common format used in a web development,known as a URL with a query string 
// Query String begins with a questions mark and is used to pass data to the SERVER as key-value pairs.
// `sortOrder` is a key, and you would provide a value to define the sor order of the product i.e. milk
    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>
                        <Link href="/users?sortOrder=name">Name</Link>
                    </th>
                    <th>
                        <Link href="/users?sortOrder=email">Email</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
  )
}

export default UserTable