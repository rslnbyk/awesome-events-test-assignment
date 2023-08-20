import * as ReactDOM from 'react-dom';
import { nanoid } from 'nanoid';
import {
  AddButton,
  Avatar,
  H2,
  ModalDesc,
  ModalDiv,
  ModalInput,
  ModalLabel,
  ModalOverlay,
  SubmitButton,
  UserItem,
  UserName,
  UsersList,
} from './GroupCreateModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers, selectUsersIsLoading } from 'redux/selectors';
import { useEffect, useRef, useState } from 'react';
import { fetchAllUsers, changeUser } from 'redux/usersOperations';
import { addGroup } from 'redux/groupsOperations';
import { useTranslation } from 'react-i18next';

export const GroupCreateModal = ({ onClose }) => {
  const { t } = useTranslation();
  const isUsersLoading = useSelector(selectUsersIsLoading);
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const [groupUsers, setGroupUsers] = useState([]);

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

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleAdd = (e, data) => {
    e.target.style.backgroundColor = '#2EFF51';
    e.target.textContent = t('Added');
    setGroupUsers([...groupUsers, data]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const group = {
      id: nanoid(),
      name: e.target.elements.groupName.value,
      users: groupUsers,
      status: 'Active',
      description:
        'An offer is a conditional proposal made by a buyer or seller to buy or sell an asset',
    };
    dispatch(addGroup(group));
    groupUsers.forEach(user => {
      dispatch(
        changeUser({
          id: user.id,
          groups: [{ id: group.id, name: group.name }],
        })
      );
    });
    e.stopPropagation();
    onClose();
  };

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalDiv ref={newRef}>
        <H2>{t('Change personal data')}</H2>
        <ModalDesc>{t('Group description')}</ModalDesc>
        <form onSubmit={handleSubmit}>
          <ModalLabel>
            {t('Group Name')}
            <br />
            <ModalInput
              name="groupName"
              type="text"
              placeholder={t('Group Name')}
            />
          </ModalLabel>
          <H2>{t('Add teammates to a group')}</H2>
          {isUsersLoading ? (
            <p>Loading...</p>
          ) : (
            <UsersList>
              {users.map(user => (
                <UserItem key={user.id}>
                  <Avatar src={user.avatar} alt="User Avatar" />
                  <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
                  <AddButton
                    type="button"
                    onClick={e =>
                      handleAdd(e, { id: user.id, avatar: user.avatar })
                    }
                  >
                    {t('Add')}
                  </AddButton>
                </UserItem>
              ))}
            </UsersList>
          )}
          <SubmitButton type="submit">{t('Create & Add users')}</SubmitButton>
        </form>
      </ModalDiv>
    </ModalOverlay>,
    document.getElementById('modal-new-form')
  );
};
