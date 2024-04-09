import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Premium from './pages/Premium';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App({ signOut, user }) {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/premium">premium</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/premium" element={<Premium />}></Route>
        </Routes>
      </Router>
      <div>
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
