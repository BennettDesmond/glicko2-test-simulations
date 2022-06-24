import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function PeriodTestGraph(props) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Period vs. Constant Update Rankings',
            },
        },
    };

    function labelGenerator() {
        var labelArray = [];
        for (let i = 1; i <= props.ratingPeriods; i++) {
            labelArray.push(i.toString());
        }
        return labelArray;
    };

    function realVals() {
        var labelArray = [];
        for (let i = 1; i <= props.ratingPeriods; i++) {
            labelArray.push("0");
        }
        return labelArray;
    };

    const labels = labelGenerator();

    // const labels = [1,2,3,4,5];

    const data = {
        labels,
        datasets: [
            {
                label: 'Real Rating',
                data: realVals(),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Continuous Update',
                data: props.constantDeviationArray,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Period Update',
                data: props.periodDeviationArray,
                borderColor: 'rgb(150, 120, 150)',
                backgroundColor: 'rgba(150, 120, 150, 0.5)',
            },
        ],
    };

    return <Line options={options} data={data} />
}
