var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/folder', (req, res) => {
  res.send(JSON.stringify(["Guide flow","Simple Project","new Folder"]))
})



const folder={
folderName:"Simple Project",
projects:[
  {name:"Onboarding aperiam",
Theme:"Dark blue"},
{
  name:"Onboarding aperiam",
  update:"2019/04/22",
  slides:"12"
},
{
  name:"Onboarding aperiam",
  update:"2019/04/22",
  slides:"12"
},
{
  name:"Onboarding aperiam",
  update:"2019/04/22",
  slides:"12"
},
{
  name:"Onboarding aperiam",
  update:"2019/04/22",
  slides:"12"
},
{
  name:"Onboarding aperiam",
  update:"2019/04/22",
  slides:"12"
}
]
};

const folder2={
folderName:"Guide flow",
projects:[
  {name:"Onboarding aperiam",
Theme:"Dark blue"},
{
  name:"Onboarding aperiam",
  update:"2019/04/22",
  slides:"12"
},
{
  name:"Onboarding aperiam",
  update:"2019/04/22",
  slides:"12"
},
{
  name:"Onboarding aperiam",
  update:"2019/04/22",
  slides:"12"
}
]
};

const folder3={
folderName:"new Folder",
projects:[
  {name:"Onboarding aperiam",
Theme:"Dark blue"},
{
  name:"Onboarding aperiam",
  update:"2019/04/22",
  slides:"12"
}
]
};

const foldersList=[folder,folder2,folder3];

router.get('/folders', (req, res) => {
res.send(JSON.stringify(foldersList))
})

module.exports = router;
