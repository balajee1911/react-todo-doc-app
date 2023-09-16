// import logo from './logo.svg';
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ListTickets from "./pages/listTickets";
import AddRecord from "./components/dailog/addRecord";
import HomePage from "./pages/homePage";
// import { useState } from 'react';
// import DeleteDialog from './components/dailog/deleteDialog';

function App() {
  // const [open, setOpen] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path="/view-records" element={<ListTickets />} />
        <Route path="/add-record" element={<AddRecord />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
