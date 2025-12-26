import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Spin } from 'antd';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const DataCollection = React.lazy(() => import('./components/DataCollection'));
const HistoryAlerts = React.lazy(() => import('./components/HistoryAlerts'));
const MultimodalInteraction = React.lazy(() => import('./components/MultimodalInteraction'));
const Layout = React.lazy(() => import('./components/Layout'));

const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000'
  }}>
    <Spin size="large" />
  </div>
);

const DashboardLayout = () => (
  <ProtectedRoute>
    <Suspense fallback={<LoadingFallback />}>
      <Layout />
    </Suspense>
  </ProtectedRoute>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
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
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: 'data-collection',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DataCollection />
          </Suspense>
        ),
      },
      {
        path: 'history-alerts',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HistoryAlerts />
          </Suspense>
        ),
      },
      {
        path: 'multimodal-interaction',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <MultimodalInteraction />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;