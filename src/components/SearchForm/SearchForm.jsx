import { useDispatch } from 'react-redux';
import { Label, SearchInput } from './SearchForm.styled';
import { changeUsersCurrPage, changeUsersSearchQuery } from 'redux/usersSlice';
import {
  changeGroupsCurrPage,
  changeGroupsSearchQuery,
} from 'redux/groupsSlice';

export const SearchForm = ({ isUsers }) => {
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
          placeholder="Search"
          onChange={handleSearchChange}
        />
      </Label>
    </form>
  );
};
