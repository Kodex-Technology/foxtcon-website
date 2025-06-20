"use client";
import React from "react";
import { Modal } from "react-bootstrap";
import "./ConfirmationModal.scss";

interface ConfirmationModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  actionType: string;
  icon?: string;
  message?: string;
}

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  show,
  onClose,
  onConfirm,
  actionType,
  icon,
  message,
}) => {
  const defaultIcons: Record<string, string> = {
    delete: "/iconFiles/delete.svg",
    deactivate: "/iconFiles/check.svg",
    suspend: "/iconFiles/cross.svg",
  };

  const iconSrc = icon || defaultIcons[actionType] || "/iconFiles/delete.svg";

  return (
    <Modal className="confirmation-modal" show={show} onHide={onClose} centered>
      <Modal.Body>
        <div className="custom-modal-header">
          <img src={iconSrc} alt={actionType} />
        </div>
        <div className="custom-modal-body">
          <p>
            {message ||
              `Are you sure you want to ${capitalize(actionType)} this item?`}
          </p>
        </div>
        <div className="custom-modal-footer">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className={actionType.toLowerCase()} onClick={onConfirm}>
            {capitalize(actionType)}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;
