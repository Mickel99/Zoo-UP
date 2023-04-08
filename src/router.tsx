import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Home } from './sections/home_section/HomeSection'
import { Animals } from './components/animal_list/AnimalList'
import { AnimalDetails } from './components/animal_info/AnimalInfo'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      
      {
        path: '/animal/:id',
        element: <AnimalDetails />,
      },
      {
        path: '/animals',
        element: <Animals />,
      },
    ],
  },
])
