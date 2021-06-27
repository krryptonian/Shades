import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <Navbar />
      <Toaster
        position='bottom-left'
        toastOptions={{
          style: {
            background: '#121212',
            color: '#dcdcdc',
          },
        }}
        reverseOrder={false}
      />
      <div className='overflow-y-auto z-0 hide-scrollbar'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
