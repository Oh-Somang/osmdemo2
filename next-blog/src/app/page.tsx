import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold">My Next.js Blog</h1>
      <div className="mt-4 flex flex-col gap-4">
        <Image src="/blog.jpg" alt="blog" width="700" height="500" />
        <Image src="/blog2.jpg" alt="blog" width="700" height="500" />
      </div>
    </div>
  )
}
