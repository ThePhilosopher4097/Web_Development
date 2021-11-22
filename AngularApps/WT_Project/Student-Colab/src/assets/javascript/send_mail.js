function sendMail(user, user_mail){
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'techaspires.mit@gmail.com',
      pass: 'techaspires.mitaoe.ac.in'
    }
  });

  var mailOptions = {
    from: 'techaspires.mit@gmail.com',
    to: user_mail,
    subject: 'Welcome to Student Colab ',
    attachments: [{
        filename: 'Logo.png',
        path: 'D:/Programming/HTML CSS/AngularApps/WT_Project/Student-Colab/src/assets/home/Logo.png',
        cid: 'colab' //same cid value as in the html img src
      },
      {
        filename: '1.jpg',
        path: 'D:/Programming/HTML CSS/AngularApps/WT_Project/Student-Colab/src/assets/team/1.jpg',
        cid: 'author' //same cid value as in the html img src
      }
    ],
    html: '<!DOCTYPE html><body style="background-color:black;color:white; padding:20px;"><a href="#"><img src="cid:colab" width="900px" height="250px"/></a><div style="outline: 3px dashed #98abb9; outline-offset: -10px; background-color: #556068; padding:50px; text-align:center; height: 400px; width: 700px; margin: 100px auto; -webkit-box-shadow: 2px 2px 2px #000; -moz-box-shadow: 2px 2px 2px #000; box-shadow: 2px 2px 2px #000;"><h1 style="font-size: 40px; line-height: 190px; font-family: Helvetica, sans-serif;  font-weight: bold;  text-align: center;">Welcome to Student-Colab</h1><h3 style="font-size: 20px;">Dear '+user+', get started by joining a club !<br>We are glad that you have chosen us !<br>Enjoy you Clubs !!!</h3><br></div><br><div><h2>Regards,</h2><br><img src="cid:author" style="border:3px solid; border-radius:50%; height:300px; width:300px;"/><br> <h2>Atharva Joshi,</h2><br> Founder and CEO (Club-Colab)</div></body></html>'};

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports = { sendMail };
