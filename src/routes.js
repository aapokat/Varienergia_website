// Import your components/pages
import Home from './pages/home/homePage';
import Oikeudellisettiedot from './pages/Oikeudellisettiedot/oikeudellisettiedotPage';
import EULA from './pages/EULA/EULAPage';
import Kayttoehdot from './pages/Kayttoehdot/Käyttöehdot';
import Tietosuojakaytanto from './pages/Tietosuojakaytanto/Tietosuojaseloste';
import NotFound from './pages/Notfound/404Page';
import Lomake from './pages/Lomake/LomakePage';
import ContactPage from './pages/Contact/ContactPage';

const routes = [
    {
        path: "/",
        element: <Home />,
        meta: {
            title: "Home - My Website",
            description: "Welcome to the home page of My Website."
        }
    },
    {
        path: "/contact",
        element: <ContactPage />,
        meta: {
            title: "Contact Us - My Website",
            description: "Get in touch with us for any queries or support."
        }
    },
    {
        path: "/kayttoehdot",
        element: <Kayttoehdot />,
        meta: {
            title: "Terms of Service - My Website",
            description: "Read the terms and conditions of using our service."
        }
    },
    {
        path: "/lomake",
        element: <Lomake />,
        meta: {
            title: "Form - My Website",
            description: "Fill in the form to get more information or assistance."
        }
    },
    {
        path: "/tietosuojaseloste",
        element: <Tietosuojakaytanto />,
        meta: {
            title: "Privacy Policy - My Website",
            description: "Check out how we protect your privacy and data."
        }
    },
    {
        path: "/oikeudellisettiedot",
        element: <Oikeudellisettiedot />,
        meta: {
            title: "Legal Information - My Website",
            description: "Access important legal information about our service."
        }
    },
    {
        path: "/eula",
        element: <EULA />,
        meta: {
            title: "EULA - My Website",
            description: "End-User Licensing Agreement for using our software."
        }
    },
    {
        path: "*",
        element: <NotFound />,
        meta: {
            title: "404 - Page Not Found",
            description: "The page you're looking for doesn't exist."
        }
    },
];

export default routes;
