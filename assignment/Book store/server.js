const express = require("express")
const sql = require("mssql/msnodesqlv8")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended : true}))

const config = {
    server : "192.168.171.36",
    database : "3313",
    driver : 'msnodesqlv8',
    options : {
        trustedConnection : true,
        trustServerCertificate : true
    }
}
const pool =new  sql.ConnectionPool(config)

app.get("/", function(req,res){
    pool.connect().then(()=>{
        pool.request().query("select * from tblBooks", function(err, result){
            res.send(result.recordset)
        })
    })
})

app.get("/getAllBooks", function(req,res){
    res.sendFile(__dirname+"/getAllBooks.html")
})

app.get("/home", function(req,res){
    res.sendFile(__dirname+"/home.html")
})

app.get("/addbooks", function(req,res){
    res.sendFile(__dirname+"/addbooks.html")
})

app.get("/findbook", function(req,res){
    res.sendFile(__dirname+"/findbook.html")
})

app.get("/delete/:id", function(req,res){
    const id = req.params.id
    console.log(id)

    const query = `delete from tblBooks where bookId = ${id}`

    pool.connect().then(()=>{
        pool.request().query(query, function(err,result){
            if(err) console.error(err)

            else{
                res.sendFile(__dirname+"/getAllBooks.html")
            }
        })
    }).catch((err)=>{
        console.error(err)
    })
})

app.get("/:id", function(req,res){
    const id = req.params.id
    console.log(id)

    const query = `select * from tblBooks where bookId = ${id}`

    pool.connect().then(()=>{
        pool.request().query(query, function(err,result){
            if(err) console.error(err)

            else{
                res.send(result.recordset)
            }
        })
    }).catch((err)=>{
        console.error(err)
    })
})

app.post("/afterAddBook", function(req,res){
    console.log(req.body)
    const query=`INSERT INTO tblBooks VALUES(${req.body.bookId},'${req.body.bookName}','${req.body.bookAuthor}',${req.body.bookPrice})`

    pool.connect().then(()=>{
        pool.request().query(query, function(err,result){
            if(err) console.error(err)

            else{
               // res.send("Book added successfully")
                res.sendFile(__dirname+"/getAllBooks.html")
            }
        })
    }).catch((err)=>{
        console.error(err)
    })
})

app.listen(1234, function(){
    console.log("Server is running!!! http://localhost:1234/home")
})