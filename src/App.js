import "./App.css";
import Layout from "./components/Layout/Layout";
import Carousel from "./components/Carousel/Carousel";
function App() {
  return (
    <div className="App">
      <Layout>
        <Carousel></Carousel>
      </Layout>
    </div>
  );
}

export default App;
