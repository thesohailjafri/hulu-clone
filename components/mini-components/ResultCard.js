import React from 'react'
import Image from 'next/image'
import { CalendarIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
export default function ResultCard({ result }) {
    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original'
    return (
        <div className='bg-black bg-opacity-50 rounded overflow-hidden shadow-md
         flex flex-col cursor-pointer transition duration-150  sm:hover:scale-110
        md:hover:scale-[1.08]
         xl:hover:scale-[1.06]
         2xl:hover:scale-[1.04]
         '>
            <div>
                <Image
                    className=' object-contain'
                    layout='responsive'
                    height={1080}
                    width={1920}
                    alt={result.title}
                    src={BASE_IMG_URL + result?.backdrop_path || result?.poster_path} />

            </div>

            <div className='p-3 flex flex-col gap-y-1 flex-grow'>
                <h3 className=' font-semibold text-2xl truncate max-w-md text-white'>
                    {result.title}
                </h3>
                <h4 >
                    {result.title !== result.original_title ?
                        <>
                            Original title : <span className=' text-green-300'>{result.original_title} </span>

                        </>
                        : ''}
                </h4>
                <span className='flex items-center space-x-2'>
                    <CalendarIcon className='h-6 inline' />
                    <span>
                        {result.release_date}
                    </span>
                </span>
                <p className='my-2'>
                    {result.overview.slice(0, 100) + '...'}
                </p>
                <p className='mt-auto space-x-2'>
                    <StarIcon className='h-5 inline text-[#ffd700]' />
                    <span className='first-letter:text-2xl'>
                        {result.vote_average} ({result.vote_count})
                    </span>
                </p>
            </div>
        </div>
    )
}
