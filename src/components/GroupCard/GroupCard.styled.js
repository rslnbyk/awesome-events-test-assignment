import styled from 'styled-components';
import * as vars from '../../variables';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Status = styled.span`
  display: inline-block;
  font-size: 12px;
  border-radius: 4px;
  padding: 3px 5px 7px 5px;
  height: 20px;
  width: 70px;
  color: #008748;
  background-color: #00e57a;
`;

export const DateCreation = styled.p`
  color: ${vars.SECONDARY_TEXT_COLOR};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  color: ${vars.SECONDARY_TEXT_COLOR};
  font-size: 11px;
  margin-bottom: 7px;
`;

export const AvatarList = styled.ul`
  list-style: none;
  display: flex;
`;

export const AvatarItem = styled.ul`
  &:not(:first-child) {
    margin-left: -15px;
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

export const MoreAvatars = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${vars.SECONDARY_TEXT_COLOR};
  color: #7a7a7a;
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.svg`
  fill: #7a7a7a;

  &:hover,
  &:focus {
    fill: ${vars.ACCENT_COLOR};
  }
`;

export const CardDiv = styled.div`
  position: relative;
`;

export const CardContextMenu = styled.div`
  position: absolute;
  bottom: -50px;
  right: 28px;
`;
