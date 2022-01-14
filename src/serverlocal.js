const express =require("express");
const path=require("path");
const session =require("express-session");
const bodyParser=require("body-parser");
const app=express();

const mysql=require("mysql");





app.use(express.static("frontend"));
app.use("/css",express.static("frontend/css"));
app.use("/js",express.static("frontend/js"));
app.use("/images",express.static("frontend/images"));

const db_rrezo=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"rrezo"
});



app.use(session({
    secret:"secret",
    resave:true,
    saveUninitialized:true
}));
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());


app.get("/index",(request,response)=>{
    response.sendFile(path.join(__dirname+"/frontend/views/index.html"));

});

app.post("/pytMesazh",(request,response)=>{
let pytMesazh={
    "Mesazh":request.body.plotsimTeksti,
    "Dergus":request.body.plotsimEmail,
    "Emri":request.body.plotsimiEmri
};
let insert_sql="Insert into pytmesazh  set ? ";
let query=db_rrezo.query(insert_sql,pytMesazh,(error,query_results)=>{
    if(error){
        response.send("Ju lutem shkruani Emalin mire");
        response.status(400);
        response.end();
    }else {
        response.sendFile(path.join(__dirname+"/frontend/views/index.html"));

    }
});
});

app.post("/signUp",(request,response)=>{

    try {
        validimiEmail(request.body.EmailPerdoruesit);
        validimiEmri(request.body.EmriPerdoruesi);
        validimiPasvordi(request.body.PasvordiPerdoruesit);
    }
    catch(err) {
        response.sendFile(path.join(__dirname+"/frontend/views/index.html"));
    }



   let perdoruesi={
       "Emri":request.body.EmriPerdoruesi,
       "Email":request.body.EmailPerdoruesit,
       "Passvordi":request.body.PasvordiPerdoruesit
   };
    let insert_sql="Insert into perdoruesi  set ? ";
    let query=db_rrezo.query(insert_sql,perdoruesi,(error,query_results)=>{
        if(error){
            response.send("Ju lutem shkruani Emalin , Pasvordin mire");
            response.status(400);
            response.end();
        }else {
            response.sendFile(path.join(__dirname+"/frontend/views/index.html"));

        }
    });

});
function validimiEmail(mail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return true;
    }
    throw 'Imella nuk eshte valide!';
}

function validimiEmri(emri)
{
    if ( /^[a-zA-Z]+ [a-zA-Z]+$/.test(emri))
    {
        return true;
    }
    throw 'Emri nuk eshte valid!';
}

function validimiPasvordi(pasvordi)
{
    if(!pasvordi.length >=4){
        throw 'Pasvordi ka me pak se 4 karaktere!';
    }
    var numbers =/[0-9]/g;
    if (!numbers.test(pasvordi)){
        throw 'Pasvordi nuk permbane numer!';
    }
    var upperCaseLetters = /[A-Z]/g;
    if (!upperCaseLetters.test(pasvordi)){
        throw 'Pasvordi nuk ka shkronje te madhe!';
    }
    var lowerCaseLetters = /[a-z]/g;
    if(!lowerCaseLetters.test(pasvordi)){
        throw 'pasvordi nuk ka shkronje te vogla';
    }

    return true;
}



app.post("/signIn",(request,response)=>{
let query_sql="select Email from perdoruesi where Passvordi = ? ";
    let query=db_rrezo.query(query_sql,request.body.PasvordPerdorues,(error,query_results)=>{
        if(error){
            response.send("Ju lutem shkruani Emalin , Pasvordin mire");
            response.status(400);
            response.end();
        }else {
            request.session.loggedin=true;
            request.session.EmriPerdorues=request.body.EmriPerdorues;
            response.status(200);
            response.redirect("/dashboard");

        }

    });
});

app.get("/dashboard",(request,response)=>{
    if(request.session.loggedin){
        response.sendFile(path.join(__dirname+"/frontend/views/dashboard.html"));
    }else{
        response.redirect("/index");
        response.end();
    }




});


app.get("/logout",(request,response)=>{
    request.session.loggedin = false;
    response.redirect("/index");
    response.end();
});

app.get("/ndihme",(request,response)=>{
    if (request.session.loggedin) {
        response.sendFile(path.join(__dirname + "/frontend/views/ndihme.html"));
    } else {
        response.redirect("/index");
        response.end();
    }
});

app.get("/profili",(request,response)=> {
        if (request.session.loggedin) {
            response.sendFile(path.join(__dirname + "/frontend/views/profili.html"));
        } else {
            response.redirect("/index");
            response.end();
        }
    });

app.get("/userInbox",(request,response)=> {
    if (request.session.loggedin) {
        response.sendFile(path.join(__dirname + "/frontend/views/userbox.html"));
    } else {
        response.redirect("/index");
        response.end();
    }
});

app.get("/votimiim",(request,response)=> {
    if (request.session.loggedin) {
        response.sendFile(path.join(__dirname + "/frontend/views/votimiim.html"));
    } else {
        response.redirect("/index");
        response.end();
    }
});

app.get("/editProfile",(request,response)=> {
    if (request.session.loggedin) {
        response.sendFile(path.join(__dirname + "/frontend/views/editProfile.html"));
    } else {
        response.redirect("/index");
        response.end();
    }
});

app.get("/komunikimiShoqeror",(request,response)=> {
    if (request.session.loggedin) {
        response.sendFile(path.join(__dirname + "/frontend/views/komunikimiShoqeror.html"));
    } else {
        response.redirect("/index");
        response.end();
    }
});




//http://localhost:3000/index
const port=3000;
app.listen(port,()=>{console.log("Serveri esht duke pritur kerkesa")});