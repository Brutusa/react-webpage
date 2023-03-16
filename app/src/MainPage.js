import logo from './logo.svg';
import './App.css';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This project is a work in progress.
        </p>
        <a
          className="App-link"
          href="https://github.com/Brutusa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andujar's Github
        </a>
      </header>
    </div>
  );
}

export default MainPage;
