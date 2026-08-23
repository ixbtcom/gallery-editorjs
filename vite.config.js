import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import * as pkg from "./package.json";
import dts from 'vite-plugin-dts';

const NODE_ENV = process.argv.mode || "development";
const VERSION = pkg.version;

export default {
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      name: "GalleryTool",
      fileName: "gallery",
    }
  },
  define: {
    NODE_ENV: JSON.stringify(NODE_ENV),
    VERSION: JSON.stringify(VERSION),
  },
  plugins: [
    cssInjectedByJsPlugin(),
    dts({
      tsconfigPath: './tsconfig.json',
      // ⛔ Часть модулей живёт в packages/_shared (общие с блоком media), из-за
      // чего плагин иначе поднимает общий корень и кладёт объявления в
      // dist/gallery-editorjs/, а package.json ждёт их в dist/index.d.ts.
      entryRoot: 'src',
    })
  ],
};
