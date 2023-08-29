import { AdminPanel } from './pages/AdminPanel';
import { Auth } from './pages/Auth';
import { Basket } from './pages/Basket';
import { DevicePage } from './pages/DevicePage';
import { Shop } from './pages/Shop';
import { PAGE_PATHS } from './utils/constants';

export const authRoutes = [
  {
    path: PAGE_PATHS.admin,
    Component: AdminPanel,
  },
  {
    path: PAGE_PATHS.basket,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: PAGE_PATHS.shop,
    Component: Shop,
  },
  {
    path: PAGE_PATHS.login,
    Component: Auth,
  },
  {
    path: PAGE_PATHS.registration,
    Component: Auth,
  },
  {
    path: `${PAGE_PATHS.device}/:id`,
    Component: DevicePage,
  },
];
