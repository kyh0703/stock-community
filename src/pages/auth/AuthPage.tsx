import { Routes, Route } from 'react-router-dom';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

function AuthPage() {
  return (
    <Routes>
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default AuthPage;
