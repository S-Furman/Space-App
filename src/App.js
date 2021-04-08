import "./App.css";
import Layout from "./components/Layout/Layout";
import ISSChecker from "./components/ISSChecker/ISSChecker";
import { Switch, Route } from "react-router-dom";
import Weather from "./components/Weather/Weather";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/weather" component={Weather} />
        <Route path="/" component={ISSChecker} />
      </Switch>
    </Layout>
  );
}

export default App;
