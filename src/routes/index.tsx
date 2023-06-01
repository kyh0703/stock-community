import { useRoutes } from 'react-router-dom';

const AppRouter = () => {
  const element = useRoutes([]);
  return <>{element}</>;
};

export default AppRouter;
