import React from 'react'
import Image from 'next/image'
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

const headerItems = [
    {
        title: 'HOME',
        icon: HomeIcon
    },
    {
        title: 'TRENDING',
        icon: LightningBoltIcon
    }, {
        title: 'VERIFIED',
        icon: BadgeCheckIcon
    },
    {
        title: 'COLLECTIONS',
        icon: CollectionIcon
    },
    {
        title: 'SEARCH',
        icon: SearchIcon
    }, {
        title: 'ACCOUNT',
        icon: UserIcon
    },
]
const HeaderItem = ({ Icon, title }) => {
    return (

        <div key={title} className=' group inline-flex justify-center
         items-center flex-col cursor-pointer w-14 hover:text-white
         sm:w-20
         '>
            <Icon
                className="w-8 h-auto group-hover:animate-bounce group-hover:scale-125"
                aria-hidden="true"
            />
            <p className='opacity-0 group-hover:opacity-100 font-semibold tracking-widest'>
                {title}
            </p>
        </div>

    )
}

export default function Header() {

    return (
        <header className='mt-4 flex flex-col max-w-5xl mx-auto
        md:flex-row md:justify-between md:items-end
        '>

            <div className='flex justify-center md:justify-start'>
                {
                    headerItems.map((item) => {
                        return (
                            <HeaderItem
                                key={item.title}
                                Icon={item.icon}
                                title={item.title} />
                        )

                    })
                }
            </div>
            <Image
                className=' justify-self-center'
                width={200}
                height={100}
                src='/assets/hulu.svg'
                alt="hulu-logo"
            />

        </header>

    )
}



