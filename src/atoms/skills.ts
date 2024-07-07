// src/stores/skillsStore.js
import { atom } from 'nanostores';
import type { Skills } from '../types';

export const skillsStore = atom<Skills>({
  astro: {
    img: "/skills/astro.png",
    inSky: true,
    description: "Astro is my JavaScript web development metaframework of choice! Its specialty is sending minimal JS to the browser, which optimizes load times for the client. While maintaining an incredible amount of flexibility for developers, letting you combine vanilla HTML and CSS with components from any major JS frameworks such as React, Svelt View, and more. This is perfect for me since I prefer to go with the fundamentals whenever possible and save the React code for when it will make my life easier."
  },
  react: {
     img: "/skills/react.png",
     inSky: true,
     description:"React: This is my favorite JS tool kit to use. It makes generating pages based on data a quick and efficient process and is really useful for dealing with pages or applications that involve a lot of client interaction. I find it really shines when developing e-commerce platforms and blogs."
    },
  htmlCss: { 
    img: "/skills/html-css.png",
    inSky: true,
    description:"HTML and CSS are the foundations of web development; proper semantic HTML is more important to ensure accessible sites, and a comprehensive knowledge of CSS lets me design responsive websites that are limited only by my imagination."
   },
  typeScript: { 
    img: "/skills/typescript.png", 
    inSky: true,
    description:"A Superset of JavaScript Typescript has grown in popularity since its release because of its ability to provide type safety and auto-complete when developing applications. This is an absolute must when developing data-intensive applications because it allows us to describe the shape of the data, which typescript then uses to help prevent errors in our code! I try to use it for all but the simplest of projects."
  },
  node: { 
    img: "/skills/node.png",
    inSky: true,
    description:" Node is a powerful JavaScript runtime that allows us to run JavaScript server-side. I like to use it with the express frame work when doing back-end development. I use it to develop APIs to interface with requests from front-end sites, query data from databases, then organize and send the data to be used on the front-end."
   },
  odoo: { 
    img: "/skills/odoo.png",
    inSky: true,
    description:"Odoo is a full-stack ERP system that is meant to handle all of a business's needs, from marketing to web development to accounting and more, while being very friendly to developers. Over the last year, I have developed several custom modules to work with the Odoo system to expand its capabilities to fit a specific use case"
   },
  python: { 
    img: "/skills/python.png", 
    inSky: true,
    description:"Python is one of the most popular coding languages there is. I sometimes use Python to develop APIs, but I mostly use it as an educational tool when I am working as a coding instructor since it has very simple syntax."
  },
  sass: {
     img: "/skills/sass.png",
      inSky: true,
      description:"Sassy style sheets are a popular offshoot of CSS, which is basically just CSS with a compiler. In other words, it allows me to write more complicated CSS and take advantage of expanded syntax that is later turned into plain old CSS by a compiler. "
     },
  sql: {
    img: "/skills/sql.png", 
    inSky: true,
    description:"SQL is the standard query language, which is a database framework that allows for the formation of complex relationships to store data with a minimal footprint and query it efficiently. I prefer using SQL over a document-based database like MongoDB and believe that at the heart of any data-intensive application is a well-designed database. "
  },
});
