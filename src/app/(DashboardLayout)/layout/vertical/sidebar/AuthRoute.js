import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const AuthRoute = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if (!isAuthenticated) {
    router.replace('/auth/auth1/login');
    return null;
  }

  return children;
};

export default AuthRoute;