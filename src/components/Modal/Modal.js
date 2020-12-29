import React from "react";
import "./Modal.scss";
export default function Modal({ visible, children, onClose, title = "" }) {
  if (!visible) {
    return null;
  }
  return (
    <div class="modal" id="modal">
      <div class="content">{children}</div>
    </div>
  );
}
