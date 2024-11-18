import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ReviewsPage from '../pages/reviews/ReviewsPage';
import AgriculturalMachineryPartsPage from '../pages/agricultural-machinery-parts/AgriculturalMachineryPartsPage';
import CustomOrderPage from '../pages/custom-order/CustomOrderPage';
import DrawingDocumentationPage from '../pages/drawing-documentation/DrawingDocumentationPage';
import EquipmentPage from '../pages/equipment/EquipmentPage';
import ForgingPressProductionPage from '../pages/forging-press-production/ForgingPressProductionPage';
import HeatTreatmentPage from '../pages/heat-treatment/HeatTreatmentPage';
import MechanicalProcessingPage from '../pages/mechanical-processing/MechanicalProcessingPage';
import MillingWorkPage from '../pages/milling-work/MillingWorkPage';
import PlasmaCuttingPage from '../pages/plasma-cutting/PlasmaCuttingPage';
import ProcurementProductionPage from '../pages/procurement-production/ProcurementProductionPage';
import RailwaySparePartsPage from '../pages/railway-spare-parts/RailwaySparePartsPage';
import SpecialistsPage from '../pages/specialists/SpecialistsPage';
import TurningWorksPage from '../pages/turning-works/TurningWorksPage';
import NotFoundPage from '../pages/not-found/NotFoundPage';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/reviews',
    element: <ReviewsPage />,
  },
  {
    path: '/agricultural-machinery-parts',
    element: <AgriculturalMachineryPartsPage />,
  },
  {
    path: '/custom-order',
    element: <CustomOrderPage />,
  },
  {
    path: '/drawing-documentation',
    element: <DrawingDocumentationPage />,
  },
  {
    path: '/equipment',
    element: <EquipmentPage />,
  },
  {
    path: '/forging-press-production',
    element: <ForgingPressProductionPage />,
  },
  {
    path: '/heat-treatment',
    element: <HeatTreatmentPage />,
  },
  {
    path: '/mechanical-processing',
    element: <MechanicalProcessingPage />,
  },
  {
    path: '/milling-work',
    element: <MillingWorkPage />,
  },
  {
    path: '/plasma-cutting',
    element: <PlasmaCuttingPage />,
  },
  {
    path: '/procurement-production',
    element: <ProcurementProductionPage />,
  },
  {
    path: '/railway-spare-parts',
    element: <RailwaySparePartsPage />,
  },
  {
    path: '/specialists',
    element: <SpecialistsPage />,
  },
  {
    path: '/turning-works',
    element: <TurningWorksPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRoutes;
