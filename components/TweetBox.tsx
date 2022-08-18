import React, { useState } from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
} from '@heroicons/react/outline'

function TweetBox() {
    const [input, setInput] = useState('')
    return (
        <div className='flex space-x-2 p-5'>
            <img
                className='mt-4 h-14 w-14 rounded-full object-cover'
                src='https://i.imgur.com/B9VaZJE.jpg'
                alt=''
            />

            <div className='flex flex-1 items-center pl-2'>
                <form className='flex flex-1 flex-col'>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="What's Happening?"
                        className='h-24 w-full
                        text-xl outline-none placeholder:text-xl'
                    />
                    <div className='flex items-center'>
                        <div className='flex flex-1 space-x-2 text-twitter'>
                            <PhotographIcon className='h-5 w-5 cursor-pointer
                            transition-transform duration-150 ease-out
                            hover:scale-150'/>
                            <SearchCircleIcon className='h-5 w-5' />
                            <EmojiHappyIcon className='h-5 w-5' />
                            <CalendarIcon className='h-5 w-5' />
                            <LocationMarkerIcon className='h-5 w-5' />
                        </div>

                        <button
                            disabled={!input}
                            className='px-5 bg-twitter py-2 rounded-full 
                            font-bold text-white disabled:opacity-40'>Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetBox
