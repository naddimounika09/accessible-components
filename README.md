# Week 4 Assignment – Accessible Component Fundamentals

## FlyRank AI Internship

### Objective

The goal of this assignment is to build accessible React components from scratch using **React**, **TypeScript**, and **WAI-ARIA Authoring Practices**, without relying on external UI component libraries.

---

## Components Implemented

### 1. Accessible Modal Dialog

Features:
- Opens with a button click
- Closes using the Close button or the Escape key
- Traps keyboard focus inside the modal
- Returns focus to the trigger button after closing
- Supports screen readers

ARIA attributes used:
- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- `aria-describedby`

---

### 2. Accessible Tabs

Features:
- Keyboard navigation
- Left Arrow
- Right Arrow
- Home key
- End key
- Mouse support

ARIA attributes used:
- `role="tablist"`
- `role="tab"`
- `role="tabpanel"`
- `aria-selected`
- `aria-controls`

---

### 3. Accessible Disclosure (Accordion)

Features:
- Expand and collapse sections
- Keyboard accessible
- Screen reader friendly

ARIA attributes used:
- `aria-expanded`
- `aria-controls`
- `role="region"`

---

## Technologies Used

- React
- TypeScript
- Vite
- CSS
- WAI-ARIA

---

## Folder Structure

```text
accessible-components/
│
├── src/
│   ├── components/
│   │   ├── Modal.tsx
│   │   ├── Tabs.tsx
│   │   └── Accordion.tsx
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── screenshots/
├── NOTES.md
├── package.json
└── vite.config.ts
```

---

## Installation

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Accessibility Features

- Keyboard navigation
- Focus management
- Focus trapping
- Escape key support
- Semantic HTML
- WAI-ARIA attributes
- Screen reader compatibility
- No external component libraries

---

## Screenshots

The `screenshots/` folder contains:

- Home Page

---

## Assignment Information

**Program:** FlyRank AI Internship

**Week:** 4

**Assignment:** Accessible Component Fundamentals

**Submitted by:** NADDI MOUNIKA
