import React from "react";
import "./Statics.css";

const months = {
    '01':'January',
    '03':"March",
    '02':'Fabruary',
    '04':"April",
    '05':'May',
    '06':"June",
    '07':'July',
    '08':"August",
    '09':'September',
    '10':"Octomber",
    '11':'November',
    '12':"December"
}

export default function Statics({ statistics, month }) {
    return (
        <div className="wrapper-stat">
            <h2 className="heading-stat">Statistics - {months[month]} <span>(Selected month name from dropdown)</span></h2>
            <div className="statistics-wrapper">
            <div className="stat-box">
                <h3>Total Sale Amount</h3>
                <p>{statistics.totalSaleAmount}</p>
            </div>
            <div className="stat-box">
                <h3>Total Sold Items</h3>
                <p>{statistics.totalSoldItems}</p>
            </div>
            <div className="stat-box">
                <h3>Total Not Sold Items</h3>
                <p>{statistics.totalNotSoldItems}</p>
            </div>
        </div>
        </div>
    )
};