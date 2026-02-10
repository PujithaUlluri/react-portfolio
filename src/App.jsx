import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRouter from "./router/router";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
