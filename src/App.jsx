import {
  Navbar,
  Services,
  Transactions,
  Welcome,
  Footer,
} from "../components/index";

function App() {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome bg-black">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
