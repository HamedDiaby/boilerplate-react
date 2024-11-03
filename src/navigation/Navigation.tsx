import React from 'react';
import { NavigationPathsEnum } from "@utilities/enums";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home
} from '@pages';
  
export const Navigations: React.FC = () => {
  
  const router = createBrowserRouter([
    {
      path: NavigationPathsEnum.HOME,
      element: <Home />,
    },
  ]);
  
  return (
    <RouterProvider 
      data-testid="navigations"
      router={router} 
    />
  );
};