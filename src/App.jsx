import { Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Toaster } from 'react-hot-toast';

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const RecommendPage = lazy(() => import('./pages/RecommendPage/RecommendPage'));
const TrainingPage = lazy(() => import('./pages/TrainingPage/TrainingPage'));
const DictionaryPage = lazy(() => import('./pages/DictionaryPage/DictionaryPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MainLayout = lazy(() => import('./components/MainLayout/MainLayout'));
const Loader = lazy(() => import('./components/Loader/Loader'));

function App() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route index element={<PrivateRoute component={<DictionaryPage />} />} />
                        <Route path="recommend" element={<PrivateRoute component={<RecommendPage />} />} />
                        <Route path="training" element={<PrivateRoute component={<TrainingPage />} />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
                <Toaster />
            </Suspense>
        </>
    );
}

export default App;
