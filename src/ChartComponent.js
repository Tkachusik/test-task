import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartComponent = ({ temperatureData }) => {
    return (
        <div>
            {temperatureData.length === 0 ? "" :
                <LineChart
                    layout="vertical"
                    width={1000}
                    height={2000}
                    data={temperatureData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 40,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="temp" stroke="#8884d8" />
                </LineChart>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        temperatureData: state.temperatureData,
    }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChartComponent);