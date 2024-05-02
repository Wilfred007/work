import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from './ui/button'

const NavItems = () => {
  return (
    <div className="flex justify-end gap-4 mt-6 mb-5">
    <Link href='/' className={buttonVariants()}>Blog</Link>
    <Link href="/sign-up" className={buttonVariants()}>Sign Up</Link>
    <Button variant='ghost'>Login &rarr;</Button>
    <Button variant='ghost'>API Docs &rarr;</Button>

  </div>
  )
}

export default NavItems
