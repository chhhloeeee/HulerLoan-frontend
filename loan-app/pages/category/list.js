import Link from 'next/link'

export default function ListCategory() {
    return (
      <>
    <h1>Categories</h1>
    <h2>
        <Link href="/home">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
    )
  }