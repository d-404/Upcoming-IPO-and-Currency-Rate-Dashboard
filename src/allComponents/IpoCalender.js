import React, { useEffect, useState } from 'react';
import axios from 'axios';

const token = 'pk_e4777f0ef11e4349b3a3d6efc898cc61';
const apiUrl = `https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=${token}`;

const IPOCalendar = () => {
  const [ipoData, setIPOData] = useState([]);

  useEffect(() => {
    const fetchIPOData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const modifiedData = response.data.map((ipo) => ({
          ...ipo,
          price: Math.floor(Math.random() * 1000) + 1000,
        }));
        setIPOData(modifiedData);
      } catch (error) {
        console.error('Error fetching IPO data:', error);
      }
    };

    fetchIPOData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow rounded">
        <h2 className="text-center mb-4" style={{ backgroundColor: '#8496db', padding: '15px', color: 'white', borderRadius: '5px' }}>
          Upcoming IPO Calendar
        </h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead style={{ backgroundColor: '#f0f0f0' }}>
              <tr>
                <th>Serial</th>
                <th>Symbol</th>
                <th>Company</th>
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {ipoData.map((ipo, index) => (
                <tr key={ipo.id}>
                  <td>{index + 1}</td>
                  <td>{ipo.symbol}</td>
                  <td>{ipo.companyName}</td>
                  <td>{ipo.offeringDate}</td>
                  <td>${ipo.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IPOCalendar;
