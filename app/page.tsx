'use client'
import { signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  const session = useSession({
    required:true,
    onUnauthenticated(){
      redirect('/signin');
    }
  })
  return (
    <div className='p-8'>
      <div>{session?.data?.user?.email}</div>
      <button className='' onClick={() => signOut()}>Logout</button>
    </div>
  )
}

Home.requireAuth = true;