const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require("node:path")
const port = 8080

const server = http.createServer((req, res) => {
if(req.url === "/") {
    fs.readFile("index.html", function (error, data) {
        if(error) {
            fs.readFile("404.html", (_, data) => {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write(data)
                return res.end;
            })
         } else {
res.write(data)
         } 
        res.end()
        })
    }
    else if (req.url === "/about") {
        fs.readFile("about.html", function (error, data) {
            if(error) {
                fs.readFile("404.html", (_, data) => {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.write(data)
                    return res.end;
                } )
            } else {
                res.write(data)
            } 
            res.end()
        })
        } 
    else if (req.url === "/contact-me") {
        fs.readFile("contact-me.html", function (error, data) {
            if(error) {
                fs.readFile("404.html", (_, data) => {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.write(data)
                    return res.end;
                })
            } else {
                res.write(data)
            } 
        res.end()
        })
        } else if(req.url === "/404") {
            fs.readFile("404.html", function (error, data) {
                if(error) {
                    fs.readFile("404.html", (_, data) => {
                        res.writeHead(404, { "Content-Type": "text/html" });
                        res.write(data)
                        return res.end;
                    })
                } else {
                    res.write(data)
                } 
                res.end()
        })
    } else { 
        fs.readFile("404.html", (_, data) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data)
            return res.end;
    })
    }
}).listen(port);
