import React, { useContext } from 'react'

import Link from 'next/link'

const categories =[
    { name: 'React', slug: 'react' }, 
    { name: 'Honest And Personal', slug: 'honest-and-personal' }, 
    { name: 'Web Development', slug: 'web-development'}
]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8 border border-red-500'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl bg-gradient-to-b from-white to-white/60 text-transparent bg-clip-text'>
                        Opeyemi Bangkok
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer bg-gradient-to-b from-white to-white/60 text-transparent bg-clip-text'>
                            {category.name}
                        </span>
                        
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header