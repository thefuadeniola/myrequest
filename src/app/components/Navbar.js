import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='p-4'>
        <div className='border-[#b1a7a6] border-b pb-4 pl-2 flex flex-row items-center justify-between relative'>
            <div className='flex flex-row items-center space-x-2'>
                <Link href='/' className='font-bold font-inter text-lg md:text-2xl text-[#a4161a]'>myrequest.com</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar