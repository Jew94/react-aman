"using strict";
import "bootstrap/dist/css/bootstrap.min.css";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://www.google.com">Google</a>
        </li>
        <li>
          <a href="https://www.facebook.com">Facebook</a>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <Menu />
    </header>
  );
}

function Login() {
  return (
    <form>
      <label for="username">Username:</label>
      <input id="username" type="text" required></input>
      <br />
      <label for="password">Password:</label>
      <input id="password" type="password" required></input>
    </form>
  );
}

function Footer() {
  return <footer>Made by REL</footer>;
}

function App() {
  return (
    <Container fluid="md">
      <Header />
      <Login />
      <Footer />
    </Container>
  );
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
