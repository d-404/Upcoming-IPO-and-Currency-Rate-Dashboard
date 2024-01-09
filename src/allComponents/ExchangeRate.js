import React, { useEffect, useState } from 'react';
import axios from 'axios';

const token = 'pk_e4777f0ef11e4349b3a3d6efc898cc61';
const apiUrl = `https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${token}`;

const ExchangeRate = () => {
  const [exchangeData, setExchangeData] = useState([]);

  useEffect(() => {
    const fetchExchangeData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setExchangeData(response.data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" style={{ backgroundColor: '#1890ff', padding: '10px', color: 'white' }}>
        Latest Currency Exchange Rates
      </h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Currency Pair</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {exchangeData.map(({ symbol, rate, timestamp, isDerived }, index) => (
              <tr key={symbol}>
                <td>{index + 1}</td>
                <td>{symbol}</td>
                <td>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeRate;
