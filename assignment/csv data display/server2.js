const http = require("http")
const fs = require("fs")
const dir = __dirname
const httpParse = require("url").parse

function defaultPage(res) {
    res.writeHead(200, {'Content-type' :'text/html'});
    res.write("<h1>Oops something went Wrong : error 404</h1>")
    res.write("<h2>Page not found</h2>")
}


function displayPage(res, url) {
    const path = dir + url
    
    console.log(path)
    fs.createReadStream(path).pipe(res)
}

http.createServer((req,res)=>{

    if (req.method == "GET") {
        const check = httpParse(req.url).query;
        console.log(check)

        if (check != null) {
            const obj = httpParse(req.url, true).query;
            fs.appendFile("./myData.csv",`${obj.empName},${obj.empEmail}\n`,function(){
                console.log("Done")
                displayPage(res, '/register.html')
                res.end()
            })
            
           // 
        }
    }

    switch (req.url) {
        case "/favicon.ico": res.end()
            break;

        case "/register.html": displayPage(res, req.url)
            break;

        default:
            defaultPage(res)
            res.end()
            break;
}
}).listen(1289, function(){
console.log("Server is running!!!\n\nhttp://localhost:1289/\n")
})