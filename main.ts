import { datetime } from "https://deno.land/x/ptera@v1.0.0-beta/mod.ts";
import * as PIXI from "https://pixijs.download/v6.1.2/pixi.mjs";

console.log(datetime("2021-06-30T21:15:30.200"));
console.log("hello world");

// let app = new PIXI.Application({ width: 640, height: 360 });
// document.body.appendChild(app.view);

const createApp = () => {
  const app = new PIXI.Application({
    width: 800,
    height: 600,
  });
  document.body.appendChild(app.view);
  return app;
};

const app = createApp();
