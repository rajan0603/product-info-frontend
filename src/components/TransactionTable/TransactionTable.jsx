import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransactionTable.css";

export default function TransactionTable({ transactions: initialTransactions, search, month }) {
    const [transactions, setTransactions] = useState(initialTransactions);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchTransactions = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/product/transaction', {
                params: { search, page, perPage: 10, month }
            });
            setTransactions(response.data.products);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, [search, page, month]);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="transaction-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Sold</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td title={transaction.title}>
                                {transaction.title.length > 20 ? transaction.title.substring(0, 20) + '...' : transaction.title}
                            </td>
                            <td title={transaction.description}>
                                {transaction.description.length > 25 ? transaction.description.substring(0, 20) + '...' : transaction.description}
                            </td>
                            <td>{transaction.price}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.sold ? 'Yes' : 'No'}</td>
                            <td><img src={transaction.image} alt="img" height="60rem" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-page">
                <div>
                    <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                    <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
                </div>
                <p className="page">
                    {page}
                </p>
            </div>
        </div>
    );
}
