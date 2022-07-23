let express = require('express')
let app = express();


app.get(express.static('public'))
// http://localhost:5000

let port = process.env.PORT || 5000;
// let port = 5000;

let server = app.listen(port, () => {
 console.log('app.Listern is Working');
})

