import AuthTemplate from '@/features/auth/components/auth-template/auth-template.component';
import LoginForm from '@/features/auth/components/sign-in-form/sign-in-form.component';

function SignInPage() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}

export default SignInPage;
