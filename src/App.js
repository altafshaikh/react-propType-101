import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading>Default Heading Example</Heading>
        <Heading type="h1">H1 Heading Example</Heading>
        <Heading type="h2">H2 Heading Example</Heading>
        <Heading type="h6">H6 Heading Example</Heading>
        <Heading type="h7">H7 Heading Example</Heading>
        {/* <Heading type={123}>H2 Heading Example</Heading> */}
        {/* <Heading type="h33">H2 Heading Example</Heading> */}
      </header>
    </div>
  );
}

export default App;
