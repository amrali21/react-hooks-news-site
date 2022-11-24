import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/nav';
import News from './Components/news';

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Route exact path="/">
                <Redirect to="/Tesla" />
            </Route>
            <Route exact path="/Apple"><News newsName="iphone" /></Route>
            <Route path="/Tesla"><News newsName="tesla" /></Route>
            <Route path="/Bitcoin"><News newsName="bitcoin" /></Route>
            <Route path="/nasa"><News newsName="nasa" /></Route>
            <Route path="/upsc"><News newsName="upsc" /></Route>
        </BrowserRouter>
    );
}

export default App;
