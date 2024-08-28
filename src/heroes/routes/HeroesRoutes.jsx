import { Navigate, Route, Routes } from "react-router-dom"

import { Navbar } from "../../ui"
import { DcPages, MarvelPage, HeroPage, Search } from '../../heroes'

export const HeroesRoutes = () => {
    return (
        <div>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="dc" element={<DcPages />} />
                    <Route path="marvel" element={<MarvelPage />} />

                    <Route path="search" element={<Search />} />
                    <Route path="hero" element={<HeroPage />} />


                    <Route path="/" element={<Navigate to='/marvel' />} />
                </Routes >
            </div>
        
        </div>
    )
}
