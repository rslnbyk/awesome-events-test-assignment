import styled from 'styled-components';
import * as vars from '../../variables';

export const Avatar = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const AvatarDiv = styled.div`
  position: relative;
`;

export const AvatarSpan = styled.span`
  position: absolute;
  display: inline-block;
  bottom: 12%;
  right: 34%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: green;
`;

export const Name = styled.p`
  font-size: 20px;
  line-height: ${vars.SECTION_DESCRIPTION_LINE_HEIGHT};
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;

export const GroupP = styled.p`
  font-size: 12px;
  line-height: ${vars.SECTION_DESCRIPTION_LINE_HEIGHT};
  color: ${vars.SECONDARY_TEXT_COLOR};
  margin-bottom: 10px;
`;

export const GroupsP = styled.p`
  font-size: 16px;
  line-height: ${vars.SECTION_DESCRIPTION_LINE_HEIGHT};
  color: ${vars.SECONDARY_TEXT_COLOR};
  margin-bottom: 15px;
`;

export const JobP = styled.p`
  font-size: 18px;
  line-height: ${vars.SECTION_DESCRIPTION_LINE_HEIGHT};
  font-weight: 700;
  color: ${vars.SECONDARY_TEXT_COLOR};
  text-align: center;
`;
