import styled from 'styled-components';
import * as vars from '../../variables';

export const PagesP = styled.p`
  font-size: 14px;
  color: ${vars.SECONDARY_TEXT_COLOR};
`;

export const InfoP = styled.p`
  font-size: 14px;
  color: ${vars.SECONDARY_TEXT_COLOR};
  margin-right: 10px;
`;

export const PaginationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FormDiv = styled.div`
  display: flex;
`;

export const PageInput = styled.input`
  padding: 2px;
  font-size: 14px;
  color: ${vars.SECONDARY_TEXT_COLOR};
  width: 20px;
  border-radius: 2px;
  border: 1px solid ${vars.SECONDARY_TEXT_COLOR};

  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover,
  &:focus {
    border-color: ${vars.ACCENT_COLOR};
  }
`;
