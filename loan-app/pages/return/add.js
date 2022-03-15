import Link from 'next/link'

export default function AddReturn() {
    return (
      <>
    <h1>New Return</h1>
    <h2>
        <Link href="/home">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
    )
  }