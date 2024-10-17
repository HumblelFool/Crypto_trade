import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { transferMoney } from '@/Store/Wallet/Action'
import { DialogClose } from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TransferForm = () => {
    const dispatch = useDispatch()

    const { wallet } = useSelector(store => store)


    const [formData, setFormData] = useState({
        amount: "",
        walletId: "",
        purpose: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    const handleSubmit = () => {
        dispatch(transferMoney({
            jwt: localStorage.getItem("jwt"),
            walletId: formData.walletId,
            reqData: {
                amount: formData.amount,
                purpose: formData.purpose,
            }
        }))
        console.log(formData);
    }
    return (
        <div className='pt-10 space-y-5'>
            <div>
                <h1 className='pb-1'> Eneter Amount</h1>
                <Input
                    name="amount"
                    Placeholder="$4554"
                    onChange={handleChange}
                    value={formData.amount}
                    className="py-7"
                    type="number"
                />
            </div>
            <div>
                <h1 className='pb-1'> Wallet ID</h1>
                <Input
                    name="walletId"
                    Placeholder="#ABS4554"
                    onChange={handleChange}
                    value={formData.walletId}
                    className="py-7"
                />
            </div>
            <div>
                <h1 className='pb-1'> Eneter Purpose</h1>
                <Input
                    name="purpose"
                    Placeholder="Remark"
                    onChange={handleChange}
                    value={formData.purpose}
                    className="py-7"
                />
            </div>
            <DialogClose className='w-full'>
                <Button className="w-full py-7"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </DialogClose>


        </div>
    )
}

export default TransferForm