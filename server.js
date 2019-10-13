const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(()=>{
    const server = express();
    
    // server.get("/blog/:id", (req, res)=>{
    //     app.render(req, res, "", req.params)//pages/index.js file to to handle above route
    // })
    server.get("/blog/:id", (req, res)=>{
        app.render(req, res, "/post", req.params)//pages/post.js file file to handle above route
    })

    server.get("*", (req,res)=>{//handling all routes which *-is everything
        return handle(req,res)
    })

    server.listen(3000, err=>{
        if(err) throw err;
        console.log(" Express listening on http://localhost:3000");
    })
})