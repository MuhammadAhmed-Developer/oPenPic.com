import Routes from './pages/Routes';
import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import AuthContextProvider from './Context/AuthContext';

function App() {
  return (
    <>
    <AuthContextProvider>

      <Routes/>
    </AuthContextProvider>
   
    </>
  );
}

export default App;
