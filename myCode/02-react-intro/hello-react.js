'using strict';

function App() {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  )
}

function Header(){

}

function Menu(){

}

function Login(){
  return (
    <form>
      <label for="username">Username:</label>
      <input id="username" type="text" required></input>
      <label for="password">Password:</label>
      <input id="password" type="password" required></input>
    </form>
  )
}

function Footer(){
  return 'Made by REL';
}

// ========================================
  
ReactDOM.render(
  <App />,
  document.getElementById('root')
); 