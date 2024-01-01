import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import IntroductionPage from "./pages/IntroductionPage";

import { useDispatch } from "react-redux";
import * as actions from './redux/actions';

function App() {
  // return (
  //   <BrowserRouter>
  //   <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/:id" element={<DetailPage />} />
  //   </Routes>
  // </BrowserRouter>
  // )
  const dispatch = useDispatch();

  dispatch(actions.getHotels.getHotelsRequest());


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:id" element={<DetailPage/>}/>
        <Route path="/Introduction" element={<IntroductionPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
