import * as ReactDOM from 'react-dom';
import {
  H2,
  ModalDesc,
  ModalDiv,
  ModalInput,
  ModalLabel,
  ModalOverlay,
  SubmitButton,
} from './GroupEditModal.styled';
import { useDispatch } from 'react-redux';
import { changeGroup } from 'redux/groupsOperations';
import { useEffect, useRef } from 'react';

export const GroupEditModal = ({ group, onClose }) => {
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

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      changeGroup({ id: group.id, name: e.target.elements.groupName.value })
    );

    e.stopPropagation();
    onClose();
  };

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalDiv ref={newRef}>
        <H2>Modify Group</H2>
        <ModalDesc>
          &emsp; Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis, voluptates.
        </ModalDesc>
        <form onSubmit={handleSubmit}>
          <ModalLabel>
            Group Name
            <br />
            <ModalInput
              name="groupName"
              type="text"
              defaultValue={group.name}
            />
          </ModalLabel>
          <SubmitButton type="submit">Update</SubmitButton>
        </form>
      </ModalDiv>
    </ModalOverlay>,
    document.getElementById('modal-edit-form')
  );
};
