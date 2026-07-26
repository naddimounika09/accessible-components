import { useEffect, useRef, useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    // Focus the close button when modal opens
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      // Close on Escape
      if (e.key === "Escape") {
        setOpen(false);
      }

      // Focus trap
      if (e.key === "Tab") {
        const focusable =
          modalRef.current?.querySelectorAll<HTMLElement>(
            'button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])'
          ) || [];

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      // Return focus to the Open button
      openButtonRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={openButtonRef}
        className="demoButton"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>

      {open && (
        <div className="overlay">
          <div
            ref={modalRef}
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <h2 id="modal-title">Accessible Modal</h2>

            <p id="modal-description">
              This modal is built using React and TypeScript. It supports
              keyboard navigation, focus trapping, and follows WAI-ARIA
              accessibility guidelines.
            </p>

            <input
              type="text"
              placeholder="Type something..."
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "20px",
              }}
            >
              <button
                ref={closeButtonRef}
                className="demoButton"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}