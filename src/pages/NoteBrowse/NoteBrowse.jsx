import { SearchBar } from "../../components/SearchBar/SearchBar";
import { NoteList } from "../../containers/NoteList/NoteList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export function NoteBrowse(props) {
  const [searchText, setSearchText] = useState("");
  const noteList = useSelector((store) => store.NOTE.noteList);
  const filteredList = noteList.filter((note) => {
    const containsTitle = note.title
      .toUpperCase()
      .includes(searchText.trim().toUpperCase());

    const containsContent = note.content
      .toUpperCase()
      .includes(searchText.trim().toUpperCase());

    return containsTitle || containsContent;
  });
  return (
    <>
      <div className={`row justify-content-center mb-5 ${s.div}`}>
        <div className={`col-sm-12 col-md-4 ${s.div}`}>
          <SearchBar
            placeholder="Search your notes..."
            onTextChange={setSearchText}
          />
        </div>
      </div>

      {noteList?.length === 0 && (
        <div className={s.div}>
          <span>
            Vous n'avez pas de note, voulez vous en{" "}
            <Link to="/note/new"> créer une </Link>
          </span>
        </div>
      )}

      <NoteList noteList={filteredList} />
    </>
  );
}
