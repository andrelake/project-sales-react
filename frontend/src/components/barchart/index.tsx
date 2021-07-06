import Chart from 'react-apexcharts'
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../../utils/requests";
import {SaleSuccess} from "../../types/sale";
import {round} from "../../utils/format";

type SeriesData = {
    name: string,
    data: number[]
}

type ChartData = {
    labels: {
        categories: string[],
    }
    series: SeriesData[]
}

function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories : []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-tax-by-seller`)
            .then(res => {
                const data = res.data as SaleSuccess[]
                const labelList = data.map(x => x.sellerName)
                const seriesList = data.map(x => round(100 * x.deals / x.visited, 1))

                setChartData ({
                    labels: {
                        categories: labelList
                    },
                    series: [
                        {
                            name: "Percent of Success",
                            data: seriesList
                        }
                    ]
                })
            })
    }, [])

    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%',
            }
        }
    };

    return (
        <div className="app">
            <div className="mixed-chart">
                <Chart
                    options={{ ...options, xaxis: chartData.labels}}
                    series={chartData.series}
                    type="bar"
                    width="500"
                />
            </div>
        </div>
    );
}

export default BarChart;
