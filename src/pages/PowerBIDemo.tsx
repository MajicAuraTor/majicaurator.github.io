import React from 'react';
import { Star } from 'lucide-react';

const PowerBIDemo = () => {
  return (
    <div className="min-h-screen py-20 flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">Power BI Dashboard Live Demo</h1>
      {/* Power BI Capstone Project Blurb */}
      <div className="mb-8 w-full max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 text-gray-800">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Power BI Capstone Project: Sales Performance Analysis</h2>
          <p className="mb-4">
            This project demonstrates my ability to create insightful data visualizations and actionable reports using Power BI, focusing on sales performance analysis for a retail business.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Project Overview:</strong> Analyze sales data to uncover trends, optimize inventory, and improve customer insights. Demonstrates data preparation, visualization, and storytelling techniques.</li>
            <li><strong>Key Features:</strong> Interactive dashboards for sales trends, customer segmentation, regional performance, and product profitability. DAX-based calculations for growth and profitability analysis.</li>
            <li><strong>Data Preparation:</strong> Cleaned and transformed raw data using Power Query, created calculated columns, and built user-friendly dashboards with bookmarks and tooltips.</li>
            <li><strong>Insights:</strong> Reveals seasonal sales peaks, product profit discrepancies, and opportunities for margin improvement.</li>
            <li><strong>Tools Used:</strong> Power BI, DAX, Power Query.</li>
          </ul>
          <p className="mb-2"><strong>Future Improvements:</strong> Add advanced visualizations, integrate more data sources, and apply machine learning for predictive analytics.</p>
          <p>Feel free to reach out if you have any questions or feedback about the project!</p>
        </div>
      </div>
      {/* Power BI Report */}
      <iframe
        title="J Price - Capstone Project"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=765df57c-db74-4902-b3c6-bdc03f2821fd&autoAuth=true&ctid=88227c99-d157-4dbe-8e33-d8b3fcc29577"
        frameBorder="0"
        allowFullScreen
        className="w-full rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default PowerBIDemo;
