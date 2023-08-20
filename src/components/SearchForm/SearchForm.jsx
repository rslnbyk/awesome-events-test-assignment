import { useDispatch } from 'react-redux';
import { Label, SearchInput } from './SearchForm.styled';
import { changeUsersCurrPage, changeUsersSearchQuery } from 'redux/usersSlice';
import {
  changeGroupsCurrPage,
  changeGroupsSearchQuery,
} from 'redux/groupsSlice';
import { useTranslation } from 'react-i18next';

export const SearchForm = ({ isUsers }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSearchChange = e => {
    if (isUsers) {
      dispatch(changeUsersCurrPage(1));
      dispatch(changeUsersSearchQuery(e.target.value));
    } else {
      dispatch(changeGroupsCurrPage(1));
      dispatch(changeGroupsSearchQuery(e.target.value));
    }
  };

  return (
    <form name="search">
      <Label>
        <SearchInput
          type="text"
          placeholder={t('Search')}
          onChange={handleSearchChange}
        />
      </Label>
    </form>
  );
};
