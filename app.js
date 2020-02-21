
    const app = require('express')()

    // set the view engine to ejs
    app.set('view engine', 'ejs')



    app.get('/', async function(req, res) {

      // Access the provided 'page' and 'limt' query parameters
      let token = req.query.token || '';
      let hostname = req.query.hostname || '';     
  
      // Return the articles to the rendering engine
      res.render('index', {
          token: token,
          hostname:hostname
         
      });
    });
    app.get('/:id', (req, res) => {
      // render `home.ejs` with the list of posts
      res.render('index', { posts: posts })
    })
  
    app.listen(3000)
    console.log('listening on port 3000')