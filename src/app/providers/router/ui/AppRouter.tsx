import React from 'react';
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { Suspense } from "react";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <div className='pageWrapper'>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={element}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Suspense>
    );
};
