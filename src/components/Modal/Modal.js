import React from "react";
import "./Modal.scss";
export default function Modal({ visible, children, onClose }) {
  if (!visible) {
    return null;
  }
  return (
    <div class="modal" id="modal">
      <div class="content">
        <span
          class="close"
          onClick={(e) => {
            onClose && onClose(e);
          }}
        >
          &times;
        </span>
        <h2>Modal Window</h2>
        {children}
        {/* <div class="actions">
          <button
            class="toggle-button"
            onClick={(e) => {
              onClose && onClose(e);
            }}
          >
            close
          </button>
        </div> */}
      </div>
    </div>
  );
}
