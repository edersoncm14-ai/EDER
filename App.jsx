import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
2
 
3
import DashboardPage from "./DashboardPage";
4
import LotesCafePage from "./LotesCafePage";
5
import AnaliseSoloPage from "./AnaliseSoloPage";
6
 
7
export default function App() {
8
return (
9
<BrowserRouter>
10
<div
11
style={{
12
background: "#1b5e20",
13
padding: "15px",
14
}}
15
>
16
<Link
17
to="/"
18
style={{
19
color: "#fff",
20
marginRight: "20px",
21
textDecoration: "none",
22
}}
23
>
24
Dashboard
25
</Link>
26
 
27
<Link
28
to="/lotes"
29
style={{
30
color: "#fff",
31
marginRight: "20px",
32
textDecoration: "none",
33
}}
34
>
35
Lotes de Café
36
</Link>
37
 
38
<Link
39
to="/solo"
40
style={{
41
color: "#fff",
42
textDecoration: "none",
43
}}
44
>
45
Análise de Solo
46
</Link>
47
</div>
48
 
49
<Routes>
50
<Route path="/" element={<DashboardPage />} />
51
<Route path="/lotes" element={<LotesCafePage />} />
52
<Route path="/solo" element={<AnaliseSoloPage />} />
53
</Routes>
54
</BrowserRouter>
55
);
56
}
