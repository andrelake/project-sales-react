import Chart from 'react-apexcharts'
import axios from "axios";
import {BASE_URL} from "../../utils/requests";
import {SaleSum} from "../../types/sale";
import {useEffect, useState} from "react";

type ChartData = {
    labels: string[],
    series: number[]
}

function DonutChart() {

    const [chartData, setChartData] = useState<ChartData>(
        { labels: [], series: [] }
    );

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(res => {
                const data = res.data as SaleSum[]
                const labelList = data.map(x => x.sellerName)
                const sumList = data.map(x => x.sum)

                setChartData ({
                    labels: labelList,
                    series: sumList
                })
            })
    }, [chartData])

    const options = {
        legend: {
            show: true
        }
    };

    return (
        <div className="app">
            <div className="mixed-chart">
                <Chart
                    options={{...options, labels: chartData.labels}}
                    series={chartData.series}
                    type="polarArea"
                    width="500"
                />
            </div>
        </div>
    );
}

export default DonutChart;
