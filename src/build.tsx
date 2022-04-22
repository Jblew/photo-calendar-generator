import 'reflect-metadata';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import * as fs from "fs";
import * as sass from "sass";
import { Calendar } from './components';

const projectDir = `${__dirname}/..`
const srcDir = `${projectDir}/src`
const distDir = `${projectDir}/dist`

const contentHtml = ReactDOMServer.renderToStaticMarkup(
    <React.StrictMode>
        <Calendar startDate={new Date("2022-05-01T00:00:00Z")} noMonths={24} />
    </React.StrictMode>
);

const documentHtml = `
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8">
    <title>Calendar</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    ${contentHtml}
</body>
</html>
`;

fs.writeFileSync(`${distDir}/index.html`, documentHtml)
fs.writeFileSync(`${distDir}/style.css`, sass.compile(`${srcDir}/style/index.scss`).css)
