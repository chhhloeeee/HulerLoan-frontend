import Link from 'next/link'

export default function ListReturn() {
    return (
      <>
    <h1>Returns</h1>
    <h2>
        <Link href="/home">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
    )
  }