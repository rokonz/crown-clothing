import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

/* Shop component/page */
const Shop = () => <h1>This is the Shop page</h1>;

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Route>
        </Routes>
    );
}

export default App;
