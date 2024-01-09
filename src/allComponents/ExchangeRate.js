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
      <h2 className="text-center mb-4" style={{ backgroundColor: '#9498db', padding: '15px', color: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        Latest Currency Exchange Rates
      </h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover shadow">
          <thead className="thead-light">
            <tr>
              <th className="text-center">Serial</th>
              <th className="text-center">Currency Pair</th>
              <th className="text-center">Rate</th>
            </tr>
          </thead>
          <tbody>
            {exchangeData.map(({ symbol, rate }, index) => (
              <tr key={symbol}>
                <td className="text-center">{index + 1}</td>
                <td>{symbol}</td>
                <td className="text-center">{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeRate;
