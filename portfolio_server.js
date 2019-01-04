const express = require('express');
const app =  express();
const path  = require('path');
const publicPath = path.join(__dirname, '.', 'public');
const nodemailer = require('nodemailer');
const robots = require('express-robots');
app.use(robots(__dirname + '/robots.txt'));
const helmet = require('helmet');
const bodyParser = require('body-parser');
const  compression = require('compression');

app.use(compression())
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());

app.use(express.static(publicPath));

// app.get('*.js', (req, res, next) => {
//     req.url = req.url + '.gz';
//     console.log(req.url);
//     res.set('Content-Encoding', 'gzip');
//     res.set('Content-Type', 'text/javascript');
//
//     next();
//   });

app.get('*', (req,res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/send',  (req,res) =>{
       const emailBody = `
          <p>
          <h3>New email!</h3>
            <ul>
              <li>Email: ${req.body.email}</li>
              <li>Name: ${req.body.name}</li>
              <li>Message: ${req.body.message}</li>
            </ul>
          </p>
       `;
       let transporter = nodemailer.createTransport({
         service: 'gmail',
         secure: true,
         auth: {
                type: 'OAuth2',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
            }
        });


          let mailOptions = {
              from: process.env.USER_ID,
              to: process.env.USER_ID,
              subject: 'New email(portfolio)',
              generateTextFromHTML:true,
              text: 'You received a new email',
              html: emailBody,
              auth:{
                user: process.env.USER_ID,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: process.env.ACCESS_TOKEN,
                expires:3600

              }
          };


          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  return console.log(error);
              }
          });
       res.redirect('/')

      })



app.listen(process.env.PORT || 3000, () => {
  console.log('running');
});
