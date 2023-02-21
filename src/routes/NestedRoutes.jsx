import {createBrowserRouter} from "react-router-dom";
import CountryID from '../components/CountryID'
import ErrorPage             from '../components/ErrorPage'
import Root                  from './Root'
import App                   from '../App'
import Search                from '../components/Search'

export const router = createBrowserRouter([

    {
      path:"/restcountries",
      element: <Root/> ,
      errorElement: <ErrorPage/>,

      children: [
        {
          errorElement: <ErrorPage/>,
          children: [
            {
              index: true,
              element: <App/>,
              
            },
            {
              path: "/country/:id",
              element: <CountryID/>,
              
            },
          ],

        },
        
      ],
    },

  ])