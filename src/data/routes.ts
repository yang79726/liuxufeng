export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: "刘旭峰 ",
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Writing',
    path: '/writing',
  },

  {
    label: 'Contact',
    path: '/contact',
  },
  {
    label: 'program',
    path: '/projects',
  },
];

export default routes;
