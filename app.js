OCconsole.log('test')
import express from 'express';
import { blog_data, newsletter_data } from './test_data';
import { PRODUCTION } from './gulpfile.babel';

require('./gulpfile.babel')
var bodyParser = require('body-parser');
var nunjucks = require( 'nunjucks' ) ;
const routes = require('./routes');

const PORT = 5000;
const EMAIL_TEMPLATE_API = '/template';
const app = express();
const PATH_TO_DIST_TEMPLATES = './dist/social' ;

nunjucks.configure( PATH_TO_DIST_TEMPLATES, {
  autoescape: false,
  express: app
}) ;

app.use(bodyParser.json()); // for parsing application/json

/**
 * For Development
 */
// app.get('/', (req, res) => {
//   var data = blog_data
//   res.render('newsletter_blog.html', data)
// })
/**
 * END Development
 */

app.use(EMAIL_TEMPLATE_API, routes);

app.listen(PORT, () => {
  console.log(`PRODUCTION: ${PRODUCTION}`)
  console.log(`server running on port ${PORT}`)
});
