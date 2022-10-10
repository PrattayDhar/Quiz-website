import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
class PieRechartComponent extends React.Component {
  
    COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
    pieData = [
        {
            name: "React",
            value: 8
        },
        {
            name: "JavaScript",
            value: 9
        },
        {
            name: "CSS",
            value: 8
        },
        {
            name: "Git",
            value: 11
        }
       
    ];
   
    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#ffff",
                        padding: "5px",
                        border: "1px solid #cccc"
                    }}
                >
                    <label>{`${payload[0].name} : ${payload[0].value}`}</label>
                    <h5>Number Of quiz</h5>
                </div>
            );
        }
        return null;
    };
    
    render() {
        return (
            <PieChart width={1500} height={500}>
                <Pie
                    data={this.pieData}
                    color="#000000"
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                >
                    {this.pieData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={this.COLORS[index % this.COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart>
        );
    }
}
export default PieRechartComponent;