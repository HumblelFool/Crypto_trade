import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { addPaymentDetails } from '@/Store/WithDrawal/Action'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const PaymentDetailsForm = () => {

    const dispatch = useDispatch()

    const form = useForm({
        resolver: "",
        defaultValues: {
            accountHolderName: "",
            ifsc: "",
            accountNumber: "",
            bankName: "",
        }

    })

    const onSubmit = (data) => {
        dispatch(addPaymentDetails({
            paymentDetails: data,
            jwt: localStorage.getItem("jwt"),
        }))
        console.log(data);
    }

    return (
        <div className='px-10 py-10'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <FormField
                        control={form.control}
                        name="accountHolderName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Account Holder Name</FormLabel>
                                <FormControl>
                                    <Input
                                        // name="acount holderName"
                                        className="border w-full border-gray-700 p-5 "
                                        placeholder="Sudhanshu" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="ifsc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>IFSC CODE</FormLabel>
                                <FormControl>
                                    <Input
                                        // name="ifsc"
                                        className="border w-full border-gray-700 p-5 "
                                        placeholder="YESBOB110" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="AccountNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Account No</FormLabel>
                                <FormControl>
                                    <Input
                                        // name="acc"
                                        className="border w-full border-gray-700 p-5 "
                                        placeholder="********45441" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="conformAccountNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Conform Account No</FormLabel>
                                <FormControl>
                                    <Input

                                        className="border w-full border-gray-700 p-5 "
                                        placeholder="*******45441" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="bankName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bank Name</FormLabel>
                                <FormControl>
                                    <Input

                                        className="border w-full border-gray-700 p-5 "
                                        placeholder="ICICI Bank" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogClose className='w-full'>
                        <Button type="submit"
                            className="w-full py-5">
                            Submit
                        </Button>
                    </DialogClose>

                </form>
            </Form>
        </div>
    )
}

export default PaymentDetailsForm