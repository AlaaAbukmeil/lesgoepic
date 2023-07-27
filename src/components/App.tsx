import router from "../routers/router";
import {
  RouterProvider,
} from "react-router-dom";
import NavBar from "./common/navbar";
import Footer from "./common/footer";

function App() {

  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
