import Chart from 'react-apexcharts'

function BarChart() {
    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%',
            }
        }
    };

    const data = {
        labels: {
            categories : ['John Doe', 'Michael Jordan']
        },
        series: [
            {
                name: "Percent of Success",
                data: [30.3, 25.2]
            }
        ]
    };

    return (
        <div className="app">
            <div className="mixed-chart">
                <Chart
                    options={{ ...options, xaxis: data.labels}}
                    series={data.series}
                    type="bar"
                    width="500"
                />
            </div>
        </div>
    );
}

export default BarChart;
