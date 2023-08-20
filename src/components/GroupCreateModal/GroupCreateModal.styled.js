import styled from 'styled-components';
import * as vars from '../../variables';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalDiv = styled.div`
  position: absolute;
  width: 90%;
  top: 50%;
  left: 50%;
  padding: 15px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  background-color: white;
  max-width: 500px;

  @media screen and (min-width: 1280px) {
    padding: 40px;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
  }
`;

export const ModalDesc = styled.p`
  font-size: 14px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
  }
`;

export const ModalLabel = styled.label`
  font-size: 12px;
  color: ${vars.SECONDARY_TEXT_COLOR};
`;

export const ModalInput = styled.input`
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 7px;
  font-size: 14px;
  color: ${vars.SECONDARY_TEXT_COLOR};
  border: 1px solid ${vars.SECONDARY_TEXT_COLOR};
  border-radius: 3px;
  width: 100%;

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
  }

  &:hover, &:focus {
    border-color: ${vars.ACCENT_COLOR};
  }

  &:placeholder: color: ${vars.SECONDARY_TEXT_COLOR};
`;

export const UsersList = styled.ul`
  list-style: none;
  height: 200px;
  overflow-y: scroll;
  margin-bottom: 15px;
`;

export const UserItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const UserName = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

export const AddButton = styled.button`
  margin-left: auto;
  margin-right: 8px;
  width: 50px;
  padding: 3px 5px;
  color: white;
  background-color: ${vars.ACCENT_COLOR};
  border: 0;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
`;

export const Avatar = styled.img`
  position: relative;
  margin-right: 15px;
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

export const SubmitButton = styled.button`
  text-align: center;
  padding: 8px 8px;
  width: 100%;
  color: white;
  background-color: ${vars.ACCENT_COLOR};
  border: 0;
  border-radius: 5px;
  font-size: 12px;
`;
