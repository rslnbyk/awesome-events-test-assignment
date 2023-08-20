import { SearchForm } from 'components/SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Pagination } from 'components/Pagination/Pagination';
import {
  AddButton,
  Container,
  GroupsItem,
  GroupsList,
  MainHeader,
  SearchContainer,
  SectionDescription,
} from './Groups.styled';
import {
  selectGroups,
  selectGroupsCurrPage,
  selectGroupsIsLoading,
  selectGroupsPerPage,
  selectGroupsSearchQuery,
} from 'redux/selectors';
import { fetchGroups } from 'redux/groupsOperations';
import { GroupCreateModal } from 'components/GroupCreateModal/GroupCreateModal';
import { GroupCard } from 'components/GroupCard/GroupCard';

export const Groups = () => {
  const dispatch = useDispatch();

  const groups = useSelector(selectGroups);
  const perPage = useSelector(selectGroupsPerPage);
  const currPage = useSelector(selectGroupsCurrPage);
  const name = useSelector(selectGroupsSearchQuery);
  const isGroupsLoading = useSelector(selectGroupsIsLoading);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchGroups({ perPage, currPage, name }));
  }, [dispatch, perPage, currPage, name]);

  return (
    <Container>
      <MainHeader>Groups</MainHeader>
      <SectionDescription>
        &emsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        sed est perspiciatis fuga tempore. Eligendi nulla harum et blanditiis a?
        Magni dicta, blanditiis voluptate facere hic est iusto ipsum!
        Perferendis cupiditate, earum labore veritatis nesciunt nostrum
        repellendus impedit ad unde?
      </SectionDescription>
      <SearchContainer>
        <SearchForm isUsers={false} />
        <AddButton type="button" onClick={() => setIsModalOpen(true)}>
          Add Group
          {isModalOpen ? (
            <>
              <GroupCreateModal onClose={() => setIsModalOpen(false)} />
            </>
          ) : (
            <></>
          )}
        </AddButton>
      </SearchContainer>
      {isGroupsLoading ? (
        <p>Loading...</p>
      ) : (
        <GroupsList>
          {groups.map(gr => (
            <GroupsItem key={gr.id}>
              <GroupCard data={gr} />
            </GroupsItem>
          ))}
        </GroupsList>
      )}
      <Pagination isUsers={false} />
    </Container>
  );
};
