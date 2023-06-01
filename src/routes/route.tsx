import AuthRoutes from '@/features/auth/routes';
import PostRoutes from '@/features/posts/routes';

const App = () => {};

export const Router = [
  {
    path: '/app',
    element: <AuthRoutes />,
    children: [
      { path: '/users', element: <AuthRoutes /> },
      { path: '/posts', element: <PostRoutes /> },
    ],
  },
];
