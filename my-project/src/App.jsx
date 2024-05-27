import Home from "./assets/Home";
import About from "./assets/About";
import Articles from "./assets/Articles";
import ReadArticle from "./assets/ReadArticle";
import Login from "./assets/Login";
import Contacts from "./assets/Contacts";
import SharedLayout from "./layout/SharedLayout";
import SetArticlesLayout from "./layout/SetArticlesLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route
            path="/"
            element={
              <div className="text-white">
                <Home />
              </div>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <div className="text-white">
                <About />
              </div>
            }
          ></Route>
          <Route path="/articles" element={<SetArticlesLayout />}>
            <Route index element={<Articles />} />
            <Route path=":articleId" element={<ReadArticle />}></Route>
          </Route>
          <Route
            path="/contacts"
            element={
              <div className="text-white">
                <Contacts />
              </div>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
