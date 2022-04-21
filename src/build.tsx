import 'reflect-metadata';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

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
`
console.log(documentHtml)