import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { VerifiedIcon } from 'lucide-react'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import AccountVerificationForm from './AccountVerificationForm'
import { useSelector } from 'react-redux'

const Profile = () => {

    const { auth } = useSelector(store => store)

    const handleEnabledTwoStepVerification = () => {
        console.log("Two Step Verification ");
    }
    return (
        <div className='flex flex-col items-center mb-5'>

            <div className='pt-10 w-full lg:w-[60%]'>

                {/* Profile Info  */}
                <Card>
                    <CardHeader className="pb-9">
                        <CardTitle>Your Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='lg:flex gap-32'>

                            {/* user info */}
                            <div className='space-y-7'>
                                <div className='flex'>
                                    <p className='w-[9ren]'> Email : </p>
                                    <p className='text-gray-500'>{auth.user?.email}</p>
                                </div>

                                <div className='flex'>
                                    <p className='w-[9ren]'> Full Name : </p>
                                    <p className='text-gray-500'>{auth.user?.fullName}</p>
                                </div>

                                <div className='flex'>
                                    <p className='w-[9ren]'> Date Of Birth : </p>
                                    <p className='text-gray-500'>01/02/2000</p>
                                </div>
                                <div className='flex'>
                                    <p className='w-[9ren]'> Nationality : </p>
                                    <p className='text-gray-500'>Indian</p>
                                </div>

                            </div>

                            {/* address details */}
                            <div className='space-y-7'>
                                <div className='flex'>
                                    <p className='w-[9ren]'> Email : </p>
                                    <p className='text-gray-500'>Sudhanshu@gmail.com</p>
                                </div>

                                <div className='flex'>
                                    <p className='w-[9ren]'> Full Name : </p>
                                    <p className='text-gray-500'>Sudhanshu Shekhar</p>
                                </div>

                                <div className='flex'>
                                    <p className='w-[9ren]'> Date Of Birth : </p>
                                    <p className='text-gray-500'>01/02/2000</p>
                                </div>
                                <div className='flex'>
                                    <p className='w-[9ren]'> Nationality : </p>
                                    <p className='text-gray-500'>Indian</p>
                                </div>

                            </div>

                        </div>

                    </CardContent>
                </Card>

                <div className='mt-6'>
                    <Card className="w-full">
                        <CardHeader className="pb-7">
                            <div className='flex items-center gap-3'>
                                <CardTitle>
                                    2 State Verification
                                </CardTitle>

                                {true ? <Badge className="space-x-2 text-white bg-green-600">
                                    <VerifiedIcon />
                                    <span className=''>Enabled</span>
                                </Badge> : <Badge className="bg-orange-500">
                                    Disabled
                                </Badge>
                                }

                            </div>

                        </CardHeader>

                        <CardContent>
                            <div className=''>
                                <Dialog>
                                    <DialogTrigger>
                                        <Button>Enabled Two step Verification</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Verify Your Account</DialogTitle>
                                            <AccountVerificationForm handleSubmit={handleEnabledTwoStepVerification} />
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>

                            </div>
                        </CardContent>
                    </Card>


                </div>
            </div>
        </div>
    )
}

export default Profile