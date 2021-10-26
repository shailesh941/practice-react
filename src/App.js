import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPhotos from './component/searchPhotos';
import Header from './component/Header'

function App() {
  return (
    <div className="App main-container">
      <Header />
      <SearchPhotos />
    </div>
  );
}

export default App;
 