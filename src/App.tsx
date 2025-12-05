import { Routes, Route } from "react-router-dom";
import AppLayout from "./hoc/AppLayout";
import Auth from "./pages/Auth/Auth";
import JeepList from "./pages/JeepList/JeepList";
// import JeepDetails from "./pages/JeepDetails/JeepDetails";

function App() {
    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route element={<AppLayout />}>
                <Route path="/" element={<JeepList />} />
                {/*<Route path="/jeep/:id" element={<JeepDetails />} />*/}
            </Route>
        </Routes>
    );
}

export default App;
