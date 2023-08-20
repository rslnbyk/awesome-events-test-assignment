import styled from 'styled-components';
import * as vars from '../../variables';

export const Container = styled.div`
  margin: 0 auto;
  padding: ${vars.CONTAINER_UPPER_PADDING_MOBILE}
    ${vars.CONTAINER_PADDING_MOBILE};

  @media screen and (min-width: 768px) {
    padding: ${vars.CONTAINER_UPPER_PADDING_TABLET}
      ${vars.CONTAINER_PADDING_TABLET};
  }

  @media screen and (min-width: 1280px) {
    padding: ${vars.CONTAINER_UPPER_PADDING_PC} ${vars.CONTAINER_PADDING_PC};
  }
`;

export const MainHeader = styled.h1`
  color: ${vars.MAIN_TEXT_COLOR};
  margin-bottom: 15px;
`;

export const SectionDescription = styled.p`
  color: ${vars.MAIN_TEXT_COLOR};
  font-size: ${vars.SECTION_DESCRIPTION_FONT_SIZE};
  line-height: ${vars.SECTION_DESCRIPTION_LINE_HEIGHT};
  margin-bottom: 30px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const AddButton = styled.button`
  color: white;
  position: relative;
  padding: 5px 5px 5px 20px;
  border: none;
  border-radius: 3px;
  background-color: ${vars.ACCENT_COLOR};

  &:before {
    content: '';
    position: absolute;
    left: 5px;
    top: 12px;
    bottom: 0;
    width: 10px;
    height: 10px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E")
      center / contain no-repeat;
  }
`;

export const UsersItem = styled.li`
  padding: 10px;
  border: 2px solid ${vars.SECONDARY_TEXT_COLOR};
  border-radius: 15px;
  width: 250px;
  margin: 0 auto;
  height: 288px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover,
  &:focus {
    border-color: ${vars.ACCENT_COLOR};
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
    margin: 20px 0 0 20px;
    flex-basis: calc((100% - 60px) / 3);
  }

  @media screen and (min-width: 1050px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
    margin: 30px 0 0 30px;
    flex-basis: calc((100% - 120px) / 4);
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
    margin: 30px 0 0 30px;
    flex-basis: calc((100% - 150px) / 5);
  }
`;

export const UsersList = styled.ul`
  list-style: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: -20px;
    margin-left: -20px;
  }

  @media screen and (min-width: 1050px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: -30px;
    margin-left: -30px;
  }
`;
