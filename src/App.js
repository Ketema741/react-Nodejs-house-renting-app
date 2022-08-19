import './css/App.css';
import './css/nav.css';
import './css/style.css';

function App() {
  return (
    <div className="container">
      <div className="header__nav">
        <img src="img/logo.png" alt="logo" className="header__logo" />
        <form action="#" className="search">
          <input type="text" className="search__input" placeholder="Search houses" />
        </form>
        <nav className="user-nav">
            <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
            </svg>
            <span className="user-nav__notification">4</span>
          </div>
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
                </svg>
            <span className="user-nav__notification">14</span>
          </div>
          <div className="user-nav__user">
            <img src="img/realtor-1.jpeg" alt="realtor" className="user-nav__user-photo" />
            <span className="user-nav__user-name">Jermia</span>
          </div>
        </nav>
      </div>

      <nav className="sdbar">
        <ul className="sd-nav">
          <li className="sd-nav__item sd-nav__item--active">
            <a href="home.php" className="sd-nav__link">
              <svg className="sd-nav__icon">
                  </svg>
              <span>HOME</span>
            </a>
          </li>
          
          <li className="sd-nav__item">
            <a href="realtors.php" className="sd-nav__link">
              <svg className="sd-nav__icon">
              </svg>
              <span>Realtors</span>
            </a>
          </li>
          <li className="sd-nav__item">
            <a href="about.php" className="sd-nav__link">
              <svg className="sd-nav__icon">
                </svg>
              <span>About</span>
            </a>
          </li>
  
          <li className="sd-nav__item">
            <a href="login.php" className="sd-nav__link">
              <svg className="sd-nav__icon">
              </svg>
              <span>admin </span>
            </a>
          </li>
        </ul>
    </nav>

        
      <header className="header">
          <h1 className="heading-1">The ultimate personal freedom</h1>
      </header>

      
      <section className="homes" id="home">
      </section>
      

      <footer className="footer">
        <ul className="nav">
          <li className="nav__item">
            <a href="Home" className="nav__link">Find your dream home</a>
            </li>
          <li className="nav__item">
            <a href="Request" className="nav__link">Request proposal</a>
          </li>
          <li className="nav__item">
            <a href="planner" className="nav__link">Download home planner</a>
          </li>
          <li className="nav__item">
            <a href="Contact" className="nav__link">Contact us</a>
          </li>
          <li className="nav__item">
            <a href="property" className="nav__link">Submit your property</a>
          </li>
          <li className="nav__item">
            <a href="work" className="nav__link">Come work with us!</a>
          </li>
        </ul>
        <p className="copyright">
          &copy; Copyright 2022 by Ketema Girma.
        </p>
      </footer>
    </div>
  );
}

export default App;
