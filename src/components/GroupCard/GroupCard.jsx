import { useState } from 'react';
import sprite from '../../sprite.svg';
import {
  Avatar,
  AvatarItem,
  AvatarList,
  BottomDiv,
  CardContextMenu,
  CardDiv,
  DateCreation,
  Description,
  HeaderContainer,
  Icon,
  MoreAvatars,
  Status,
} from './GroupCard.styled';
import { nanoid } from 'nanoid';
import { GroupContextMenu } from 'components/GroupContextMenu/GroupContextMenu';
import { GroupEditModal } from 'components/GroupEditModal/GroupEditModal';

export const GroupCard = ({ data }) => {
  const { name, createdAt, status, description, users } = data;
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <CardDiv>
      <HeaderContainer>
        <h2>{name}</h2>
        <Status>{status}</Status>
      </HeaderContainer>
      <DateCreation>{createdAt.slice(0, 10)}</DateCreation>
      <Description>&emsp;{description}</Description>
      <BottomDiv>
        <AvatarList>
          {users.map((user, idx) => {
            if (idx <= 4) {
              return (
                <AvatarItem key={user.id}>
                  <Avatar src={user.avatar} alt="User avatar" />
                </AvatarItem>
              );
            } else if (idx === 5) {
              return (
                <AvatarItem key={nanoid()}>
                  <MoreAvatars>{`${users.length - 5}+`}</MoreAvatars>
                </AvatarItem>
              );
            } else {
              return null;
            }
          })}
        </AvatarList>
        <Icon width="25" height="25" onClick={() => setIsContextMenuOpen(true)}>
          <use href={sprite + '#icon-equalizer'} />
        </Icon>
      </BottomDiv>
      {isContextMenuOpen ? (
        <CardContextMenu>
          <GroupContextMenu
            group={data}
            onClose={() => setIsContextMenuOpen(false)}
            setIsEditOpen={() => setIsEditOpen(true)}
          />
        </CardContextMenu>
      ) : (
        <></>
      )}
      {isEditOpen ? (
        <>
          <GroupEditModal group={data} onClose={() => setIsEditOpen(false)} />
        </>
      ) : (
        <></>
      )}
    </CardDiv>
  );
};
