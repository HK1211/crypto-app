import Navbar from "./components/Navbar";
import './App.css';
import { Link, Outlet } from "react-router-dom";
import 'antd/dist/antd.css'
import { Space, Typography } from "antd";
import store from "./app/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="app">
      
     <div className="navbar">
     <Navbar />
     </div>
     <div className="main">
     <Provider store={store}>
    <Outlet />
    </Provider>
    <div className="footer" level={5} style={{color:'white', textAlign:'center'}}>
    <Typography.Title>
    crypto <br/>
    All rights reserverd
    </Typography.Title>
    <Space>
      <Link to='/'>Home</Link>
    </Space>
     </div>
     </div>
     
    </div>
  );
}

export default App;
