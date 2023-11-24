"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const upcomingEvents_1 = __importDefault(require("../components/events/upcomingEvents"));
const getEventDetails_1 = __importDefault(require("../components/events/getEventDetails"));
const errorPage_1 = __importDefault(require("../components/errorPage"));
const albums_1 = __importDefault(require("../components/albums/albums"));
const blog_1 = __importDefault(require("../components/blog/blog"));
const getPostDetails_1 = __importDefault(require("../components/blog/getPostDetails"));
const aboutUs_1 = __importDefault(require("../components/aboutUs/aboutUs"));
const termsAndConditions_1 = __importDefault(require("../components/terms&Conditions/termsAndConditions"));
const signIn_1 = __importDefault(require("../components/auth/signIn"));
const router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: <upcomingEvents_1.default />,
        errorElement: <errorPage_1.default />
    },
    {
        path: "/events/:eventId",
        element: <getEventDetails_1.default />,
        errorElement: <errorPage_1.default />
    },
    {
        path: "/albums",
        element: <albums_1.default />,
        errorElement: <errorPage_1.default />
    },
    {
        path: "/blog",
        element: <blog_1.default />,
        errorElement: <errorPage_1.default />
    },
    {
        path: "/post/:postId",
        element: <getPostDetails_1.default />,
        errorElement: <errorPage_1.default />
    },
    {
        path: "/about-us",
        element: <aboutUs_1.default />,
        errorElement: <errorPage_1.default />
    },
    {
        path: "/terms-conditions",
        element: <termsAndConditions_1.default />,
        errorElement: <errorPage_1.default />
    },
    {
        path: "/myAccount",
        element: <signIn_1.default />,
        errorElement: <errorPage_1.default />
    }
]);
exports.default = router;
