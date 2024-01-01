
import './App.css';

import Skill from './components/skill';
import Project from './components/project';
import About from './components/right-side';
import Leftside from './components/left-side';

import Rightfooter from './components/right-footer';




function App() {
  return (
   <div className="app">

  <Leftside />


 
    <div className='main'>
<About/>
      <Skill/>
      <Project/>
      
      <Rightfooter/>
      </div>
    
   
   </div>
  );
}

export default App;
