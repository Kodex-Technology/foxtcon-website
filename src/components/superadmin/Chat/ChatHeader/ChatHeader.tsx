import { DotsIcon } from '@/svgs';
import { ChatHeaderProps } from '@/types/chat'
import React, { useRef, useState } from 'react'
import ConfirmationModal from '../../common/ConfirmationModal/ConfirmationModal';

const ChatHeader = ({ user }: ChatHeaderProps) => {

    const dropdownRef = useRef<HTMLDivElement>(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    const handleDeleteClick = () => {
        setShowDropdown(false);
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);
    const handleConfirmDelete = () => {
        console.log("Deleted:", user?.id);
        setShowModal(false);
    };


    if (!user) return null;
    return (
        <>
            <div className="chat-header">
                <div className="chat-profile">
                    <div className="chat-profile-img">
                        <img src={`/images/profile-${user.id}.jpg`} alt="img" />
                        <span className={user?.isActive ? "active" : ""}></span>
                    </div>
                    <h2>
                        {user.name}
                        <span>{user.company}</span>
                    </h2>
                </div>
                <div className="chat-action" ref={dropdownRef}>
                    <button onClick={toggleDropdown}>
                        <DotsIcon />
                    </button>
                    {showDropdown && (
                        <div className="chat-dropdown">
                            <ul>
                                <li onClick={handleDeleteClick}>Delete</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <ConfirmationModal
                show={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                actionType="delete"
            />
        </>
    )
}

export default ChatHeader
