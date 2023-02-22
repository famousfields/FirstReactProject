import Navbar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Footer from './Components/Footer';
import Explore from './Pages/Explore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <SideBar/>
        <Navbar />
        <div className="content">
          <Switch>{/* assures only one router component displays at once */}
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/create">
              <Create />
            </Route>
            <Route path = "/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path = "/explore">
              <Explore />
            </Route>
            <Route path = "*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
