import Routes from './pages/Routes';
import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import AuthContextProvider from './Context/AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes/>
    </AuthContextProvider>
    <ToastContainer/>
   
    </>
  );
}

export default App;
