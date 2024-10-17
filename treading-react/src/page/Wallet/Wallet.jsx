import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ReloadIcon, UpdateIcon } from '@radix-ui/react-icons'
import { CopyIcon, DollarSign, DownloadIcon, ShuffleIcon, UploadIcon, WalletIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import TopupForm from './TopupForm'
import WithdrawalForm from './WithdrawalForm'
import TransferForm from './TransferForm'
import { Avatar } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { depositMoney, getUserWallet, getWalletTransaction } from '@/Store/Wallet/Action'

import { useLocation, useNavigate } from 'react-router-dom'



function useQuery() {
    return new URLSearchParams
        (useLocation().search)
}
const Wallet = () => {

    const dispatch = useDispatch()

    const { wallet } = useSelector(store => store)
    const query = useQuery()
    const orderId = query.get("order_id")
    const stripPaymentId = query.get("stripe_payment_id")
    const razorpayPaymentId = query.get("razorpay_payment_id ")
    const navigate = useNavigate()


    useEffect(() => {
        handleFetchUserWallet(),
            handleFetchWalletTransaction()
    }, [])

    useEffect(() => {
        if (orderId) {
            dispatch(depositMoney({
                jwt: localStorage.getItem("jwt"),
                orderId,
                paymentId: razorpayPaymentId || stripPaymentId
            }))
        }

    }, [orderId, stripPaymentId, razorpayPaymentId])

    const handleFetchUserWallet = () => {
        dispatch(getUserWallet(localStorage.getItem("jwt")))
    }

    const handleFetchWalletTransaction = () => {
        dispatch(getWalletTransaction({ jwt: localStorage.getItem("jwt") }))
    }
    return (
        <div className='flex flex-col items-center'>

            <div className='pt-10 w-full lg:w-[60%]'>

                {/* Upper Part or Heading Part */}
                <Card >

                    <CardHeader className="pb-9">
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-5'>
                                <WalletIcon size={30} />
                                <div>
                                    <CardTitle className="text-2xl">My Wallet</CardTitle>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-gray-200 text-sm'>
                                            # {wallet.userWallet?.id}
                                        </p>
                                        <CopyIcon
                                            size={12}
                                            className='cursor-pointer hover:text-slate-300'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ReloadIcon
                                    onClick={handleFetchUserWallet}
                                    className='w-6 h-6 cursor-pointer hover:text-gray-400' />
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent>

                        {/* Balance */}
                        <div className='flex items-center '>
                            <DollarSign />
                            <span className='text-2xl font-semibold'>{wallet.userWallet.balance}</span>
                        </div>

                        <div className='flex gap-7 mt-5'>

                            {/* Add Money */}
                            <Dialog>
                                <DialogTrigger>
                                    <div className='h-24 w-24 hover:text-gray-400 
                                    cursor-pointer flex flex-col items-center justify-center *:rounded-md shadow-slate-800 shadow-md'>
                                        <UploadIcon />
                                        <span className='text-sm mt-2'>Add money</span>
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className="text-center text-xl">
                                            Top up your Wallet
                                        </DialogTitle>
                                    </DialogHeader>
                                    <TopupForm />
                                </DialogContent>

                            </Dialog>

                            {/* Withdrawal */}
                            <Dialog>
                                <DialogTrigger>
                                    <div className='h-24 w-24 hover:text-gray-400 
                                    cursor-pointer flex flex-col items-center justify-center *:rounded-md shadow-slate-800 shadow-md'>
                                        <DownloadIcon />
                                        <span className='text-sm mt-2'>Withdrawal</span>
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className="text-center text-xl">
                                            Request Withdrawal
                                        </DialogTitle>
                                    </DialogHeader>
                                    <WithdrawalForm />
                                </DialogContent>

                            </Dialog>

                            {/* Transfer */}
                            <Dialog>
                                <DialogTrigger>
                                    <div className='h-24 w-24 hover:text-gray-400 
                                    cursor-pointer flex flex-col items-center justify-center *:rounded-md shadow-slate-800 shadow-md'>
                                        <ShuffleIcon />
                                        <span className='text-sm mt-2'>Transfer</span>
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className="text-center text-xl">
                                            Transfer To Other Wallet
                                        </DialogTitle>
                                    </DialogHeader>
                                    <TransferForm />
                                </DialogContent>

                            </Dialog>
                        </div>
                    </CardContent>
                </Card>

                {/* History Section */}
                <div className='py-5 pt-10 '>


                    {/* header */}
                    <div className='flex gap-2 items-center pb-5'>
                        <h1 className='text-2xl font-semibold'>History</h1>
                        <UpdateIcon className='h-7 w-7 p-0 cursor-pointer hover:text-gray-400' />
                    </div>

                    {/* History Details */}
                    <div className='space-y-5'>

                        {wallet.transactions.map((items, i) =>
                            <div key={i}>
                                <Card className="px-5 flex justify-between items-center p-2">
                                    <div className='flex items-center gap-5'>
                                        <Avatar onClick={handleFetchWalletTransaction}>
                                            <AvatarFallback>
                                                <ShuffleIcon />
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className='space-y-1'>
                                            <h1>{items.types || items.purpose}</h1>
                                            <p className='text-sm text-gray-500'>{items.date}</p>
                                        </div>
                                    </div>
                                    <div >
                                        <p className={`text-green-500`}>{items.amount} USD</p>
                                    </div>
                                </Card>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Wallet