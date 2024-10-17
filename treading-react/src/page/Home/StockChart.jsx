import { Button } from '@/components/ui/button'
import { fetchMarketChart } from '@/Store/Coin/Action'
import { store } from '@/Store/Store'
import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const StockChart = ({ coinId }) => {

    const dispatch = useDispatch()

    const { id } = useParams()

    const { coin } = useSelector(store => store)



    //  chart data from -> to 
    const searies = [
        {
            data: coin.marketChart.data,
        },
    ]

    //  chart option
    const option = {
        chart: {
            id: "area-datetime",
            type: "area",
            height: 350,
            zoom: {
                autoScaleYaxis: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: "datetime",
            tickAmount: 6,
        },
        colors: ["#758AA2"],
        markers: {
            colors: ["#fff"],
            strokeColor: "#fff",
            size: 0,
            strokeWidth: 1,
            style: "hollow",

        },
        tooltip: {
            theme: "dark",
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.9,
                stops: [0, 100]
            },
        },
        grid: {
            borderColor: "#47535E",
            strokeDashArray: 4,
            show: true,
        },
    }

    // chart header buttons
    const timeSeries = [
        {
            keyword: "DIGITAL_CURRENCY_DAILY",
            key: "Time Series (Daily)",
            label: "1 Day",
            value: 1,
        },
        {
            keyword: "DIGITAL_CURRENCY_WEEKLY",
            key: "Weekly Time Series",
            label: "1 Week",
            value: 7,
        },
        {
            keyword: "DIGITAL_CURRENCY_MONTHLY",
            key: "Monthly Time Series",
            label: "1 Months",
            value: 30,
        },
        {
            keyword: "DIGITAL_CURRENCY_YEARLY",
            key: "Yearly Time Series",
            label: "1 Year",
            value: 365,
        },
    ]

    const handelActiveLabel = (value) => {
        setActiveLabel(value);
    }
    const [activeLabel, setActiveLabel] = useState(timeSeries[0])
    useEffect(() => {
        dispatch(fetchMarketChart({ coinId, days: activeLabel.value, jwt: localStorage.getItem("jwt") }))
    }, [dispatch, coinId, activeLabel])

    return (
        <div>
            <div className='space-x-3'>
                {timeSeries.map((items) =>
                    <Button
                        onClick={() => handelActiveLabel(items)}
                        key={items.label}
                        variant={activeLabel.label == items.label ? "" : "outline"}>
                        {items.label}
                    </Button>
                )}
            </div>
            <div id='chart-timelines'>
                <ReactApexChart
                    options={option}
                    series={searies}
                    type='area'
                    height={350} />
            </div>
        </div>
    )
}

export default StockChart