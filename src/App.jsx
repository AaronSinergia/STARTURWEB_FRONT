import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import './styles/images.scss';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const UserProfile = lazy(() => import('./components/UserProfile/UserProfile'));
const UserProjects = lazy(() =>
  import('./components/UserProjects/UserProjects')
);
const StartProject = lazy(() => import('./pages/StartProject'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <img
            id="loading_logo"
            src="/assets/loading_logo.gif"
            alt="loading_logo"
          />
        }
      >
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
      </Suspense>
      <Footer />
      <ToastContainer draggable position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
