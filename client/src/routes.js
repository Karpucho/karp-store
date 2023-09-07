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
    title: 'Панель администратора',
  },
  {
    path: PAGE_PATHS.basket,
    Component: Basket,
    title: 'Корзина',
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
    title: 'Логин',
  },
  {
    path: PAGE_PATHS.registration,
    Component: Auth,
    title: 'Регистрация',
  },
  {
    path: `${PAGE_PATHS.device}/:id`,
    Component: DevicePage,
    title: 'Девайс',
  },
];
