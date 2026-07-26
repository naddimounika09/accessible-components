# NOTES

## Comparison with shadcn/ui

This project was implemented completely from scratch without using any component libraries.

### Differences

### Modal

My implementation:

- Custom focus trap
- Escape key closes modal
- Returns focus to trigger button
- Manual ARIA implementation

shadcn/ui:

- Uses Radix Dialog internally
- Automatic focus management
- Built-in accessibility

---

### Tabs

My implementation:

- Manual keyboard navigation
- Arrow key handling
- Home and End key support
- Manual ARIA attributes

shadcn/ui:

- Uses Radix Tabs
- Keyboard support built in

---

### Accordion

My implementation:

- Custom state management
- aria-expanded
- aria-controls
- role="region"

shadcn/ui:

- Uses Radix Accordion
- More advanced animations
- Additional accessibility helpers

---

## Reflection

Building these components manually helped me understand:

- Focus management
- Keyboard accessibility
- WAI-ARIA roles
- Screen reader support
- Accessible React component design

I now have a better understanding of how accessible components work internally before using component libraries.