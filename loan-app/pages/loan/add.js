import Link from 'next/link'

export default function AddLoan() {
    return (
      <>
    <h1>New Loan</h1>
    <h2>
        <Link href="/home">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
    )
  }