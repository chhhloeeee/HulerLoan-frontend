import Link from 'next/link'

export default function AddUser() {
    return (
      <>
    <h1>Add User</h1>
    <h2>
        <Link href="/home">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
    )
  }