import Head from 'next/head'
import { Fragment } from 'react'
import { colors } from '../data/1000'
import ColorCard from '@/components/ColorCard'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Shades</title>
        <meta name='description' content='The super fast color schemes generator!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 my-3'>
          {colors.map((color, index) => (
            <ColorCard key={index} color={color} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}
