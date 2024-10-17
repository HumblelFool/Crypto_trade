import React from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { BookMarkedIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'

const Activity = () => {
    return (
        <div className='p-5 lg:px-20'>


            <h1 className='font-bold text-3xl pb-5'>Treading History</h1>

            <Table className="border">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="py-5">Date & Time</TableHead>
                        <TableHead>Treading Pair</TableHead>
                        <TableHead>Buy Price</TableHead>
                        <TableHead >Selling Price</TableHead>
                        <TableHead >Order Tag</TableHead>
                        <TableHead className="">Profit & Loss</TableHead>
                        <TableHead className="text-right">Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((items, index) =>
                        <TableRow key={index}>

                            <TableCell>
                                <p>12.14.2024</p>
                                <p className='text-gray-400'>451.12</p>
                            </TableCell>
                            <TableCell className="font-medium flex items-center gap-2">
                                <Avatar className-z-50>
                                    <AvatarImage src="src\assets\react.svg" />
                                </Avatar>
                                <span>Bitcoin</span>
                            </TableCell>

                            <TableCell className="">$250.00</TableCell>

                            <TableCell>45561232323123</TableCell>
                            <TableCell>-0.5254</TableCell>
                            <TableCell className="">$250.00</TableCell>
                            <TableCell className="text-right">
                                325
                            </TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>
        </div>
    )
}

export default Activity