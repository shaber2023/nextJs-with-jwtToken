import Link from 'next/link'
import React from 'react'
import style from './nav.module.css'
const Navbar = () => {
  return (
    <div className={style.nav}>
        <Link href='/'>Home</Link>
        <Link href='/add'>Student add</Link>
        <Link href='/signIn'>SignIn</Link>
    </div>
  )
}

export default Navbar