import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BlogItemDetails from './components/BlogItemDetails'

import Header from './components/Header'
import About from './components/About'
import BlogsList from './components/BlogsList'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={BlogsList} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blogs/:id" component={BlogItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
