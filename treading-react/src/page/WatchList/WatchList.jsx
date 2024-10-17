import React, { useEffect } from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { BookMarkedIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getUserWatchList } from '@/Store/WachList/Action'
import { store } from '@/Store/Store'

const WatchList = () => {

    const dispatch = useDispatch()
    const { watchList } = useSelector(store => store)
    const handleRemoveToWatchList = (value) => {
        console.log(value);
    }
    useEffect(() => {
        dispatch(getUserWatchList(localStorage.getItem("jwt")))
    }, [])

    return (
        <div className='p-5 lg:px-20'>


            <h1 className='font-bold text-3xl pb-5'>WatchList</h1>

            <Table className="border">
                <TableHeader>
                    <TableRow>
                        <TableHead className="py-5">Coin</TableHead>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Volume</TableHead>
                        <TableHead >Market Cap</TableHead>
                        <TableHead >24 hr</TableHead>
                        <TableHead className="">Price</TableHead>
                        <TableHead className="text-right text-red-600">Remove</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {watchList.items.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell className="font-medium flex items-center gap-2">
                                <Avatar className-z-50>
                                    <AvatarImage src={item.image} />
                                </Avatar>
                                <span>{item.name}</span>
                            </TableCell>
                            <TableCell>{item.symbol}</TableCell>
                            <TableCell>45561232323123</TableCell>
                            <TableCell>45561232323123</TableCell>
                            <TableCell>-0.5254</TableCell>
                            <TableCell className="">$250.00</TableCell>
                            <TableCell className="text-right">
                                <Button size="icon"
                                    variant="ghost"
                                    onClick={() => handleRemoveToWatchList(items.id)}
                                    className="h-10 w-10">
                                    <BookmarkFilledIcon className='w-6 h-6' />
                                </Button>
                            </TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>
        </div>
    )
}

export default WatchList