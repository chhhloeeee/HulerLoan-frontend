import Link from 'next/link'

export default function ListUsers() {
    return (
      <>
    <h1>Users</h1>
    <h2>
        <Link href="/home">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
    )
  }