import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

interface BackButtonProps {
    href: string;
    label: string;
}

export const BackButton = ({
    href,
    label,
}: BackButtonProps) => {
  return (
        <Button
            asChild
            variant={"link"}
            className='w-full text-blue-600 font-normal'
            size={"sm"}
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
  )
}