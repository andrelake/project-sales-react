import Chart from 'react-apexcharts'

function DonutChart() {
    const options = {
        legend: {
            show: true
        }
    };

    const data = {
        labels: ['John Doe', 'Michael Jordan'],
        series: [30.3, 25.2]
    };

    return (
        <div className="app">
            <div className="mixed-chart">
                <Chart
                    options={{...options, labels: data.labels}}
                    series={data.series}
                    type="donut"
                    width="500"
                />
            </div>
        </div>
    );
}

export default DonutChart;
