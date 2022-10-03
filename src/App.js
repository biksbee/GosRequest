import React from "react";

import NavBar from "./components/NavBar";
import ChartPage from "./components/ChartsPage";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <ChartPage />
            <Footer />  
        </div>
    );
}

export default App;
