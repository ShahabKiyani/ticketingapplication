import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage.js";
import CreateTicketPage from "./pages/CreateTicket/CreateTicketPage.js";
import TicketListPage from "./pages/TicketList/TicketListPage.js";
import EditTicketPage from "./pages/EditTicket/EditTicketPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-ticket" element={<CreateTicketPage />} />
        <Route path="/ticketpage" element={<TicketListPage />} />
        <Route path="/edit-ticket/:id" element={<EditTicketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
