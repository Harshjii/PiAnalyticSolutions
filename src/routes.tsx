import { RouteObject } from 'react-router-dom';
import HomePage from './pages/index';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import NotFoundPage from './pages/_404';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export type Path = '/' | '/contact' | '/about';

export type Params = Record<string, string | undefined>;
