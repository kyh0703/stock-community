import { Routes, Route } from 'react-router-dom';

import SignInPage from './sign-in';
import SignUpPage from './sign-up';

function AuthRoutes() {
  return (
    <Routes>
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default AuthRoutes;
