import React from 'react'

function Header(props) {
  return (
    <header className='w-full flex bg-gray-50 justify-around space-x-10 h-20 align-center'>
      <div className='flex w-full justify-center'>
        <h1 className='font-bold underline text-xl h-auto'>{ props.title }</h1>
      </div>
    </header>
  )
}

export default Header