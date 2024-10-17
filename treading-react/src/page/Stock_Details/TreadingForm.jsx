import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getAssetDetails } from '@/Store/Asset/Action'
import { payOrder } from '@/Store/Order/Action'
import { store } from '@/Store/Store'
import { getUserWallet } from '@/Store/Wallet/Action'
import { DotIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TreadingForm = () => {

    const [amount, setAmount] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [orderType, setOrderType] = useState("BUY")
    const { coin, wallet, asset } = useSelector(store => store)

    const dispatch = useDispatch()

    const calculateBuyCost = (amount, price) => {
        let volume = amount / price

        let decimalPlaces = Math.max(2, price.toString().split(".")[0].length)
        return volume.toFixed(decimalPlaces)
    }

    const handleChange = (e) => {
        const amount = e.target.value;
        setAmount(amount)
        const volume = calculateBuyCost(amount, coin.coinDetails.market_data.current_price.usd);
        setQuantity(volume)
    }

    useEffect(() => {
        dispatch(getUserWallet(localStorage.getItem("jwt")))
        dispatch(getAssetDetails({ coinId: coin.coinDetails.id, jwt: localStorage.getItem("jwt") }))
    }, [])

    const handleBuyCrypto = () => {
        dispatch(payOrder({
            jwt: localStorage.getItem("jwt"),
            amount: amount,
            orderData: {
                coinId: coin.coinDetails?.id,
                quantity,
                orderType
            }
        }))
    }
    return (
        <div className='space-y-10 p-5'>
            <div>
                <div className='flex  gap-4 items-center justify-between'>
                    <Input
                        className="py-7 focus:outline-none"
                        placeholder="Enter Amount..."
                        onChange={handleChange}
                        type="number"
                        name="amount"
                    />
                    <div>
                        <p className='border text-2xl flex justify-center items-center w-36 h-14 rounded-md'>{quantity}</p>
                    </div>
                </div>
                {true && <h1 className='text-red-600 text-center pt-4'>Insufffient Wallet Balance to buy</h1>}
            </div>


            <div className=''>
                <div className='flex gap-5 items-center'>
                    <div>
                        <Avatar>
                            <AvatarImage
                                src={
                                    "src/assets/react.svg"
                                }
                            />
                        </Avatar>
                    </div>
                    <div >
                        <div className='flex items-center gap-2'>
                            <p>BTC</p>
                            <DotIcon className='text-gray-400' />
                            <p>Bitcoin</p>
                        </div>
                        <div className='flex items-end gap-2'>
                            <p className='text-xl font-bold'>${coin.coinDetails?.market_data.current_price.usd}</p>
                            <p className='text-red-600'>
                                <span>-1234.1235</span>
                                <span>(-0.221545)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <p>Order  Type</p>
                <p>Market Order</p>
            </div>

            <div className='flex items-center justify-between'>
                <p>
                    {orderType === "BUY" ? "Available Cash" : "Available Quantity"}
                </p>
                <p>
                    {orderType === "BUY" ? wallet.userWallet?.balance : asset.assetDetails?.quantity || 0}
                </p>
            </div>

            <div>
                <Button
                    onClick={handleBuyCrypto}
                    className={`w-full py-6 
                    ${orderType == "SELL" ? "bg-red-600 text-white" : ""}`}>
                    {orderType}
                </Button>
                <Button
                    variant="link"
                    className="w-full mt-5 text-xl"
                    onClick={() => setOrderType(orderType == "BUY" ? "SELL" : "BUY")} >
                    {orderType == "BUY" ? "or Sell" : "or Buy"}
                </Button>
            </div>
        </div>
    )
}

export default TreadingForm