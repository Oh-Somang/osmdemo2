import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-900 text-white px-8 py-4">
      <Link href="/" className="text-2xl font-bold">
        Next Blog
      </Link>
      <div>
        <Link
          href="/intro"
          className="hover:font-bold hover:text-gray-300 px-4"
        >
          Intro
        </Link>
        <Link
          href="/project"
          className="hover:font-bold hover:text-gray-300 px-4"
        >
          Project
        </Link>
        <Link
          href="/photo"
          className="hover:font-bold hover:text-gray-300 px-4"
        >
          Photo
        </Link>
      </div>
    </nav>
  )
}
