import {Route, Switch, BrowserRouter} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import NotFound from './components/NotFound'
import Home from './components/Home'

const App = () => (
  <BrowserRouter className="Main-Container">
    <div className="Main-Container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)
export default App
