import { useEffect, useRef } from 'react';
import { ContextButton, ContextDiv, ContextP } from './GroupContextMenu.styled';
import { useDispatch } from 'react-redux';
import { deleteGroup } from 'redux/groupsOperations';

export const GroupContextMenu = ({ group, onClose, setIsEditOpen }) => {
  const dispatch = useDispatch();

  const newRef = useRef(null);
  const handleOutsideClick = e => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      onClose(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  const handleEditClick = () => {
    onClose(false);
    setIsEditOpen(true);
  };

  const handleDeleteClick = () => {
    dispatch(deleteGroup(group.id));
    onClose(false);
  };

  return (
    <ContextDiv ref={newRef}>
      <ContextP>Actions</ContextP>
      <ContextButton type="button" onClick={handleEditClick}>
        Edit
      </ContextButton>
      <ContextButton type="button" onClick={handleDeleteClick}>
        Delete
      </ContextButton>
    </ContextDiv>
  );
};
