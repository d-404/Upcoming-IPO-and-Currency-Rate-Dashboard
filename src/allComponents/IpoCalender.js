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
        //Since price is null in api , setting a random price
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
      <h2 className="text-center mb-4" style={{ backgroundColor: '#1890ff', padding: '10px', color: 'white' }}>
        Upcoming IPO Calendar
      </h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Company</th>
              <th>Date</th>
              <th>Price</th>
              <th>Symbol</th>
            </tr>
          </thead>
          <tbody>
            {ipoData.map((ipo, index) => (
              <tr key={ipo.id}>
                <td>{index + 1}</td>
                <td>{ipo.companyName}</td>
                <td>{ipo.offeringDate}</td>
                <td>{ipo.price}</td>
                <td>{ipo.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IPOCalendar;
