import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./layout/main-layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, PageNotFound, Tutorials, UserPage } from "./pages";
import { ReactModules } from "./tutorials/react-modules/index";
import { ReactComponent } from "./tutorials/react-components";
import CssInReact from "./tutorials/css-in-react/css-in-react";
import ClassModules from "./tutorials/css-in-react/class-modules";
import W3schoolsPage from "./tutorials/w3schools/w3schools-page";
import TutorialsHome from "./tutorials/home/tutorials-home";
import { EditUser, NewUser } from "./pages/users/user-form";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tutorials" element={<Tutorials />}>
              <Route index element={<TutorialsHome />} />
              <Route path="react-modules" element={<ReactModules />} />
              <Route path="react-components" element={<ReactComponent />} />
              <Route path="w3schools" element={<W3schoolsPage />} />
              <Route path="CSS-in-React" element={<CssInReact />} />
              <Route path="class-module" element={<ClassModules />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="user" element={<UserPage />} />
            <Route path="user/edit-user/:id/:firstName" element={<EditUser />}/>
            <Route path="user/new-user" element={<NewUser/>}/>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
