
import './App.css';
import Row from './componentes/Row';
import categories from './api';
import Banner from './componentes/Banner';
import Nav from './componentes/Nav';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner/>
     {categories.map((category) => {
     return <Row 
     key={category.name} 
     title={category.title}
     path={category.path}
     isLarge={category.isLarge}
     />;
    })}
     

    </div>
  );
}

export default App;
