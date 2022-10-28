import Header from "./components/Header";
import Pages from "./components/Pages";
import Footer from "./components/Footer";
import './App.css';

const name = "Alex";


function App() {
  return (
    <div className="App">
      <Header />
      <Pages name={name}/>
      <Footer />
    </div>
  );
}

export default App;
