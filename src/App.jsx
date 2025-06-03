import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h2>MyApp</h2>
        <div>
          <button>Dashboard</button>
          <button>Sign Out</button>
        </div>
      </div>
      <div className="assistant-section">
        <div className="card">
          <img src="my-react-app/img/amazon.png" alt="Alexa" />
          <p>@alexa99</p>
          <p>Tôi sẽ giúp bạn mua sắm trên Amazon</p>
        </div>
        <div className="card">
          <img src="my-react-app/img/siri.jpg" alt="Cortana" />
          <p>@cortana12</p>
          <p>Trợ lý cá nhân bởi Microsoft</p>
        </div>
        <div className="card">
          <img src="my-react-app/img/cortana.png" alt="Siri" />
          <p>@siri44</p>
          <p>Tôi không được cập nhật nữa</p>
        </div>
      </div>
      <div className="dashboard">
        <div className="sidebar">
          <ul>
            <li>Orders</li>
            <li>Shipments</li>
            <li>Accounts</li>
            <li>Invoices</li>
          </ul>
        </div>
        <div className="main-content">
          <div className="charts">
            <div className="chart-box">
              <div style={{width: '100px', height: '100px', borderRadius: '50%', background: 'conic-gradient(#000 0% 33%, #fff 33% 66%, #ccc 66% 100%)', margin: '0 auto'}}></div>
              <p>$915</p>
            </div>
            <div className="chart-box">
              <div style={{width: '100px', height: '100px', background: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M10 90 L30 70 L50 80 L70 60 L90 90%22 stroke=%22%23000%22 stroke-width=%223%22 fill=%22none%22/%3E%3C/svg%22) no-repeat center', backgroundSize: 'contain'}}></div>
              <p>123%</p>
            </div>
          </div>
          <div className="summary">
            <table>
              <tr>
                <td>$145</td>
                <td><button>Approve</button></td>
                <td><button>Deny</button></td>
              </tr>
              <tr>
                <td>$213</td>
                <td><button>Approve</button></td>
                <td><button>Deny</button></td>
              </tr>
              <tr>
                <td>$814</td>
                <td><button>Approve</button></td>
                <td><button>Deny</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;