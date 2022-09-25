const express = require('express'); 
const admin = require('firebase-admin');
const bp = require("body-parser");

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
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


app.get("/getVendedor/:id", (req,res) => {
    try {
        vendedorRef.child(req.params.id).once('value',function(snap){
            data = snap.val();
            delete data.contra
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

app.get("/getVendedores", (req,res) => {
    try {
        
        vendedorRef.once('value', function(snap){

            data = snap.val();

            const clearNullVendor = data.filter(element => {
                delete element.contra;
                return element !== null;
            })

            data = clearNullVendor;

            for(var i = 0; i < data.length; i++){
                const clearNullProduct = data[i]["parcela"]["Productos"].filter(element => {
                    return element !== null;
                })
                data[i]["parcela"]["Productos"] = clearNullProduct;
            }
                
            res.json({message:data});
        });

    }catch (error) {
        res.status(400).json({message: "Bad Request"});
    }

});

app.post('/buyCart', (req,res) => {

    try {
        const {vID,pID,cantidad} = req.body;

        var new_ref = db.ref(`vendedores/${vID}/parcela/Productos/${pID}/CantidadExistenteKilos`);

        new_ref.once('value',function(snap) {
            
            prev_cantidad = snap.val()
            
            if(prev_cantidad >= cantidad) {
                new_ref.set(prev_cantidad-cantidad);
                res.json({message:"Updated Inventory"});
            }else{
                res.json({message:"Not enough items in the inventory"});
            }

        });

    } catch (error) {
        res.status(400).json({message: "Bad Request"});
    }
    

})


