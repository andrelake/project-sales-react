import Chart from 'react-apexcharts'
import axios from "axios";
import {BASE_URL} from "../../utils/requests";
import {SaleSum} from "../../types/sale";

type ChartData = {
    labels: string[],
    series: number[]
}

function DonutChart() {
    //forma paia
    let chartData: ChartData = { labels: [], series: [] }
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(res => {
            const data = res.data as SaleSum[]
            const labelList = data.map(x => x.sellerName)
            const sumList = data.map(x => x.sum)

            chartData = {
                labels: labelList,
                series: sumList
            }

            console.log(chartData)
        })

    const options = {
        legend: {
            show: true
        }
    };

    // const data = {
    //     labels: ['John Doe', 'Michael Jordan'],
    //     series: [30.3, 25.2]
    // };

    return (
        <div className="app">
            <div className="mixed-chart">
                <Chart
                    options={{...options, labels: chartData.labels}}
                    series={chartData.series}
                    type="donut"
                    width="500"
                />
            </div>
        </div>
    );
}

export default DonutChart;
