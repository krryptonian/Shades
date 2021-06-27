import Link from 'next/link'
import { useState } from 'react'
import {
  MenuIcon,
  ColorSwatchIcon,
  FireIcon,
  LightningBoltIcon,
  HeartIcon,
  SearchIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
  const [SearchBoxIsOpen, setSearchBoxIsOpen] = useState(false)
  const [MenuIsOpen, setMenuIsOpen] = useState(false)

  const Pills = [
    {
      id: 1,
      title: 'New',
      icon: <ColorSwatchIcon className='h-5 w-5' />,
      link: '/new',
    },
    {
      id: 2,
      title: 'Popular',
      icon: <FireIcon className='h-5 w-5' />,
      link: '/popular',
    },
    {
      id: 3,
      title: 'Random',
      icon: <LightningBoltIcon className='h-5 w-5' />,
      link: '/random',
    },
    {
      id: 4,
      title: 'Collection',
      icon: <HeartIcon className='h-5 w-5' />,
      link: '/collection',
    },
  ]

  return (
    <div className='flex flex-col'>
      <div className='bg-gray-900 py-3 text-orange-200'>
        <div className='container flex items-center justify-between'>
          <div className='flex items-center'>
            <button
              onClick={() => {
                setMenuIsOpen(!MenuIsOpen)
              }}
              className='focus:outline-none hover:text-orange-400 transition duration-150 ease-in-out'
            >
              <MenuIcon className='h-6 w-6' />
            </button>
            <Link href='/'>
              <a className='ml-3 text-lg font-medium uppercase tracking-wider'>Shades</a>
            </Link>
          </div>
          <div className='flex space-x-3'>
            <motion.button
              onClick={() => setSearchBoxIsOpen(!SearchBoxIsOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='focus:outline-none hover:text-orange-400 transition duration-150 ease-in-out'
            >
              <SearchIcon className='h-6 w-6' />
            </motion.button>
            <button className='focus:outline-none hover:text-orange-400 transition duration-150 ease-in-out'>
              <UserIcon className='h-6 w-6' />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {SearchBoxIsOpen && (
          <motion.div animate={{ height: 'auto' }} initial={{ height: 0 }} exit={{ height: 0 }} className='bg-gray-50'>
            <div className='container'>
              <input
                type='search'
                autoComplete='off'
                className='appearance-none w-full py-3 bg-gray-50 text-gray-900 focus:outline-none transition duration-150 ease-in-out'
                placeholder='Search palettes...'
                name='search'
                id='search'
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className='py-2 bg-gray-800 text-orange-200 overflow-hidden'>
        <ul className='container flex space-x-2 overflow-y-auto hide-scrollbar'>
          {Pills.map((pill) => (
            <li key={pill.id}>
              <Link href={pill.link}>
                <a className='px-4 py-2 inline-flex items-center rounded-xl bg-gray-900 hover:bg-gray-700 transition duration-150 ease-in-out'>
                  {pill.icon}
                  <span className='ml-2 font-medium'>{pill.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* {MenuIsOpen && (
        <div className='flex flex-col absolute h-screen bg-gray-50 w-full sm:w-1/2 z-10 p-4 drop-shadow-lg'>
          <div className='inline-flex items-center justify-between text-gray-900'>
            <span className='uppercase text-xl font-bold'>Menu</span>
            <button
              onClick={() => {
                setMenuIsOpen(!MenuIsOpen)
              }}
              className='block p-1 rounded-md hover:bg-gray-200 focus:outline-none active:outline-none transition duration-150 ease-in-out'
            >
              <XIcon className='h-5 w-5' />
            </button>
          </div>
          <div className=''></div>
        </div>
      )} */}
    </div>
  )
}

export default Navbar
