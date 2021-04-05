import "./App.css";
import Layout from "./components/Layout/Layout";
import Carousel from "./components/Carousel/Carousel";
import { Switch, Route } from "react-router";
import Weather from "./components/Weather/Weather";
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/weather" component={Weather}></Route>
          <Route path="/" component={Carousel}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
