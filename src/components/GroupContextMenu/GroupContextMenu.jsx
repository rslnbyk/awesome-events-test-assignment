import { useEffect, useRef } from 'react';
import { ContextButton, ContextDiv, ContextP } from './GroupContextMenu.styled';
import { useDispatch } from 'react-redux';
import { deleteGroup } from 'redux/groupsOperations';
import { useTranslation } from 'react-i18next';

export const GroupContextMenu = ({ group, onClose, setIsEditOpen }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
      <ContextP>{t('Actions')}</ContextP>
      <ContextButton type="button" onClick={handleEditClick}>
        {t('Edit')}
      </ContextButton>
      <ContextButton type="button" onClick={handleDeleteClick}>
        {t('Delete')}
      </ContextButton>
    </ContextDiv>
  );
};
