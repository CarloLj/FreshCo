const express = require('express'); 
const admin = require('firebase-admin');

const PORT = process.env.PORT || 3001;

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://freshco-3f88b-default-rtdb.firebaseio.com",
    authDomain: "freshco-3f88b.firebaseapp.com",

});

const db = admin.database();
var vendedorRef=db.ref("vendedores");

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


app.get("/getVendedor/:id", (req,res) => {
    try {
        vendedorRef.child(req.params.id).once('value',function(snap){
            data = snap.val();
            console.log(data["parcela"]);
    
            const results = data["parcela"]["Productos"].filter(element => {
                return element !== null;
            })
    
            data["parcela"]["Productos"] = results;
            res.json({data:data});
    
        });
    } catch (error) {
        res.status(400).json({message: "Bad Request"});
    }
    
});
