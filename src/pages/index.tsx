import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

export default function Home(){
    return(
        <main className='bg-[#26222A] my-10'>
            <div id='navbar' className='flex items-start justify-start space-x-12 pb-32'>
                <Image alt='logo' src='/bcs.svg' width={100} height={1} className='ml-10 mr-[400px]'></Image>
                <Link href='/#' className='text-blue-200'>HOME</Link>
                <Link href='/lessons' className='text-white hover:text-pink-200'>LESSONS</Link>
                <Link href='/account' className='text-white hover:text-pink-200'>ACCOUNT</Link>
            </div>
            <section id='title' className='flex items-center justify-center'>
                <Image alt='BetterCS Title' src='/title.png' width={924} height={232}></Image>
            </section>
            <section id='description' className='text-center p-8 text-white'>
            <div className='max-w-2xl mx-auto overflow-hidden'>
                <p className='text-lg'>
                    a newer and more 
                    <span className='text-[#FF8DC4]'> intuitive </span>
                    way to learn 
                    <span className='text-[#E8FF8C]'> fundamental Computer Science  </span>
                    topics such as
                    <span className='text-[#FFB054]'> Data Structures, Algorithms, Assembly, & Discrete Mathematics</span>
                </p>
            </div>
            </section>
            <div className='w-full items-center justify-center flex py-10'>
            <div className='flex items-center justify-center w-[140px] h-[40px] border-white outline-white rounded-md pb-20 text-white'>
                <Link href='/lessons'>Start Here</Link>
            </div>
            </div>
            <section id='showcase' className='flex items-center justify-center'>
                <Image src='/editor_diagram.png' alt='diagram' width={700} height={563} className='pb-10'></Image>
            </section>
            <section id='diagram_description' className='text-center p-8 text-white'>
                <div className='max-w-2xl mx-auto overflow-hidden'>
                <p className='text-white text-lg'>
                    Through our built in editor and
                    <span className='text-[#FF8DC4]'> interactive lessons, </span>
                    users will be able to enjoy a 
                    <span className='text-[#E8FF8C]'> robust learning experience </span>
                    and build a more
                    <span className='text-[#FFB054]'> intuitive understanding </span>
                    of Computer Science.
                </p>
                </div>
            </section>
        </main>
    )
}