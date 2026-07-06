import { RouteObject } from 'react-router-dom';
import HomePage from './pages/index';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
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
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export type Path = '/' | '/contact' | '/about' | '/services';

export type Params = Record<string, string | undefined>;
