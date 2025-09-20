import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import LoginPage from './loginform/loginpage';
import RegistrationPage from "./registerform/registrationpage";
import HeaderPage from "./header/headerpage";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";   
import FooterPage from "./footer/footerpage";
import Headerpage1 from "./header1/headerpage1";
import HomePage from "./home/homepage";
import TvshowsPage from "./tvshows/tvshowspage";
import MoviesPage from "./movies/moviespage";
import NewPopularpage from "./new&popular/new&popularpage";
import PrivateRoute from "./privateroute/privateroute";
import MyList from "./MyList/myList";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/footer" element={<FooterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/header1" element={<Headerpage1/>}/>
        <Route path="/mylist" element={<MyList/>}/>
        <Route path="/home" element={
        <PrivateRoute>
          <HomePage/>
        </PrivateRoute>}/>
        <Route path="/tvshows" element={<PrivateRoute><TvshowsPage/></PrivateRoute>}/>
        <Route path="/movies" element={<PrivateRoute><MoviesPage/></PrivateRoute>}/>
        <Route path="/new&popular" element={<PrivateRoute><NewPopularpage/></PrivateRoute>}/>
        
      </Routes>
    </BrowserRouter>
    </div>

   
  );
}

export default App;
