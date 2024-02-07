'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import Progress  from '../Progress'
import {Button} from "@nextui-org/react";



const SubmitButton = ({ value, ...props }) => {
    const { pending } = useFormStatus()

  return (
   <>
   <Button 
   type='submit'
   disabled={pending} {...props}>
      { pending ? <Progress /> : value }
    </Button>
   </>
  )
}

export default SubmitButton