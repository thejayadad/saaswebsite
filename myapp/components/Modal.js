'use client'
import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { FiPlus } from "react-icons/fi"
import UploadForm from './Forms/UploadForm';
import Logo from './Logo';

const Modals = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
       <Button onPress={onOpen} variant="bordered"
        startContent={<FiPlus/>}
       >Post Memory</Button>

          <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
          <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Share A Memory Below</ModalHeader>
          <div className='flex justify-center w-full'>
          <Logo 
            width={150}
            height={150}
          />
          </div>
          <ModalBody>
            <UploadForm />
          </ModalBody>
        </ModalContent>
        </Modal>
    </>
  )
}

export default Modals