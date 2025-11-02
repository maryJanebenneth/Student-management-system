const express =require('express');
const path = require('path');
const studentRoutes = required('./routes/student');

const app = express();

// serve static files (css, js, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Use admin routes
app.use('/', studentRoutes);

//start server
app.listen(3000, () = {
    console.log ('server running on http://localhost:3000')
});