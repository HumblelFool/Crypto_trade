import React, { useEffect } from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAssets } from '@/Store/Asset/Action'
import { store } from '@/Store/Store'


const Portfolio = () => {

    const dispatch = useDispatch()
    const { asset } = useSelector(store => store)

    useEffect(() => {
        dispatch(getUserAssets(localStorage.getItem("jwt")))

    }, [])
    return (
        <div className='p-5 lg:px-20'>
            <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Asset</TableHead>
                        <TableHead>Symbol</TableHead>
                        <TableHead >Unit</TableHead>
                        <TableHead >Change</TableHead>
                        <TableHead >Change %</TableHead>
                        <TableHead className="text-right">Volume</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {asset.userAssets.map((items, index) =>
                        <TableRow key={index}>
                            <TableCell className="font-medium flex items-center gap-2">
                                <Avatar className-z-50>
                                    <AvatarImage src={items.coin.image} />
                                </Avatar>
                                <span>{items.coin.name}</span>
                            </TableCell>
                            <TableCell>{items.coin.symbol.toUpperCase()}</TableCell>
                            <TableCell>{items.quantity}</TableCell>
                            <TableCell>{items.coin.price_change_24h}</TableCell>
                            <TableCell>{items.coin.price_change_percentage_24h}</TableCell>
                            <TableCell className="text-right">{items.coin.total_volume}</TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table></div>
    )
}

export default Portfolio