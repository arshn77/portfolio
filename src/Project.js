import React from "react";

export default function Project({ index, name, kind, link, img }) {
  return (
    <li className="project">
      <span className="num">{String(index).padStart(2, "0")}</span>
      <div className="thumb">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className="project-body">
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>
        <p className="meta">{kind}</p>
      </div>
    </li>
  );
}
