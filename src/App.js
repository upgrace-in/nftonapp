import Header from './Header'
import Home from './Home'
import Collection from './Collection'
import Contact from './Contact'
import Counter from './Counter'
import About from './About'
import Divider from './Divider'
import React from 'react';
import Footer from './Footer'

function App() {
  return (
    <React.Fragment>
      <>
        <div className="metaportal_fn_content">
          <Header />
          <Home />
          <Counter />
          <About />
          <Divider />
          <Collection />
          <Divider />
          <Contact />
          <Footer />
        </div>
      </>
    </React.Fragment>
  );
}

export default App;
