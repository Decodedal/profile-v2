// src/stores/skillsStore.js
import { atom } from 'nanostores';

export const skillsStore = atom({
  astro: { img: "/skills/astro.png", inSky: true },
  react: { img: "/skills/react.png", inSky: true },
  htmlCss: { img: "/skills/html-css.png", inSky: true },
  typeScript: { img: "/skills/typescript.png", inSky: true },
  node: { img: "/skills/node.png", inSky: true },
  odoo: { img: "/skills/odoo.png", inSky: true },
  python: { img: "/skills/python.png", inSky: true },
  sass: { img: "/skills/sass.png", inSky: true },
  sql: { img: "/skills/sql.png", inSky: true },
});
