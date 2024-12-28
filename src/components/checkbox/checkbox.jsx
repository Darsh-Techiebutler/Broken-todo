import * as React from "react";
import "./checkbox.scss";

export const Checkbox = ({
  onClick,
  checked,
  onDelete,
  label,
  onKeyUp,
  onEdit,
}) => (
  <div className="checkbox">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input
        tabIndex="-1"
        type="checkbox"
        checked={checked}
        onChange={onClick}
      />
      <span className={checked ? "checkbox-checked" : ""}>{label}</span>
    </div>
    <div className="button-group" JustifyContent="space-between">
      <button type="button" className="checkbox-delete" onClick={onDelete}>
        ❌&nbsp;&nbsp;
      </button>
      &nbsp;
      <button type="button" className="checkbox-edit" onClick={onEdit}>
        ✏️
      </button>
    </div>
  </div>
);
