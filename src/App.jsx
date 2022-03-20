//import logo from './logo.svg';
import './App.css';
import Sidebar from './components/nav/Sidebar';
import Topbar from './components/nav/Topbar';
import Dashboard from './components/dashboard/dashboard';
import Register from './components/students/Register';
import Footer from './components/footer/Footer';
import Logout from './components/logout/Logut';

function App() {
  const path = window.location.pathname;
  const login = localStorage.getItem("login");
  if (login === 'false') {
    console.log(login);
    window.location.href = '/paue/login';
  }
  return (
    <div className="App" id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar/>
          {path == '/paue/dashboard' || path == '/' ? <Dashboard/> : ''}
          {path == '/paue/student/register' ? <Register/> : ''}
        </div>
        <Footer/>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <Logout/>
    </div>
  );
}

export default App;
