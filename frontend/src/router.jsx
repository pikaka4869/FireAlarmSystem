import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import DataCollection from './components/DataCollection';
import HistoryAlerts from './components/HistoryAlerts';
import MultimodalInteraction from './components/MultimodalInteraction';
import Layout from './components/Layout';

// 创建路由
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'data-collection',
        element: <DataCollection />,
      },
      {
        path: 'history-alerts',
        element: <HistoryAlerts />,
      },
      {
        path: 'multimodal-interaction',
        element: <MultimodalInteraction />,
      },
    ],
  },
]);

export default router;