import { Groups } from 'pages/Groups/Groups';
import { Teammates } from 'pages/Teammates/Teammates';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/groups" element={<Groups />} />
      <Route path="/teammates" element={<Teammates />} />
    </Routes>
  );
};
