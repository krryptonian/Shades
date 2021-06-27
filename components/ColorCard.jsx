import ntc from '@yatiac/name-that-color'
import { BlackAndWhite, RGBA } from '../helpers'
import { format } from 'timeago.js'
import { DotsHorizontalIcon, ClipboardCopyIcon, ThumbUpIcon } from '@heroicons/react/outline'
import Clipboard from 'react-clipboard.js'
import toast from 'react-hot-toast'

const ColorCard = ({ color }) => {
  return (
    <div className='h-[170px] block overflow-hidden shadow-md rounded-md bg-white'>
      <div className='h-[134px] w-full flex palette_colors'>
        {color.map((color, i) => (
          <div
            key={i}
            style={{ backgroundColor: RGBA(color, 1) }}
            className='flex-grow relative overflow-hidden transition-all duration-150 ease-in-out cursor-pointer'
          >
            <Clipboard
              className='w-full h-full focus:outline-none'
              onClick={() => {
                toast(
                  () => (
                    <span>
                      <strong>{ntc(color).colorName}</strong> color copied!
                    </span>
                  ),
                  {
                    icon: <ClipboardCopyIcon className='h-4 w-4' />,
                  }
                )
              }}
              data-clipboard-text={color}
            >
              <span
                className='w-full text-center font-semi-bold block absolute top-2/4 -mt-2 uppercase opacity-0 select-none'
                style={{ color: BlackAndWhite(color) }}
              >
                {color.substring(1)}
              </span>
            </Clipboard>
          </div>
        ))}
      </div>
      <div className='h-[36px]'>
        <div className='h-full flex items-center justify-between px-4'>
          <div className='flex items-center text-xs text-gray-500 font-medium'>
            <div className='flex items-center'>
              <button className='mr-1 block outline-none hover:outline-none focus:outline-none active:outline-none'>
                <ThumbUpIcon className='h-4 w-4' />
              </button>
              <span>0 Likes</span>
            </div>
            <span className='mx-2'>&#8226;</span>
            <span>{format(new Date())}</span>
          </div>
          <div>
            <button className='block hover:bg-gray-200 p-1 rounded transition-all duration-150 ease-in-out outline-none hover:outline-none focus:outline-none active:outline-none'>
              <DotsHorizontalIcon className='h-4 w-4' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorCard
