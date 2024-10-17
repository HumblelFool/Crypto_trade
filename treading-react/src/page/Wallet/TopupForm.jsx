import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { paymentHandler } from '@/Store/Wallet/Action'
import { DotFilledIcon } from '@radix-ui/react-icons'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const TopupForm = () => {

    const [amount, setAmount] = useState('')
    const [paymentMethod, setPaymentMethod] = useState("RAZORPAY")
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const handlePaymentMethodChange = (value) => {
        setPaymentMethod(value)
    }

    const handleSubmit = () => {
        console.log(amount, paymentMethod)
        dispatch(paymentHandler({
            jwt: localStorage.getItem("jwt"),
            paymentMethod,
            amount,
        }))
    }
    return (
        <div className='pt-10 space-y-5 '>
            <div>
                <h1 className='pb-1'>Enter Amount</h1>
                <Input
                    onChange={handleChange}
                    value={amount}
                    className="py-7 txt-lg "
                    Placeholder="$7455421"
                />
            </div>
            <div>
                <h1 className='pb-1'>Select Payment Method</h1>
                <RadioGroup className="flex "
                    onValueChange={(value) => handlePaymentMethodChange(value)}
                    defaultValue="RAZORPAY">

                    {/* Razorpay */}
                    <div className='flex items-center space-x-2 border p-3 px-5'>
                        <RadioGroupItem
                            icon={DotFilledIcon}
                            className="h-9 w-9 "
                            value="RAZORPAY"
                            id="r1"
                        />
                        <Label htmlFor="r1">
                            <div className='bg-white rounded-md px-5 py-2 w-32'>
                                <img src="src\assets\react.svg" alt="" />
                            </div>
                        </Label>
                    </div>


                    {/* Stripe */}
                    <div className='flex items-center space-x-2 border p-3 px-5'>
                        <RadioGroupItem
                            icon={DotFilledIcon}
                            className="h-9 w-9 "
                            value="STRIPE"
                            id="r2"
                        />
                        <Label htmlFor="r2">
                            <div className='bg-white rounded-md px-5 py-2 w-32'>
                                <img
                                    className='h-7'
                                    src="src\assets\react.svg" alt="" />
                            </div>
                        </Label>
                    </div>

                </RadioGroup>

            </div>
            <Button
                onClick={handleSubmit}
                className="w-full py-7">
                Submit
            </Button>

        </div>
    )
}

export default TopupForm