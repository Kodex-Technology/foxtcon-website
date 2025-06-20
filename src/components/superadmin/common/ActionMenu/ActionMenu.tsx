import React from "react";
import { Menu, MenuItem } from "@mui/material";
import "./ActionMenu.scss";

interface ActionItem {
  label: string;
  value: string;
}

interface ActionMenuProps {
  anchorEl: HTMLElement | null;
  menuRow: number | null;
  onClose: () => void;
  actions: ActionItem[];
  onAction: (actionValue: string, rowIndex: number) => void;
}

const ActionMenu: React.FC<ActionMenuProps> = ({
  anchorEl,
  menuRow,
  onClose,
  actions,
  onAction,
}) => {
  const handleItemClick = (value: string) => {
    if (menuRow !== null) {
      onAction(value, menuRow);
    }
    onClose();
  };

  return (
    <Menu
      id="action-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      slotProps={{
        paper: {
          className: "custom-menu",
        },
      }}
    >
      {actions.map((action, idx) => (
        <MenuItem key={idx} onClick={() => handleItemClick(action.value)}>
          {action.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ActionMenu;
