
import React , { lazy } from "react";
import { Routes, Route,BrowserRouter} from 'react-router-dom';
import  {Home}  from './pages/Home';

const Roles = lazy (() => import ('./pages/Roles')); 
const Contact = lazy (() => import ('./components/Contact')); 
const Layout = lazy (() => import ('./components/Layout')); 
const JobView = lazy (() => import ('./pages/Roles/JobView'));
const InterviewsPage = lazy( ()=>import('./pages/entretiens/entretiens')) ;
const Candidates = lazy( ()=>import('./pages/candidates/candidates')) ;

function App() {
  return (
    <BrowserRouter ><Routes>
      <Route   element={<Layout />} >
        <Route path="/" index element={<Home />} />
        <Route path="/JobView/:id" index element ={<JobView/>} />
        <Route path="/roles" index element={<Roles/>} />
        <Route path="/contact" element={<Contact title={""} content={""} id={""} name={""} t={() => {}} />} />
        <Route path="/candidate" element={<Candidates />} />
        <Route path="/entretiens" element={<InterviewsPage />} />
        <Route path="/*" index element={<Home />} />
        <Route></Route>
     </Route >
    </Routes></BrowserRouter>
    
  );
}

export default App; 
