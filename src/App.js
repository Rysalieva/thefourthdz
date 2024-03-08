function Title () {
    return <h2>Title</h2>
}

function Header () {
  return (
      <>
        <h1>Header</h1>
          <Title/>
      </>
  );
}

function Content () {
    return (
        <>
            <h3>Content</h3>
        </>
    );
}

function Footer () {
  return (
      <>
        <h4>Footer</h4>
      </>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
