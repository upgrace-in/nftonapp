import Header from './Header'
import Home from './Home'
import Collection from './Collection'
import Contact from './Contact'
import Counter from './Counter'
import About from './About'
import Divider from './Divider'
import React from 'react';
import Footer from './Footer'
import Samples from './Samples'
import Services from './Services'

function App() {
  return (
    <React.Fragment>
      <>
        <div className="metaportal_fn_content">
          <Header />
          <Home />
          <Counter />
          <About />

          {/* <Divider />
          <Samples/>
          <Divider />
          <Services/> */}
          
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
