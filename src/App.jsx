import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './style.module.css';
import { FaArrowCircleUp } from 'react-icons/fa';
import Header from './components/header/Header';
import Main from './components/mainscreen/Main';
import About from './components/about/About';
import Products from './components/products/Products';
import How from './components/how/How';
import Sellers from './components/sellers/Sellers';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
  const [showToMain, setShowToMain] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToMain(window.scrollY >= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToMain = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={cn(styles.app)}>
      <div className={cn(styles.app__wrapper)} id="home">
        <Header homeId="home"
          aboutId="about"
          productsId="products"
          howId="how"
          sellersId="sellers"
          contactsId="contacts"
          scrollToSection={handleScrollToSection}/>
        <Main homeId="home" scrollToSection={handleScrollToSection} />
      </div>
      {showToMain && (
        <div
          className={cn(styles.to_main)}
          onClick={handleScrollToMain}
        >
          <FaArrowCircleUp className={cn(styles.to_main_btn)} />
        </div>
      )}
      <About aboutId="about" scrollToSection={handleScrollToSection} />
      <Products productsId="products" scrollToSection={handleScrollToSection} />
      <How howId="how" scrollToSection={handleScrollToSection} />
      <Sellers sellersId="sellers" scrollToSection={handleScrollToSection} />
      <Contacts contactsId="contacts" scrollToSection={handleScrollToSection} />
      <Footer />
    </div>
  );
}

export default App;
