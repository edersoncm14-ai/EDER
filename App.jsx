
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
 
import DashboardPage from "./DashboardPage";
import LotesCafePage from "./LotesCafePage";
import AnaliseSoloPage from "./AnaliseSoloPage";
 
export default function App() {
return (
<BrowserRouter>
<div
 style={{
 background: "#1b5e20",
 padding: "15px",
 }}
 >
<Link
 to="/"
 style={{
 color: "#fff",
 marginRight: "20px",
 textDecoration: "none",
 }}
 >
Dashboard
</Link>
 
<Link
 to="/lotes"
 style={{
 color: "#fff",
 marginRight: "20px",
 textDecoration: "none",
 }}
 >
Lotes de Café
</Link>
 
<Link
 to="/solo"
 style={{
 color: "#fff",
 textDecoration: "none",
 }}
 >
Análise de Solo
</Link>
</div>
 
<Routes>
<Route path="/" element={<DashboardPage />} />
 <Route path="/lotes" element
