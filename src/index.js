import "./global.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoteBrowse } from "./pages/NoteBrowse/NoteBrowse";
import { NoteCreate } from "./pages/NoteCreate/NoteCreate";
import { Note } from "./pages/Note/Note";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { App } from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<NoteBrowse />} />
          <Route path="/note/:noteId" element={<Note />} />
          <Route path="/note/new" element={<NoteCreate />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);