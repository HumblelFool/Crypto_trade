import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Dialog,
    DialogContent,

    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import React, { useEffect, useState } from 'react'
import PaymentDetailsForm from './PaymentDetailsForm'
import { store } from '@/Store/Store'
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentDetails } from '@/Store/WithDrawal/Action'

const PaymentDetails = () => {

    const { withdrawal } = useSelector(store => store)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getPaymentDetails({ jwt: localStorage.getItem("jwt") }))

    }, [])


    return (
        <div className='px-20'>

            <h1 className='text-3xl font-bold py-10'> Payment Details</h1>


            {withdrawal.paymentDetails ?

                // Bank Details
                <Card>
                    <CardHeader>
                        <CardTitle>{withdrawal.paymentDetails?.bankName}</CardTitle>
                        <CardDescription>A/C No : {withdrawal.paymentDetails?.accountNumber}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex items-center '>
                            <p className='w-32'> A/C holder</p>
                            <p className='text-gray-400'> {withdrawal.paymentDetails?.accountHolderName}</p>
                        </div>
                        <div className='flex items-center'>
                            <p className='w-32'>IFSC</p>
                            <p className='text-gray-400'>: {withdrawal.paymentDetails?.ifscCode}</p>
                        </div>
                    </CardContent>
                </Card>

                :

                // Payment Details
                <Dialog>
                    <DialogTrigger>
                        <Button className="py-6">Add Payment Details</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Payment Details</DialogTitle>
                            <PaymentDetailsForm />
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            }





        </div >
    )
}

export default PaymentDetails