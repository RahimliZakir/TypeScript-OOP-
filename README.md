TypeScript essentials by Zakir Rahimli.

Creating TypeScript configuration file.

Open Terminal and write tsc --init.

Using webpack Loader.

Open Terminal and write npm install --save-dev typescript ts-loader.

Editing tsconfig.json with webpack.

{ "compilerOptions": { "rootDir":"./TS/", "outDir": "./JS/", "noImplicitAny": true, "module": "es6", "target": "es5", "jsx": "react", "allowJs": true } }

BONUS - Creating webpack.config.json.

const path = require('path');

module.exports = { entry: './src/index.ts', module: { rules: [ { test: /.tsx?$/, use: 'ts-loader', exclude: /node_modules/, }, ], }, resolve: { extensions: [ '.tsx', '.ts', '.js' ], }, output: { filename: 'bundle.js', path: path.resolve(__dirname, 'dist'), }, };