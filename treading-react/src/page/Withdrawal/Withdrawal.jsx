import React, { useEffect } from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useDispatch, useSelector } from 'react-redux'
import { getWithdrawalHistory } from '@/Store/WithDrawal/Action'

const Withdrawal = () => {

    const dispatch = useDispatch()
    const { wallet, withdrawal } = useSelector(store => store)

    useEffect(() => {
        dispatch(getWithdrawalHistory(localStorage.getItem("jwt")))
    }, [])
    return (
        <div className='p-5 lg:px-20'>


            <h1 className='font-bold text-3xl pb-5'>WthDrawal History</h1>

            <Table className="border">
                <TableHeader>
                    <TableRow>
                        <TableHead className="py-5">Date </TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Amount</TableHead>

                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {withdrawal.history.map((items, index) =>
                        <TableRow key={index}>

                            <TableCell>
                                <p>{items.dateTime.toString()}</p>
                            </TableCell>

                            <TableCell className="">BANK</TableCell>

                            <TableCell>{items.amount}</TableCell>
                            <TableCell className="text-right">
                                {items.withdrawalStatus}
                            </TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>
        </div>
    )
}

export default Withdrawal