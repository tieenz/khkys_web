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
    ArcElement,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {collection, query, where, onSnapshot, DocumentData} from "firebase/firestore";
import {faker} from '@faker-js/faker'
import {Firestore} from "@firebase/firestore";
import {useState} from "react";
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Biểu đồ lưu thông tuyến đường Đà Nẵng trong tháng',
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
    },
};


// export const line_data = {
//     labels,
//     datasets: [
//         {
//             label: 'Dataset 1',
//             data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             yAxisID: 'y',
//         },
//         {
//             label: 'Dataset 2',
//             data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//             yAxisID: 'y',
//         },
//     ],
// };

export const doughnut_data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};


interface DatabaseProps {
    db: Firestore
}

export default function App({db}: DatabaseProps) {
    const trafficDataList = ['vehicles', 'congestion', 'accidents']
    const vehiclesTypeList = ['car', 'motorcycle', 'truck']
    const [trafficData, setTrafficData] = useState<{ [key: string]: number[] }>({});
    const [vehiclesType, setVehiclesType] = useState<{ [key: string]: number }>({});
    const [labelTrafficData, setLabelTrafficData] = useState<any[]>([]);

    const traffic_data_query = query(collection(db, "cameras", "otlbDcquamUo3qlt5phq", "logs"));
    onSnapshot(traffic_data_query, (querySnapshot) => {
        const labels_traffic_data: string[] = [];
        const traffic_data: { [key: string]: number[] } = {'vehicles': [], 'congestion': [], 'accidents': []}
        const vehicles_type: { [key: string]: number } = {'car': 0, 'motorcycle': 0, 'truck': 0}
        let new_data: DocumentData = [];
        querySnapshot.forEach((doc) => {

            new_data = doc.data();
            const time = new Date(new_data['date'].seconds);
            labels_traffic_data.push(time.toTimeString());
            for (let data in trafficDataList) {
                traffic_data[trafficDataList[data]].push(new_data[trafficDataList[data]]);
            }
            for (let data in vehiclesTypeList) {
                vehicles_type[vehiclesTypeList[data]] += new_data[vehiclesTypeList[data]];
            }

        });
        // console.log(new_traffic_data);
        setLabelTrafficData(labels_traffic_data);
        setTrafficData(traffic_data);
        setVehiclesType(vehicles_type)
    });

    // console.log([vehiclesType['car'], vehiclesType['motorcycle'], vehiclesType['truck']]);


    let line_data = {
        labels: labelTrafficData,
        datasets: [
            {
                label: 'Phương tiện di chuyển',
                data: trafficData['vehicles'],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Ùn tắc giao thông',
                data: trafficData['congestion'],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Tai nạn',
                data: trafficData['accidents'],
                borderColor: 'rgb(13, 122, 235)',
                backgroundColor: 'rgba(93, 62, 125, 0.5)',
                yAxisID: 'y',
            },
        ],
    };

    let doughnut_data = {
        labels: vehiclesTypeList,
        datasets: [
            {
                label: '# of Votes',
                data: [vehiclesType['car'], vehiclesType['motorcycle'], vehiclesType['truck']],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <>
        <Line options={options} data={line_data}/>
        <Doughnut data={doughnut_data}/>
    </>
}
