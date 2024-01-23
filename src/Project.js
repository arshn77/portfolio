import React from "react";

export default function Project({ name, link, img, style, code }) {
  return (
    <div
      className={`w-1/3 text-lg border border-black flex items-center justify-between overflow-hidden ${style}`}
    >
      <img className="w-32 h-32 object-cover" src={img} alt=""></img>
      <a
        className="m-4 font-semibold hover:underline"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
      {code ? (
        <a
          className="m-4 font-semibold hover:underline"
          href={code}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
      ) : (
        <p className="m-4 font-semibold invisible">Code</p>
      )}
    </div>
  );
}
