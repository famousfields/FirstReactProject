import Navbar from './NavBar';
import Home from './Home';
import Create from './Create';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
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
