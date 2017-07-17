# Rakuten React kit

Docs: https://github.com/rakuten-frontend/rakuten-react-kit/wiki

## Structure
```
/
├── build/                   
│   ├──   index.html
│   └──   bundle.js          : Application bundle
│
├── node_modules/            : Node dependencies
│
├── src/
│   ├── components/          : Application Components
│   ├── domain/              : Business Logic
│   │    ├── Middleware/     : Actors who dispatch the actions
│   │    └── Store/        
│   │         ├── actions/   
│   │         ├── reducers/   
│   │         └── state/  
│   │
│   ├── style/               : Global Styles
│   └── main.jsx             : Application Entry Point
│
│
├── .gitignore               
├── .flowconfig              
├── .css.js.flow             
├── package.json             
├── readme.md                
└── webpack.config.js        : Webpack config file
```
## Development

Run server with HMR (Hot Module Replacement) at [localhost:9090](http://localhost:9090)

```
npm start
```
See more about Hot Module Replacement [here](https://webpack.github.io/docs/hot-module-replacement.html)

## Production

Create minified bundle for deployment in the `build` directory

```
npm run build
```

## Disclaimer
This is an experimental project. Use it in production with caution.

## License

Copyright (c) 2016 Rakuten, Inc. Licensed under the MIT License.
