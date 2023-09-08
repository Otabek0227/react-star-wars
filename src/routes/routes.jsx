import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

import RootLayout from "layouts/RootLayout"

import HomePage from "containers/HomePage"
import PeoplePage from "containers/PeoplePage"
import FavouritesPage from "containers/FavouritesPage"
import PersonPage from "containers/PersonPage"
import NotFoundPage from "containers/NotFoundPage"
import SearchPage from "containers/SearchPage"
import ErrorMessage from "components/ErrorMessage"

const routesConfig = [
    {
        path: 'people',
        element: <PeoplePage />,
        exact: false
    },
    {
        path: 'favourites',
        element: <FavouritesPage />,
        exact: false
    },
    {
        path: 'people/:id',
        element: <PersonPage />
    },
    {
        path: 'search',
        element: <SearchPage />
    },
    {
        path: 'not-found',
        element: <NotFoundPage />
    },
    {
        path: 'fail',
        element: <ErrorMessage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
]

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index exact element={<HomePage />} />
            {routesConfig.map((route, index) => (
                <Route path={route.path} exact={false} element={route.element} key={index} />
            ))}
        </Route>
    )
)



export default routes