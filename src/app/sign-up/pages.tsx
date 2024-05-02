"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import React from 'react'

const page = () => {
  return (
    
     
    <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <h1 className='text-2xl font-bold text-gray-800'>Create an account</h1>
          <a href='sign-in' className='text-blue-500'>Already have an account? Sign in</a>
        </div>
        <div className='grid gap-6'>
          <form>
            <div className='grid gap-2'>
              <div className='grid gap-1 py-2'>
                <Label htmlFor='email'>Email</Label>
                <Input className={cn({'focus-visible:ring-red-500': true,})} placeholder='Enter Your Email' />
              </div>
            </div>
            <div className='grid gap-2'>
              <div className='grid gap-1 py-2'>
                <Label htmlFor='email'>Password</Label>
                <Input className={cn({'focus-visible:ring-red-500': true,})} placeholder='Password' />
              </div>
              <Button>Sign Up</Button>
            </div>
          </form>
        </div>
      </div>  
    </div>
  
    
  )
}

export default page
