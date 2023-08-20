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
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from 'trans/use-localstorage';
import i18n from 'i18n';

export const Teammates = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en');

  const handleLanguageChange = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      setLanguage('ru');
    } else if (language === 'ru') {
      i18n.changeLanguage('en');
      setLanguage('en');
    }
  };

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
      <button type="button" onClick={handleLanguageChange}>
        {t('change to')} {language === 'ru' ? t('english') : t('russian')}
      </button>
      <MainHeader>{t('Teammates')}</MainHeader>
      <SectionDescription>
        {t('Teammates section description')}
      </SectionDescription>
      <SearchContainer>
        <SearchForm isUsers={true} />
        <AddButton type="button">{t('Add Teammate')}</AddButton>
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
