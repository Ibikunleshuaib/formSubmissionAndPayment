const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys');
const PORT = process.env.PORT || 5005;


mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
})
mongoose.connection.on('error', (err) => {
    console.log('Not connected', err)
})

//PRODUCTION DATABASE CODE

//mongodb://<dbuser>:<dbpassword>@ds133932.mlab.com:33932/heroku_ctx85nkj



let Biodata = require('./models/biodata');
 
 // Parse application json
 app.use(bodyParser.json());
 app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: false}));


 //Set public folder

app.use(express.static(path.join(__dirname, 'public')));


//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

  

app.get('/', (req, res) => {
   res.render('form.ejs')
});

app.get('/testing', (req, res) => {
    Biodata.find({}, (err, biodata) => {
		if (err){
			console.log(err);
		}else {
			res.render('testing', {
				//We are passing a 'message' from the function or query to the view
				biodata: biodata

			})//.sort({'_id': -1});
    }
    });
});


app.post('/testing', (req, res) => {
    let newStudent = new Biodata();
    newStudent.surName = req.body.surName;
    newStudent.firstName = req.body.firstName;
	newStudent.middleName = req.body.middleName;
	newStudent.male = req.body.male;
    newStudent.female = req.body.female;
	newStudent.Email = req.body.Email;
	newStudent.Phone_Number = req.body.Phone_Number;
    newStudent.Home_Address = req.body.Home_Address;
	newStudent.Institution = req.body.Institution;
	newStudent.Institution_Address = req.body.Institution_Address;
    newStudent.arbLang = req.body.arbLang;
	newStudent.arbLit = req.body.arbLit;
	newStudent.civEdu = req.body.civEdu;
	newStudent.econs = req.body.econs;
	newStudent.engLang = req.body.engLang;
	newStudent.gov = req.body.gov;
	newStudent.his = req.body. his;
	newStudent.iss = req.body.iss;
	newStudent.math = req.body.math;
    newStudent.yorLang = req.body.yorLang;
	newStudent.save((err) => {
		if(err){
			console.log(err);
			return;
		} else{
            console.log(newStudent)
			res.redirect('/')
		}
	})
});


app.get('/subscribe', (req, res) => {
    Subscribe.find({}, (err, subscribe) => {
		if (err){
			console.log(err);
		}else {
			res.render('subscribe', {
				//We are passing a 'subscribe' from the function or query to the view
				subscribe: subscribe
			});
    }
    });
});

app.post('/subscribe', (req, res) => {
    let newSubscribe = new Subscribe();
    newSubscribe.email = req.body.email;
    newSubscribe.save((err) =>{
		if(err){
			console.log(err);
			return;
		} else{
            console.log(newSubscribe)
			res.redirect('/')
		}
	})
	
	
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT ` + PORT )
});