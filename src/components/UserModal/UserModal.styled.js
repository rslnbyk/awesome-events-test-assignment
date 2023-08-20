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

  @media screen and (min-width: 1280px) {
    padding: 40px;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    width: 120px;
    height: 120px;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
  }
`;

export const Name = styled.p`
  font-size: 20px;
  line-height: ${vars.SECTION_DESCRIPTION_LINE_HEIGHT};
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;

export const DateP = styled.p`
  margin-bottom: 7px;
`;

export const StatusP = styled.p`
  color: green;
  margin-bottom: 7px;
`;

export const H3 = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const H4 = styled.h4`
  margin-bottom: 7px;
  color: ${vars.SECONDARY_TEXT_COLOR};

  @media screen and (min-width: 1280px) {
    margin-bottom: 15px;
  }
`;

export const DescriptionP = styled.p`
  margin-bottom: 10px;
  color: ${vars.SECONDARY_TEXT_COLOR};
`;

export const TabletDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    align-items: start;
  }
`;

export const TabletContainer = styled.div`
  @media screen and (min-width: 768px) {
    min-width: 220px;
    margin-right: 15px;
  }
`;

export const InputsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: -10px;
  margin-right: -10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    margin-top: -20px;
    margin-right: -20px;
    margin-bottom: 20px;
  }
`;

export const InputsItem = styled.li`
  margin-top: 10px;
  margin-right: 10px;
  flex-basis: calc((100% - 20px) / 2);

  @media screen and (min-width: 1280px) {
    margin-top: 20px;
    margin-right: 20px;
    flex-basis: calc((100% - 40px) / 2);
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${vars.SECONDARY_TEXT_COLOR};
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 7px;
  padding: 7px;
  border: 1px solid ${vars.SECONDARY_TEXT_COLOR};
  border-radius: 3px;
  font-size: 16px;
  color: ${vars.SECONDARY_TEXT_COLOR};

  &:hover,
  &:focus {
    border-color: ${vars.ACCENT_COLOR};
  }
`;

export const ButtonsContainer = styled.div`
  text-align: center;

  @media screen and (min-width: 1280px) {
    text-align: start;
  }
`;

export const SubmitButton = styled.button`
  color: white;
  background-color: ${vars.ACCENT_COLOR};
  font-size: 14px;
  border: 1px solid ${vars.ACCENT_COLOR};
  border-radius: 3px;
  padding: 8px;
  margin-right: 10px;
  width: 100px;

  @media screen and (min-width: 1280px) {
    padding: 12px;
  }
`;

export const CancelButton = styled.button`
  color: ${vars.SECONDARY_TEXT_COLOR};
  background-color: white;
  font-size: 14px;
  border: 1px solid ${vars.SECONDARY_TEXT_COLOR};
  border-radius: 3px;
  padding: 8px;
  width: 100px;

  &:hover,
  &:focus {
    border-color: ${vars.ACCENT_COLOR};
    background-color: ${vars.ACCENT_COLOR};
  }

  @media screen and (min-width: 1280px) {
    padding: 12px;
  }
`;

export const DesktopDiv = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const AccountData = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 20px;
`;

export const InfoDiv = styled.div`
  margin-right: 20px;
`;
