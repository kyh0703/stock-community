import AuthTemplate from '../../features/auth/components/auth-template/auth-template.component';
import SignUpForm from '../../features/auth/components/sign-up-form/sign-up-form.component';

const SignUpPage = () => {
  return (
    <AuthTemplate>
      <SignUpForm />
    </AuthTemplate>
  );
};

export default SignUpPage;
