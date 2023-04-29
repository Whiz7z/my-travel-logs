import "./App.scss";
import Header from "./Header/Header";
import MyLogs from "./MyLogs/MyLogs";
import Features from "./Features/Features";
import Places from "./Places/Places";
import ChooseSection from "./ChooseSection/ChooseSection";
import Packages from "./Packages/Packages";
import CustomersReviews from "./CustomersReviews/CustomersReviews";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MyLogs />
      <Features />
      <Places />
      <ChooseSection />
      <Packages />
      <CustomersReviews />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
