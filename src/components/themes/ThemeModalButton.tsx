'use client';
import { Button } from '@nextui-org/button'
import { useDisclosure } from '@nextui-org/modal';
import React from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import ThemeModal from '../modals/ThemeModal';



const ThemeModalButton = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <Button onPress={onOpen}>
       <MdOutlineWbSunny  />
    </Button>
    <ThemeModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}

export default ThemeModalButton