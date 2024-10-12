import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AnalyticsChart = ({ data, title }) => {
  const [timePeriod, setTimePeriod] = useState("year");
  const [chartType, setChartType] = useState("bar"); // New state for chart type

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value); // New handler for chart type
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="flex py-2">
        <select onChange={handleTimePeriodChange} value={timePeriod}>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="sixMonths">Last 6 Months</option>
          <option value="year">Last Year</option>
        </select>
        <select onChange={handleChartTypeChange} value={chartType}>
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {chartType === "bar" ? (
          <BarChart data={data[timePeriod]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        ) : (
          <LineChart data={data[timePeriod]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;

export const AnalyticsLineChart = ({ data, title }) => {
  const [timePeriod, setTimePeriod] = useState("year");
  const [chartType, setChartType] = useState("line"); // New state for chart type

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value); // New handler for chart type
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="flex py-2">
        <select onChange={handleTimePeriodChange} value={timePeriod}>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="sixMonths">Last 6 Months</option>
          <option value="year">Last Year</option>
        </select>
        <select onChange={handleChartTypeChange} value={chartType}>
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {chartType === "bar" ? (
          <BarChart data={data[timePeriod]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        ) : (
          <LineChart data={data[timePeriod]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};
