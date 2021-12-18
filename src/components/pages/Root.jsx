import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Front, About, Extract, Result } from "components/pages";
import RemoraHeader from "components/UI/atoms/RemoraHeader";
import Test from "./Test";

function Root() {
    const isTest = true;
    return (
        <BrowserRouter>
            <RemoraHeader />
            <Routes>
                <Route exact path="/" element={isTest ? <Test /> : <Front />} />
                <Route path="/about" element={<About />} />
                <Route path="/extract" element={<Extract />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Root;
