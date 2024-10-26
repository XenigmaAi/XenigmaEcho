"use client";

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Header } from './Header';
import { Social } from '../auth/Social';
import { BackButton } from '../auth/BackButton';

interface CardWrapperProps {
    children: React.ReactNode;
    variant: "auth" | "gen";
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    variant = "auth",
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}: CardWrapperProps) => {
  return (
    <div>
        {variant === "auth" && (
            <Card className='shadow-md w-[430px]'>
                <CardHeader>
                    <Header text={headerLabel} />
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                {showSocial ? (
                    <CardFooter className='pb-0'>
                        <Social />
                    </CardFooter>
                ): null}
                <CardFooter className='py-3 pb-3.5'>
                    <BackButton 
                        label={backButtonLabel}
                        href={backButtonHref}
                    />
                </CardFooter>
            </Card>
        )}
    </div>
  )
}