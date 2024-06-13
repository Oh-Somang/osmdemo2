import Link from 'next/link'
import React from 'react'

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>

      <div className="bg-blue-200 px-4 py-2 rounded-md mb-2">
        <h1 className="text-lg font-bold">HCJ Demo</h1>
        <p>HTML, CSS, Javascript 데모 기능 </p>
        <Link href="#" className="text-yellow-900 font-bold">
          링크
        </Link>
      </div>

      <div className="bg-blue-200 px-4 py-2 rounded-md mb-2">
        <h1 className="text-lg font-bold">Image Gallery</h1>
        <p>자바스크립트를 이용한 이미지 갤러리 </p>
        <Link href="#" className="text-yellow-900 font-bold">
          링크
        </Link>
      </div>

      <div className="bg-blue-200 px-4 py-2 rounded-md mb-2">
        <h1 className="text-lg font-bold">키오스크 메뉴</h1>
        <p>키오스크 메뉴 주문서 </p>
        <Link href="#" className="text-yellow-900 font-bold">
          링크
        </Link>
      </div>
    </div>
  )
}
