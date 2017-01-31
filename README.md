# App 500x

 This is my app for downloading and working with photos from the popular 500x website.
 The job is finished, and it was fun to build an interactive app. I have done all the tasks, except for the additional ones, due to two reasons:

  * As I have never used Typescript in React before, I had some problems with its integration in the structure of my app. Especially, it concerns the problem with the **...spread** operator and import of the modules that made my work with Redux unbearable. So, I used for that ES6 and ES7. Tomorrow I will look at it again and try to resolve in the best way possible.

  * Because of the above-mentioned uncertainties with Typescript, I did not write tests, but I will do so when my structure will be clean. Also, I would also consider using Immutable structure for Redux app for better user experience if we think about scaling the app in the future. Therefore, tests will differ and give different results, considering the immutable nature of the data we work with. So, when I work on the first issue, I will also keep in mind this one.



## Installation
Download and run locally

```
npm install
npm start
open http://localhost:3000
```

## Directory structure
```
Root
├── src
│   ├── actions
│   │   └──
│   ├── api
│   │   └──
│   ├── components
│   │   └──
│   ├── constants
│   │   └──
│   ├── containers
│   │   └──
│   ├── reducers
│   │   └──
│   ├── store
│   │   └──
│   ├── stylesheets
│   │   └──
│   └── index.tsx
├── index.html
├── package.json
├── server.js
└── webpack.config.js
```
