import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="">
      <div className='img1'>
        <div className='text-about'>
          {/* Add any text or content here if needed */}
        </div>
      </div>

      <div className='Discount'>Discount is available at this rate</div>

      <div className="table-container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">1</th>
              <td>Shirdi</td>
              <td>Nashik</td>
              <td>2,200</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">2</th>
              <td>Shirdi</td>
              <td>Aurangabad</td>
              <td>3,800</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">3</th>
              <td>Shirdi</td>
              <td>Pune</td>
              <td>4,500</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">4</th>
              <td>Shirdi</td>
              <td>Kolhapur</td>
              <td>5,200</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">5</th>
              <td>Shirdi</td>
              <td>Solapur</td>
              <td>2,400</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">6</th>
              <td>Shirdi</td>
              <td>Satara</td>
              <td>3,600</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">7</th>
              <td>Shirdi</td>
              <td>Lonavala</td>
              <td>4,600</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">8</th>
              <td>Shirdi</td>
              <td>Mahabaleshwar</td>
              <td>5,300</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">9</th>
              <td>Shirdi</td>
              <td>Jalgaon</td>
              <td>2,100</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">10</th>
              <td>Shirdi</td>
              <td>Dhule</td>
              <td>3,300</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">11</th>
              <td>Shirdi</td>
              <td>Ratnagiri</td>
              <td>4,600</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">12</th>
              <td>Shirdi</td>
              <td>Sangli</td>
              <td>5,500</td>
            </tr>
            {/* Additional rows */}
          </tbody>
          {/* Additional tables */}
        </table>
      </div>
    </div>
  );
}

export default Services;
