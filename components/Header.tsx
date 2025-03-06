"use client"
import Link from 'next/link'
import React from 'react'
import AgentPulse from './AgentPulse'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'


function Header() {
  return (
    <header className="sticky  top-3 left-0 right-0 px-4 md:px-0 bg-white/60 
    backdrop-blur-sm border-b border-fray-200 z-50">
      <div className='container mx-auto px-4 h-16 '>
        <div className='flex items-center justify-between py-4'>
        {/*Left*/}
        <div className='flex items-center justify-between h-10 '>
          <Link href ="/" className='flex items-center  gap-4'>
              <AgentPulse size='small' color='blue' pulse={true}/>
            <h1 className="text-xl  font-semibold bg-gradient-to-r from-blue-600 
            to-blue-400 bg-clip-text text-transparent">ContentTube</h1>
          </Link>
        </div>
        {/*Right*/}
        <div className='flex items-center gap-4'>
          <SignedIn>
            <Link href="/manage-plan" className="btn btn-primary">
              <Button variant="outline" 
              className='mr-4 bg-gradient-to-r from-blue-600 to-blue-400 
              text-transparent bg-clip-text'>Manage Plan</Button>
            </Link>

            <div className="p-2 w-10 h-10 flex items-center justify-center 
            rounded-full border bg-blue-100 border-blue-200">
              <UserButton />
          </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" className='bg-gradient-to-r from-blue-600 
              to-blue-400 text-transparent bg-clip-text'>
              Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
