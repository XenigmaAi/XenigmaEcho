import React from 'react'
import { Logo } from './Logo'

interface HeaderProps{
    text?: string;
}

export const Header = ({
    text,
}: HeaderProps) => {
  return (
    <div className='flex items-center justify-center w-full'>
        <div className="flex flex-col gap-y-1.5 items-center justify-center">
            <div className="flex flex-col gap-y-1">
                <Logo size="fav" label='Xenigma Echo' />
            </div>
            <h1 className='text-[13px] text-muted-foreground'>
                {text}
            </h1>
        </div>
    </div>
  )
}