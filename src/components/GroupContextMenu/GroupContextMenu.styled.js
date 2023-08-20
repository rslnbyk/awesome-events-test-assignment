import styled from 'styled-components';
import * as vars from '../../variables';

export const ContextDiv = styled.div`
  position: relative;
  border: 1px solid ${vars.SECONDARY_TEXT_COLOR};
  border-radius: 2px;
  padding: 7px;
  width: 150px;
  background-color: white;
  z-index: 1000;
`;

export const ContextP = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
`;

export const ContextButton = styled.button`
  color: ${vars.SECONDARY_TEXT_COLOR};
  text-align: left;
  position: relative;
  padding: 5px 5px 5px 20px;
  border: none;
  background-color: white;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 0;
    width: 10px;
    height: 10px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E")
      center / contain no-repeat;
  }

  &:hover,
  &:focus {
    color: black;
  }
`;
