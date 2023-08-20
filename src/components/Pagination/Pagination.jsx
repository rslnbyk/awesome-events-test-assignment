import { useDispatch, useSelector } from 'react-redux';
import {
  FormDiv,
  InfoP,
  PageInput,
  PagesP,
  PaginationDiv,
} from './Pagination.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useEffect } from 'react';
import {
  selectGroupsCurrPage,
  selectGroupsPerPage,
  selectUsersCurrPage,
  selectUsersPerPage,
} from 'redux/selectors';
import { changeUsersCurrPage } from 'redux/usersSlice';
import { changeGroupsCurrPage } from 'redux/groupsSlice';
import { useTranslation } from 'react-i18next';

export const Pagination = ({ isUsers }) => {
  const { t } = useTranslation();

  const groupsPerPage = useSelector(selectGroupsPerPage);
  const groupsCurrPage = useSelector(selectGroupsCurrPage);
  const usersPerPage = useSelector(selectUsersPerPage);
  const usersCurrPage = useSelector(selectUsersCurrPage);
  const dispatch = useDispatch();

  const handlePageChange = e => {
    if (
      e.target.value &&
      (e.target.value < 1 || e.target.value > 4) &&
      isUsers
    ) {
      Report.failure('Error', 'Please enter valid number', 'Okay');
    } else if (
      e.target.value &&
      (e.target.value < 1 || e.target.value > 2) &&
      !isUsers
    ) {
      Report.failure('Error', 'Please enter valid number', 'Okay');
    } else if (e.target.value && isUsers) {
      dispatch(changeUsersCurrPage(e.target.value));
    } else if (e.target.value && !isUsers) {
      dispatch(changeGroupsCurrPage(e.target.value));
    }
  };

  useEffect(() => {
    if (isUsers) {
      document.getElementById('pagination-form').value = usersCurrPage;
    } else {
      document.getElementById('pagination-form').value = groupsCurrPage;
    }
  }, [usersCurrPage, groupsCurrPage, isUsers]);

  return (
    <PaginationDiv>
      {isUsers ? (
        <PagesP>{`${(usersCurrPage - 1) * usersPerPage + 1}-${
          usersPerPage * usersCurrPage
        } ${t('of')} 32 ${t('users')}`}</PagesP>
      ) : (
        <PagesP>{`${(groupsCurrPage - 1) * groupsPerPage + 1}-${
          groupsPerPage * groupsCurrPage
        } ${t('of')} 14 ${t('users')}`}</PagesP>
      )}
      <FormDiv>
        <InfoP>{t('You are on page')}</InfoP>
        <form>
          <PageInput
            id="pagination-form"
            type="number"
            defaultValue={1}
            onChange={handlePageChange}
          />
        </form>
      </FormDiv>
    </PaginationDiv>
  );
};
