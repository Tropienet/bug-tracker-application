import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BugSubmitForm from "./BugSubmitForm";
import Bugs from "./Bugs";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Homepage />} />
                <Route path="/BugSubmitForm" element={<BugSubmitForm />} />
                <Route path="/Bugs" element={<Bugs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;