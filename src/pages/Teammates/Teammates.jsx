import { SearchForm } from 'components/SearchForm/SearchForm';
import {
  AddButton,
  Container,
  MainHeader,
  SearchContainer,
  SectionDescription,
  UsersItem,
  UsersList,
} from './Teammates.styled';
import { useDispatch, useSelector } from 'react-redux';
import { UserCard } from 'components/UserCard/UserCard';
import { fetchUsers } from 'redux/usersOperations';
import { useEffect } from 'react';
import { Pagination } from 'components/Pagination/Pagination';
import {
  selectUsers,
  selectUsersCurrPage,
  selectUsersIsLoading,
  selectUsersPerPage,
  selectUsersSearchQuery,
} from 'redux/selectors';

export const Teammates = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const perPage = useSelector(selectUsersPerPage);
  const currPage = useSelector(selectUsersCurrPage);
  const firstName = useSelector(selectUsersSearchQuery);
  const isLoading = useSelector(selectUsersIsLoading);

  useEffect(() => {
    dispatch(fetchUsers({ perPage, currPage, firstName }));
  }, [dispatch, perPage, currPage, firstName]);

  return (
    <Container>
      <MainHeader>Teammates</MainHeader>
      <SectionDescription>
        &emsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        sed est perspiciatis fuga tempore. Eligendi nulla harum et blanditiis a?
        Magni dicta, blanditiis voluptate facere hic est iusto ipsum!
        Perferendis cupiditate, earum labore veritatis nesciunt nostrum
        repellendus impedit ad unde?
      </SectionDescription>
      <SearchContainer>
        <SearchForm isUsers={true} />
        <AddButton type="button">Add Teammate</AddButton>
      </SearchContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <UsersList>
          {users.map(user => (
            <UsersItem key={user.id}>
              <UserCard data={user} />
            </UsersItem>
          ))}
        </UsersList>
      )}
      <Pagination isUsers={true} />
    </Container>
  );
};
