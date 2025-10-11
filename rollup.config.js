import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import { execSync } from 'child_process';
import chokidar from 'chokidar';
import fs from 'fs';

// 确保HTML被复制
function copyHTML() {
  try {
    // 确保dist目录存在
    if (!fs.existsSync('dist')) {
      fs.mkdirSync('dist', { recursive: true });
    }
    execSync('cp src/index.html dist/');
    console.log('HTML copied successfully');
  } catch (error) {
    console.error('Error copying HTML:', error);
  }
}

// 启动文件监听
if (process.env.ROLLUP_WATCH) {
  const watcher = chokidar.watch('src/index.html');
  watcher.on('change', () => {
    copyHTML();
  });
}

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    {
      name: 'html-copier',
      buildStart() {
        copyHTML();
      }
    },
    resolve(),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    terser(),
    postcss({
      extract: true,
      minimize: true,
      output: "dist/bundle.css",
      use: ["less"], // 明确指定使用less处理器
    }),
    copy({
      targets: [
        { src: "src/index.html", dest: "dist" },
        { src: "static/**/*", dest: "dist/static" },
      ],
    }),
  ],
};
