import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getCoinList } from '@/Store/Coin/Action'

import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AssetTable = ({ coin, category }) => {

    const dispatch = useDispatch()



    const navigate = useNavigate()
    return (
        <>
            <Table>
                <ScrollArea className={`${category == "all" ? "h-[77.5vh]" : "h-[82vh]"}`}>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Coin</TableHead>
                            <TableHead>Symbol</TableHead>
                            <TableHead>Volume</TableHead>
                            <TableHead >Market Cap</TableHead>
                            <TableHead >24 hr</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {coin.map((items, index) =>
                            <TableRow key={index}>
                                <TableCell
                                    onClick={() => navigate(`/market/${items.id}`)}
                                    className="font-medium flex items-center gap-2">
                                    <Avatar className-z-50>
                                        <AvatarImage src={items.image} />
                                    </Avatar>
                                    <span>{items.name}</span>
                                </TableCell>
                                <TableCell>{items.symbol}</TableCell>
                                <TableCell>{items.total_volume}</TableCell>
                                <TableCell>{items.market_cap}</TableCell>
                                <TableCell>{items.price_change_percentage_24h}</TableCell>
                                <TableCell className="text-right">${items.current_price}</TableCell>
                            </TableRow>
                        )}

                    </TableBody>
                </ScrollArea>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}

            </Table>
        </>
    )
}

export default AssetTable