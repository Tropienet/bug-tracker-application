import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BugSubmitForm from "./BugSubmitForm";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Homepage />} />
                <Route path="/BugSubmitForm" element={<BugSubmitForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;