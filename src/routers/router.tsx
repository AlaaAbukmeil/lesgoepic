import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../components/dashboard/dashboard";
import GetEventDetails from "../components/events/getEventDetails";
import ErrorPage from "../components/errorPage";
import GetAlbums from "../components/albums/albums";
import GetBlog from "../components/blog/blog";
import GetPostDetails from "../components/blog/getPostDetails";
import GetAboutUs from "../components/aboutUs/aboutUs";
import GetTermsAndConditions from "../components/terms&Conditions/termsAndConditions";
import SignUpLogIn from "../components/auth/auth";
import GetEvents from "../components/events/upcomingEvents";
import UpdateUser from "../components/auth/updateUser";
import FeedbackForm from "../components/common/feedbackForm";
import DeleteUser from "../components/auth/deleteUser";
import MyEvents from "../components/customer/myEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />
  },
  {
    path: "/upcoming-events",
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
    path: "/auth",
    element: <SignUpLogIn />,
    errorElement : <ErrorPage />
  }
  ,
  {
    path: "/settings",
    element: <UpdateUser />,
    errorElement : <ErrorPage />
  },
  {
    path: "/feedback-form",
    element: <FeedbackForm />,
    errorElement : <ErrorPage />
  },
  {
    path: "/delete-user",
    element: <DeleteUser />,
    errorElement : <ErrorPage />
  },
  {
    path: "/my-events",
    element: <MyEvents />,
    errorElement : <ErrorPage />
  }
]);

export default router