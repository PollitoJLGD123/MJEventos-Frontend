"use client";
import { useState } from "react";

export default function Pregunta({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border-l-4 pl-4 border-solid border-[#ea9d2f]">
      <h3 
        className="font-medium text-[25px] cursor-pointer hover:text-[#ea9d2f] text-black select-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </h3>
      {isOpen && <p className="text-[18px] mt-4 italic text-black">{answer}</p>}
    </article>
  );
}
