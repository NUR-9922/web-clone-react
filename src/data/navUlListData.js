// pages list data 
import React from "react";
const headerUlListData = [
     {
          listName: "about",
          path: "about"
     },
     {
          listName: "FAQ",
          path: "FAQ"
     },
     {
          listName: "blog",
          path: false,
          nestedList: true,
          nestedList: [
               {
                    listName: "latestblog",
                    path: 'blog/latestblog'
               },
               {
                    listName: "latestblog-2",
                    path: "blog/latestblog-2"
               }
          ]
     },
     {
          listName: "cart",
          path: "cart"
     },
     {
          listName: "wishlist",
          path: "wishlist"
     },
     {
          listName: "profile",
          path: false,
          nestedList: true,
          nestedList: [
               {
                    listName: "Signup",
                    path: 'signup'
               },
               {
                    listName: "Login",
                    path: "login"
               },
               {
                    listName: "My account",
                    path: "my-account"
               }

          ]
     },
     {
          listName: "terms and conditions",
          path: "terms-and-conditions"
     },
     {
          listName: "privacy policy",
          path: "privacy-policy"
     }
];

export default headerUlListData;