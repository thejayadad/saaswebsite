'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import {Button} from "@nextui-org/react";



const SubmitButton = ({ value, ...props }) => {
    const { pending } = useFormStatus()

  return (
   <>
   <Button 
   type='submit'
   disabled={pending} {...props}>
      { pending ? 'Loading...' : value }
    </Button>
   </>
  )
}

export default SubmitButton