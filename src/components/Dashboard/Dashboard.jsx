import React, {useState, useEffect} from "react";
import TransactionTable from "../TransactionTable/TransactionTable";
import Statics from "../Statics/Statics";
import Barchart from "../Barchart/Barchart";
import Piechart from "../Piechart/Piechart";
import "./Dashboard.css";
import axios from "axios";

export default function Dashboard() {
    const [month, setMonth] = useState('03'); // Default to March
    const [search, setSearch] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [statistics, setStatistics] = useState({});
    const [barChart, setBarChart] = useState({});
    const [pieChart, setPieChart] = useState({});

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/product/combine', {
                params: { month }
            });
            setTransactions(response.data.transactions.products);
            setStatistics(response.data.statistics);
            // console.log(statistics);
            setBarChart(response.data.barChart);
            // console.log(barChart);
            setPieChart(response.data.pieChart);
            // console.log(pieChart);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchData();
    }, [month]);

    return (
        <div className="wrapper">
            <h2 className="heading-dashboard">Transaction Dashboard</h2>
            <div className="controls">
                <select value={month} onChange={(e) => setMonth(e.target.value)} className="select-month">
                    {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map(m => (
                        <option key={m} value={m}>
                            {new Date(0, m - 1).toLocaleString('default', { month: 'long' })}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Search Transactions"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <TransactionTable
                transactions={transactions}
                search={search}
                month={month}
            />
            <Statics
                statistics= {statistics}
                month = {month}
            />
            <div className="chart">
                <Barchart data={barChart} month = {month} />
                <Piechart data={pieChart} month = {month} />
            </div>
        </div>
    );
}