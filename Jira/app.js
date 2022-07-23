// ui elments 


let express = require('express')
let app = express();
app.use(express.static('public'))
// http://localhost:5000

let port = process.env.PORT || 5000;
let server = app.listen(port, () => {
 console.log('app.Listern is Working');
})

