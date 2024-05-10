import { Box } from "@chakra-ui/react";
import Navbar from "./Pages/Navbar";
import ItemPreview from "./Pages/ItemPreview";
import ReactSlick from "./Pages/ReactSlick";
import { useSelector } from "react-redux";
import Footer from "./Pages/Footer";


function App() {
  const mode = useSelector(store => store.mode) ;
  return (
    <Box bg={mode ? 'black' : 'white'} >
      <ItemPreview />
      <ReactSlick initSlide={7} />
      <ReactSlick initSlide={5} />
      <ReactSlick initSlide={0} />
      <Footer />
      <Navbar />
    </Box>
  );
}

export default App;
