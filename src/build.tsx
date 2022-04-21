import 'reflect-metadata';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import * as fs from "fs";
import * as sass from "sass";

const projectDir = `${__dirname}/..`
const srcDir = `${projectDir}/src`
const distDir = `${projectDir}/dist`

const contentHtml = ReactDOMServer.renderToStaticMarkup(
  <React.StrictMode>
    <div>
      <h1>React</h1>
    </div>
  </React.StrictMode>
);

const documentHtml = `
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8">
    <title>Calendar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    ${contentHtml}
</body>
</html>
`;

fs.writeFileSync(`${distDir}/index.html`, documentHtml)
fs.writeFileSync(`${distDir}/style.css`, sass.compile(`${srcDir}/style.scss`).css)
