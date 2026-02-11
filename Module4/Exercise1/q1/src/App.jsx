import {Routes,Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import { FunctionBasedComponent } from './components/FunctionBasedComponet';
import { ClassBasedComponent } from './components/ClassBasedComponent';
import Setup from './components/Setup';
import Home from './components/Home';
import BugAndFix from './components/BugAndFix';

function App() {
  return (
    <>
      <Home/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/q1' element={<HelloWorld/>}/>
        <Route path='/q2' element={<Setup/>}/>
        <Route path='/q3/function' element={<FunctionBasedComponent/>}/>
        <Route path='/q3/class' element={<ClassBasedComponent/>}/>
        <Route path='/q4' element={<BugAndFix/>}/>
      </Routes>
    </>
  );
}

export default App;
