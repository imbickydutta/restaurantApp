import RestaurantDetails from "./components/Restaurant/RestaurantDetails"

import './App.css';

function App() {

  return (
    <div className="App">

      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Yummly_logo.png" alt="logo" />

      <div className="content">
        {/* <Filters /> */}
        <RestaurantDetails />
      </div>



    </div>
  );
}

export default App;
