import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const posts = [
  { title: 'Coding Is Extra Hard If You Are A Nigerian', excerpt: 'There are many difficulties associated with coding in Africa and especially Nigeria' }, 
  { title: 'Understanding Javascript and React', excerpt: 'Get an understanding of JS before delving into React' }, 
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Bangkok Developer Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 bg-black'>
        <div className='lg:col-span-8 col-span-1 bg-red-600'>
          {posts.map((post, index) => (
            <div key={index}>
              {post.title}
              <hr />
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1 bg-yellow-500'>
          <div className='lg:sticky relative top-8 bg-purple-500'>

          </div>
        </div> 
      </div>
      
    </div>
  )
}

