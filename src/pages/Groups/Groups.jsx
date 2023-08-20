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
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from 'trans/use-localstorage';
import i18n from 'i18n';

export const Groups = () => {
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
      <button type="button" onClick={handleLanguageChange}>
        {t('change to')} {language === 'ru' ? t('english') : t('russian')}
      </button>
      <MainHeader>{t('Groups')}</MainHeader>
      <SectionDescription>{t('Groups section description')}</SectionDescription>
      <SearchContainer>
        <SearchForm isUsers={false} />
        <AddButton type="button" onClick={() => setIsModalOpen(true)}>
          {t('Add Group')}
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
