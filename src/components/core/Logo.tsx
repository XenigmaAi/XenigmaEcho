import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

interface LogoProps{
    size?: "default" | "small" | "large" | "fav";
    label?: string,  // The text to be displayed in the logo
}

export const Logo = ({
    size = "default",
    label,
}: LogoProps) => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className={cn(size === "fav" ? "flex items-center gap-x-1.5" : null)}>
            <Image 
                src={
                    size === "default" || size === "large" || size === "small" ? "/EchoLogo.png" : "/EchoFavicon.png"
                }
                alt='Echo'
                width={
                    size === "default"? 180 : size === "small"? 100 : size === "large"? 400 : 40
                }
                height={
                    size === "default"? 200 : size === "small"? 100 : size === "large"? 400 : 40
                }
                className='shadow-lg rounded-full'
                />
            {label && (
                <h1 className='text-[26px] font-bold'>
                    {label}
                </h1>
            )}
        </div>
    </div>
  )
}