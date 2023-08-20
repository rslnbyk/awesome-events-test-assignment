import { useState } from 'react';
import {
  Avatar,
  AvatarDiv,
  AvatarSpan,
  GroupP,
  GroupsP,
  JobP,
  Name,
} from './UserCard.styled';
import { UserModal } from 'components/UserModal/UserModal';

export const UserCard = ({ data }) => {
  const { groups, avatar, firstName, lastName, job } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div onClick={() => setIsModalOpen(true)}>
      <AvatarDiv>
        <Avatar src={avatar} alt="User avatar" />
        <AvatarSpan></AvatarSpan>
      </AvatarDiv>
      <Name>{`${firstName} ${lastName}`}</Name>
      <GroupP>{groups.length <= 1 ? 'Group' : 'Groups'}</GroupP>
      <GroupsP>
        {groups.length >= 1
          ? groups.flatMap(g => g.name).join(', ')
          : 'No groups'}
      </GroupsP>
      <JobP>{job}</JobP>
      {isModalOpen ? (
        <>
          <UserModal onClose={() => setIsModalOpen(false)} data={data} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
