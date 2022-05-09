import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const NavBar = () => {
	let router = useRouter();
	console.log(router);
	let path = router.pathname;
  return (
	 <nav className='bg-purple-600 text-white py-2'>
		 <ul className='flex gap-4 font-main-font text-xl justify-center items-center'>
			 <Link href='/'>
				 <li className={path=='/'?'font-bold ':''+''}>Home</li>
			 </Link>
			 <Link href='/tshirt'>
				 <li className={path=='/tshirt'?'font-bold ':''+''}>Tshirt</li>
			 </Link>

			 <Link href='/hoodie'>
			 	<li className={path=='/hoodie'?'font-bold ':''+''}>Hoodie</li>
			 </Link>
			 <Link href='/about'>
			 	<li className={path=='/about'?'font-bold ':''+''}>About</li>
			 </Link>
		 </ul>
	 </nav>
  )
}

export default NavBar
