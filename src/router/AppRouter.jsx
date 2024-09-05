import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { HeroesRoutes } from '../heroes'
import { PublicRoute } from "./PublicRoute"
import { PrivateRoute } from "./PrivateRoute"



const AppRouter = () => {
    return (
        <>        
            <Routes>

                {/* Protected routes */}
                <Route path="login/*" element={
                    <PublicRoute>
                        {/* <LoginPage /> */}
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                    } 
                />
                
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                    }
                />

                {/* No Protected routes */}
                {/* <Route path='login' element={<LoginPage />} /> */}
                {/* <Route path='/*' element={<HeroesRoutes />} /> */}

                
            </Routes>
        </>
    )
}

export default AppRouter
