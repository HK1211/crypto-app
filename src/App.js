import Navbar from "./components/Navbar";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import "antd/dist/antd.css";
import { Space, Typography } from "antd";
import store from "./app/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <div className="main-content">
            <Outlet />
          </div>
          <div className="footer" level={5} style={{ textAlign: "center" }}>
            <Typography.Title style={{color:'white'}}>             
              All rights reserverd
            </Typography.Title>
            <Space>
              <Link to="/">BitGram</Link>
            </Space>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
