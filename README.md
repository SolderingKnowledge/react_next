Initial page rendered on the server and the consecutive pages are on the client

1 `npm init -y`

2 `npm i --save react react-dom next`

3 `mkdir pages` if you run without pages dir "next" will complain

4 `npm run dev` which will run development server => 

5 If we do want to ovewrite the App.js then we need to use `_app.js` inside pages folder you need the underscore which is for overwriting. 

6 `npm i --save axios` you don't have to stick with `npm i isomorphic-unfetch` you can do with axios which is easier

7 `npm i --save express` installing express for custom server-side-rendering routes