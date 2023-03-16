import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from "./Footer";

const sections = [
  { title: 'Home', url: './MainPage}' },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/abrutus/' },
  { title: 'My Github', url: 'https://github.com/Brutusa' },
  { title: 'About Me', url: 'https://github.com/Brutusa/Brutusa#about-me-' },
  { title: 'Contact Me', url: 'https://github.com/Brutusa/Brutusa#contact-me-' },
];

function MainPage() {
  return (
    <div className="App">
      <Header title="Andujar's Space" sections={sections} classname=".App-header"></Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This project is a work in progress.
        </p>
      <Footer/>
    </div>
  );
}

export default MainPage;
