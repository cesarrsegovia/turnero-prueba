import { Route, Routes } from "react-router-dom";
import App from "../App";
import  {LoginPage, UserPage, Hero, Home}  from "../pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/app" element={<App />} />
        </Routes>
    );
};

export default AppRoutes;
