import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import AssetTable from './AssetTable'
import StockChart from './StockChart'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { DotIcon, MessageCircle } from 'lucide-react'
import { Cross1Icon } from '@radix-ui/react-icons'
import { Input } from '@/components/ui/input'
import { useDispatch, useSelector } from 'react-redux'
import { getCoinList, getTop50CoinList } from '@/Store/Coin/Action'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const Home = () => {

    const [category, setCategory] = useState("all")

    const [inputValue, setInputValue] = useState("")

    const [isBotRealease, setIsBotRealease] = useState(false)

    const { coin } = useSelector(store => store)
    const dispatch = useDispatch()

    const handelCategory = (value) => {
        setCategory(value);
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key == "Enter") {
            console.log(inputValue);
        }
        setInputValue("")
    }

    const handleBotRealease = () => {
        setIsBotRealease(!isBotRealease)
    }


    useEffect(() => {

        dispatch(getCoinList(1))

    }, [])

    useEffect(() => {

        dispatch(getTop50CoinList())
    }, [category])

    return (
        <div className='relative'>


            {/* Stocks Details Section */}
            <div className='lg:flex'>

                {/* Stocks Details Section */}
                <div className='lg:w-[50%] lg:border-r'>

                    {/*All Header Butoons */}
                    <div className='p-3 flex items-center gap-4'>

                        <Button
                            onClick={() => handelCategory("all")}
                            className="rounded-full"
                            variant={category == "all" ? "default" : "outline"}>
                            All
                        </Button>
                        <Button
                            onClick={() => handelCategory("top50")}
                            className="rounded-full"
                            variant={category == "top50" ? "default" : "outline"}>
                            Top 50
                        </Button>
                        <Button
                            onClick={() => handelCategory("topGainer")}
                            className="rounded-full"
                            variant={category == "topGainer" ? "default" : "outline"}>
                            Top Gainer
                        </Button>
                        <Button
                            onClick={() => handelCategory("topLooser")}
                            className="rounded-full"
                            variant={category == "topLooser" ? "default" : "outline"}>
                            Top Looser
                        </Button>
                    </div>

                    {/* table */}
                    <AssetTable coin={category === "all" ? coin.coinList : coin.top50} category={category} />

                    <div>

                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>

                    </div>

                </div>

                {/* Stock Chart  Section */}
                <div className='hidden lg:block lg:w-[50%] p-5'>
                    <StockChart coinId={"bitcoin"} />

                    {/* Below Section of chart  */}
                    <div className='flex gap-5 items-center'>
                        <div>
                            <Avatar>
                                <AvatarImage src="src\assets\react.svg" />
                            </Avatar>
                        </div>

                        {/* Stock details below chart Details */}
                        <div>
                            <div className='flex items-center gap-2'>
                                <p>ETH</p>
                                <DotIcon className='text-gray-400' />
                                <p className='text-gray-400'>Ethewrum</p>
                            </div>
                            <div className='flex items-end gap-2'>
                                <p className='text-xl font-bold'>44554</p>
                                <p className='text-red-600'>
                                    <span>356</span>
                                    <span>(-52%)</span>
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>


            {/* bot section */}
            <section className='absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2'>

                {/* bot button */}
                {isBotRealease &&
                    <div className='rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900'>
                        <div className='flex justify-between items-center border-b px-6 h-[12%]'>
                            <p>chat Bot</p>
                            <Button
                                onClick={handleBotRealease}
                                variant="ghost" size="icon">

                                <Cross1Icon />
                            </Button>
                        </div>

                        <div className='h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2
                     scroll-container'>

                            {/* Chat Section main Heading or greating message */}
                            <div className='slef-start pb-5 w-auto'>
                                <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                    <p>Lorem ipsum dolor sit,</p>
                                    <p> amet consectetur adipisicing elit. Ab, dicta.</p>
                                </div>
                            </div>

                            {/*  chat messages  */}

                            {[1, 1, 1, 1, 1, 1].map((item, i) =>
                                <div key={i}
                                    className={`${i % 2 == 0 ? "self-start" : "self-end"} "pb-5 w-auto"`}>
                                    {i % 2 == 0 ? <div className="justify-end self-end px-5 py-2 
                                rounded-md bg-slate-800 w-auto">
                                        <p>prompt</p>
                                    </div> : <div className="justify-end self-end px-5 py-2 
                                rounded-mdbg-slate-800 w-auto">
                                        <p>answer</p>

                                    </div>}

                                </div>
                            )}

                        </div>

                        {/* Text feild for entering Prompt */}
                        <div className='h-[12%] border-t'>
                            <Input className="w-full h-full  order-none outline-none"
                                placeholder="write prompt"
                                onChange={handleChange}
                                value={inputValue}
                                onkeyPress={handleKeyPress}
                            />
                        </div>
                    </div>
                }

                {/* bot  main icon */}

                <div className='relative w-[10rem] cursor-pointer group'>
                    <Button
                        onClick={handleBotRealease}
                        className="w-full h-[3rem] gap-2 items-center ">
                        <MessageCircle
                            size={30}
                            className='fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]' />
                        <span className='text-2xl'>Chat Bot</span>
                    </Button>

                </div>
            </section>

        </div>

    )
}

export default Home