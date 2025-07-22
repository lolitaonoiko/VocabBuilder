import { Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const RecommendPage = lazy(() => import('./pages/RecommendPage/RecommendPage'));
const TrainingPage = lazy(() => import('./pages/TrainingPage/TrainingPage'));
const DictionaryPage = lazy(() => import('./pages/DictionaryPage/DictionaryPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MainLayout = lazy(() => import('./components/MainLayout/MainLayout'));

function App() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    {/* Приватні маршрути з MainLayout як обгорткою */}
                    <Route path="/" element={<PrivateRoute component={<MainLayout />} />}>
                        <Route index element={<RecommendPage />} /> {/* За замовчуванням "/" */}
                        <Route path="dictionary" element={<DictionaryPage />} />
                        <Route path="training" element={<TrainingPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
