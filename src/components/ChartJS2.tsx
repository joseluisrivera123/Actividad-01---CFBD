import React, { useEffect, useState} from 'react';
import { records } from "../service/pocketbase-service";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip, Legend,} 
from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};



export default function App() {
 
  interface Item {
    emergency_time: string; 
  }
  const [cantidad, setCantidad]=useState<never[]>([]);
  const [posts, setPosts] = useState<Array<any>>([]);
  
  const urlApi = async () => {
        setPosts(records);    
      }
  const labels = Object.keys(cantidad);
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Cantidad de emergencia',
        data: Object.values(cantidad),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
    useEffect(()=>{
        urlApi();
    },[]);

    useEffect(() => {
      const contador = posts.reduce((acc: { [key: string]: number }, item: Item) => {
        const date = item.emergency_time.slice(0, 10);
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});
      setCantidad(contador);
    }, [posts]);
  return <Bar options={options} data={data} />;
}

