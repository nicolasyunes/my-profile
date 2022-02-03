
import './App.css';
import Header from "./Header";
import Skills from "./Skills"
import Projects from './Projects';

function App() {
  return (
    <div className="container-lg bg-dark " style={{"height":"auto"}}>
      
        <Header />
        <section>
          <Projects/>
         </section>
        <Skills/>
      
    </div>
  );
}

export default App;
