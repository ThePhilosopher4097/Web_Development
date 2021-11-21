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
  to: 'sameer.patil@mitaoe.ac.in',
  subject: 'Sending Email using Node.js',
  html: '<!DOCTYPE html><body><img src="https://github.com/ThePhilosopher4097/Student_Collab/blob/main/Web_Template/Logo.png" width="400" height="200"/><h1>Welcome to MIT Smart Attendance System</h1><h3>Dear User, Welcome to Student-Colab<br>We are glad that you have chosen us !<br>Enjoy you Clubs !!!</h3></body></html>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});