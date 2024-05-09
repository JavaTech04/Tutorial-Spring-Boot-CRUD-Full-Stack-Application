import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./template/Navbar";
import {Home} from "./template/Home";
import {Create} from "./template/Create";
import {Edit} from "./template/Edit";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/add" element={<Create/>}/>
                    <Route path="/edit/:id" element={<Edit/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
