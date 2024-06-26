import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 3,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 4,
    title: "Products",
    path: "/products",
    newTab: false,
  },
  {
    id: 9,
    title: "Support Pages",
    newTab: false,
    submenu: [
      {
        id: 91,
        title: "Support",
        path: "/support",
        newTab: false,
      },
      {
        id: 92,
        title: "Privacy Policy",
        path: "/privacy",
        newTab: false,
      },
      {
        id: 93,
        title: "Terms of Service",
        path: "/terms",
        newTab: false,
      },
      {
        id: 94,
        title: "Refund Policy",
        path: "/refund",
        newTab: false,
      },
      // {
      //   id: 42,
      //   title: "Contact Page",
      //   path: "/contact",
      //   newTab: false,
      // },
      // {
      //   id: 43,
      //   title: "Blog Grid Page",
      //   path: "/blog",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 10,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
