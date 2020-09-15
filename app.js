const express = require('express');
const pug = require('pug');
const fs = require('fs');

// Create an express application
const app = express();

// Create a greeting endpoint
app.get('/', (req, res) => {
    
  // Open html file
  fs.readFile(__dirname +'/index.pug', 'utf8', (err, template) => {
    
    // Error if html file doesn't exist
    if (err) throw err;
              
    // Customize greeting message
    /*
    if(typeof req.query.name != 'undefined'){
      console.log(req.query.name);
      template = template.replace(/world/g, req.query.name);
    }
    */
    
    typeof req.query.name != 'undefined' ? name = req.query.name : name = 'world';
   
    // Send HTML
    let html = pug.render(template, { name: name })
    res.set('Content-Type', 'text/html');
    res.send(html);
  });
});

// Start Application
app.listen(3000, () => console.log('app listening on 3000'));
