import { useRef, useState } from "react";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    content:
      "This project demonstrates accessible React components using WAI-ARIA.",
  },
  {
    id: "features",
    label: "Features",
    content:
      "Supports keyboard navigation, ARIA roles, focus management, and TypeScript.",
  },
  {
    id: "about",
    label: "About",
    content:
      "Built from scratch without any UI libraries like Material UI or Radix.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    let next = index;

    switch (event.key) {
      case "ArrowRight":
        next = (index + 1) % tabs.length;
        break;

      case "ArrowLeft":
        next = (index - 1 + tabs.length) % tabs.length;
        break;

      case "Home":
        next = 0;
        break;

      case "End":
        next = tabs.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    setActiveTab(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Project Tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`tabButton ${
              activeTab === index ? "activeTab" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${tabs[activeTab].id}`}
        aria-labelledby={`tab-${tabs[activeTab].id}`}
        className="tabPanel"
      >
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}