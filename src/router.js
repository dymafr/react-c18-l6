import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Admin = lazy(() => import('./pages/Admin/Admin'));
const AdminRecipes = lazy(() =>
  import('./pages/Admin/pages/AdminRecipes/AdminRecipes')
);
const AdminUsers = lazy(() =>
  import('./pages/Admin/pages/AdminUsers/AdminUsers')
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'admin',
        element: <Admin />,
        children: [
          {
            path: 'recipes',
            element: <AdminRecipes />,
            children: [
              {
                index: true,
                loader: async () => redirect('/admin/recipes/list'),
              },
              {
                path: 'list',
                element: <AdminRecipesList />,
              },
              {
                path: 'new',
                element: <AdminRecipesForm />,
              },
              {
                path: 'edit',
                element: <AdminRecipesForm />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
