import logo from './logo.svg';
import './App.css';
import MealDb from './components/MealDB-data-load/MealDb';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MealDb></MealDb>
    </div>
  );
}

export default App;
