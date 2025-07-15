import Footer from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div style={{display:"flex", flexDirection: "column", height: "90vh"}}>
      <Header />
      <div style={{fontSize: "40px", backgroundColor: "#ee5f9b", width: "100%", display:"flex", justifyContent: "center", alignItems: "center", flexGrow: 1}}>This is Remote GUI.</div>
      <Footer />
    </div>
  );
}

export default App;
