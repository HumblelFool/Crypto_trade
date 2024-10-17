import { Button } from '@/components/ui/button'
import { Dialog, DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { register } from '@/Store/Auth/Action'

import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const SignupForm = () => {

    const dispatch = useDispatch()

    const form = useForm({
        resolver: "",
        defaultValues: {
            fullName: "",
            email: "",
            password: "",

        }

    })

    const onSubmit = (data) => {
        dispatch(register(data))
        console.log(data);
    }

    return (



        <div className='px-10 py-10'>
            <h1 className='text-xl font-bold text-center '>Create Your Account</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
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
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        // name="ifsc"
                                        className="border w-full border-gray-700 p-5 "
                                        placeholder="abc@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        // name="acc"
                                        className="border w-full border-gray-700 p-5 "
                                        placeholder="******" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit"
                        className="w-full py-5">
                        Submit
                    </Button>



                </form>
            </Form>
        </div>

    )
}

export default SignupForm