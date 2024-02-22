"use client"

import { footerLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col border-t text-black-100 border-gray-100">
      <div className="flex justify-between items-center max-md:flex-col flex-wrap gap-5 sm:px-16 px-6 py-10">
        <div className="flex justify-start items-start flex-col gap-6">
          <Image
            src={"/logo.svg"}
            alt="CarHub logo"
            width={118}
            height={18}
            className='object-contain'
          />
          <p className="text-base text-gray-700">
            CarHub © 2024 <br />
            All rights reserved.
          </p>
        </div>


        <div className="footer__links">
          {footerLinks.map(data => {
            return (
              <div className="footer__link" key={data.title}>
                <h3 className="font-bold">{data.title}</h3>
                {data.links.map(item => {
                  return (
                    <Link
                      href={item.url}
                      key={item.title}
                      className="text-gray-500"
                    >
                      {item.title}
                      </Link>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer