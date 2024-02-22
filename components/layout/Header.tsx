"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomButton } from "@/components";

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[2560px] mx-auto flex justify-between items-center px-6 sm:px-16 py-6">
        <Link href={"/"} className='flex items-center justify-center'>
          <Image
            src={"/logo.svg"}
            alt="CarHub logo"
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>
        <CustomButton
          title='Sign-in'
          btnType='button'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]' />
      </nav>
    </header>
  )
}

export default Header