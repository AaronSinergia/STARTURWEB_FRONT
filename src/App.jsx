import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import StartProject from './pages/StartProject';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/footer/Footer';
import UserProfile from './components/UserProfile/UserProfile';
import UserProjects from './components/UserProjects/UserProjects';
import './App.scss';
import './styles/images.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userprojects" element={<UserProjects />} />
          <Route path="/start_project" element={<StartProject />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
