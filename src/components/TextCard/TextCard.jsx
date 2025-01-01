import { useState } from "react";
import s from "./style.module.css";
import { Trash as TrashIcon } from "react-bootstrap-icons";

export function TextCard({ title, subtitle, content, onClickTrash, onClick }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  function onClickTrash_(e) {
    onClickTrash();
    e.stopPropagation();
  }
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      className={`card ${s.container}`}
      style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
    >
      <div className="card-body">
        <div className={`card-text ${s.dateIcon}`}>
          <h4 className={`card-subtitle mb-2 text-muted ${s.h4}`}>
            {subtitle}
          </h4>
          <div className={s.icon}>
            <TrashIcon
              size={20}
              onMouseEnter={() => setIsTrashHovered(true)}
              onMouseLeave={() => setIsTrashHovered(false)}
              style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
              onClick={onClickTrash_}
            />
          </div>
        </div>

        <div>
          <h1 className={`card-title ${s.h1}`}>{title}</h1>
        </div>

        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
}
