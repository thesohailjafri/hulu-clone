import React from 'react'
import { requestObj } from '../utils/requests'
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()
    return (
        <nav className='relative'>
            <div className='my-5 flex px-10 text-2xl whitespace-nowrap space-x-12
        sm:px-20 sm:space-x-20 overflow-x-scroll scrollbar-hide relative
        '>
                {
                    Object.entries(requestObj).map(([key, { title, url }]) => {
                        return (
                            <h2 key={key}
                                onClick={() => {
                                    router.push(`/?genre=${key}`)
                                }}
                                className='last:pr-20 cursor-pointer transition duration-100
                            transform hover:scale-125 hover:text-white
                            active:scale-125 active:text-white mb-2 font-semibold'
                            >
                                {title}
                            </h2>
                        )
                    })
                }
            </div>

            <div className=' absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
        </nav>
    )
}
