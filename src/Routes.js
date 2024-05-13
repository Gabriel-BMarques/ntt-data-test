import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;