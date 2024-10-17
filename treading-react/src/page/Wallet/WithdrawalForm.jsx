import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { store } from '@/Store/Store'
import { withdrawalRequest } from '@/Store/WithDrawal/Action'
import { DialogClose } from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const WithdrawalForm = () => {


    const dispatch = useDispatch()
    const { wallet, withdrawal } = useSelector(store => store)
    const [amount, setAmount] = useState('')


    const handleChange = (e) => {
        setAmount(e.target.value)
    }


    const handleSubmit = () => {
        dispatch(withdrawalRequest({ amount, jwt: localStorage.getItem("jwt") }))
        console.log(amount)
    }
    return (
        <div className='pt-10 space-y-5'>
            <div className='felx justify-between items-center rounded-md bg-slate-900
            text-xl font-bold px-5 py-4'>
                <p>Available Balance</p>
                <p>$45654</p>

            </div>
            <div className='felx flex-col items-center'>
                <h1>Enter Withdrawal Amount</h1>
                <div className='flex items-center justify-center'>
                    <Input
                        onChange={handleChange}
                        value={amount}
                        className="withdrawalInput py-7 border-none outline-none 
                        focus:outline-none px-0 text-2xl text-center"
                        Placeholder="$74545"
                    // type="number"
                    />
                </div>
            </div>
            <div>
                <p className='pb-2'>Transfer To</p>
                <div className='flex items-center gap-5 border px-5 py-2 rounded-md'>
                    <img

                        className="h-8 w-8"
                        src="src\assets\react.svg" alt="" />
                    <div>
                        <p className='text-xl font-bold'>{withdrawal.paymentDetails?.bankName}</p>
                        <p className='text-xs'>{withdrawal.paymentDetails?.accountNumber}</p>
                    </div>
                </div>
            </div>
            <DialogClose className='w-full'>
                <Button
                    onClick={handleSubmit}
                    className="w-full py-7 text-xl">
                    Withdraw
                </Button>
            </DialogClose>

        </div>
    )
}

export default WithdrawalForm