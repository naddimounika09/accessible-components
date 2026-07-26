import { useState } from "react";

const items = [
  {
    title: "What is Accessibility?",
    content:
      "Accessibility ensures everyone, including people using assistive technologies, can use your application.",
  },
  {
    title: "Why use ARIA?",
    content:
      "ARIA provides semantic information that helps screen readers understand custom UI components.",
  },
  {
    title: "Why Keyboard Support?",
    content:
      "Many users rely entirely on the keyboard. Every interactive component should be usable without a mouse.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="accordionItem">
          <button
            className="accordionButton"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-panel-${index}`}
            id={`accordion-header-${index}`}
            onClick={() => toggle(index)}
          >
            {item.title}
          </button>

          {openIndex === index && (
            <div
              id={`accordion-panel-${index}`}
              role="region"
              aria-labelledby={`accordion-header-${index}`}
              className="accordionPanel"
            >
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}