import { Link, Outlet } from "react-router-dom";
import { Space, Typography } from "antd";
import { Provider } from "react-redux";
/**
 * 작성자: 이한규, 작성일: 2022-04-03 일요일
 * 
 * 제목: 버그리포트
 * 
 * Failed to parse source map: 'webpack://antd/./components/config-provider/style/index.less' URL is not supported
 * Failed to parse source map: 'webpack://antd/./components/icon/style/index.less' URL is not supported
 * Failed to parse source map: 'webpack://antd/./components/locale-provider/style/index.less' URL is not supported
 * Failed to parse source map: 'webpack://antd/./components/time-picker/style/index.less' URL is not supported
 * 
 * 원인: webpack 5를 사용하는 react-scripts 5.0.0 버전에서 발생
 * 해결:
 * As-is: import 'antd/dist/antd.css
 * To-be: import 'antd/dist/antd.min.css
 */
// import "antd/dist/antd.css";
import 'antd/dist/antd.min.css';
import store from "./app/store";
import Navbar from "./components/Navbar";
import "./App.css";

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
