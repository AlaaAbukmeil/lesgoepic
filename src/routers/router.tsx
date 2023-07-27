import {
  createBrowserRouter,
} from "react-router-dom";
import GetEvents from "../components/events/upcomingEvents";
import GetEventDetails from "../components/events/getEventDetails";
import ErrorPage from "../components/errorPage";
import GetAlbums from "../components/albums/albums";
import GetBlog from "../components/blog/blog";
import GetPostDetails from "../components/blog/getPostDetails";
import GetAboutUs from "../components/aboutUs/aboutUs";
import GetTermsAndConditions from "../components/terms&Conditions/termsAndConditions";
import SignUpLogIn from "../components/auth/signIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GetEvents />,
    errorElement: <ErrorPage />
  },
  {
    path: "/events/:eventId",
    element: <GetEventDetails />,
    errorElement: <ErrorPage />
  },
  {
    path: "/albums",
    element: <GetAlbums />,
    errorElement: <ErrorPage />
  },
  {
    path: "/blog",
    element: <GetBlog />,
    errorElement: <ErrorPage />
  },
  {
    path: "/post/:postId",
    element: <GetPostDetails />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about-us",
    element: <GetAboutUs />,
    errorElement: <ErrorPage />
  },
  {
    path: "/terms-conditions",
    element: <GetTermsAndConditions />,
    errorElement : <ErrorPage />
  },
  {
    path: "/myAccount",
    element: <SignUpLogIn />,
    errorElement : <ErrorPage />
  }
]);

export default router