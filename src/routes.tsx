import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import InsertWarning from '~/pages/InsertWarning';
import SignUp from '~/pages/SignUp';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/warning/insert" element={<InsertWarning />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
