"use client";

import React from 'react'

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from '../ui/button';

export const Social = () => {
  return (
    <div className='flex items-center w-full gap-x-1.5'>
        <Button
            className='w-full'
            size={"lg"}
            variant={"outline"}
            onClick={() => {}}
        >
            <FcGoogle />
        </Button>
        <Button
            className='w-full rounded-md'
            size={"lg"}
            variant={"outline"}
            onClick={() => {}}
        >
            <FaGithub />
        </Button>
    </div>
  )
}