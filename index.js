const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app=express()
var e = [
        {
            title: 'EXAMEN!',
            question: 'Esta es mi primer prueba.',
            author: 'Robert',
            path: '/pdf/fisica4.pdf',
            answer: new Date('2016-03-19'),
            createdAt: new Date('2016-03-19'),
            ruta:'/pdf/fisica4.pdf',
       		votes: 1
        },
        {
            title: 'pRACTICA',
            question: 'Esta essdf mi primer prueba.',
            author: 'Robertsdf',
            path: '/pdf/fisica4.pdf',
            answer: new Date('2dd016-03-19'),
            createdAt: new Date('2016-03-19'),
            ruta:'/pdf/fisicaa4.pdf',
       		votes: 7
        },
        {
            title: 'Quizes',
            question: 'Esta essdf mi primer prueba.',
            author: 'Robertsdf',
            path: '/undefinefffd',
            answer: new Date('2dd016-03-19'),
            createdAt: new Date('2016-03-19'),
            ruta:'/pdf/fisicaaa4.pdf',
    
       		votes: 5
        }
    ]
var resp=[
    {
      preguntas:["1","2","Problema 2","Problema 3"],
      respuestas:["V","V","12,432","43,1"]

    },
        {
      preguntas:["1","6","Problema 2","Problema 3"],
      respuestas:["V","F","8,432","37,1"]

    }
]
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
 // app.get('/', (req, res) => res.render('pages/index'))
  app.get('/a', (req, res) => res.send("hola"))
 
  app.get("/FisicaIV",function(req,res,next){
	res.render('pages/Examenes', {posts: e });
})
   app.get("/Libreria",function(req,res,next){
	res.render('pages/Libreria', {posts: e });
})
     app.get("/",function(req,res,next){
	res.render('pages/MenuPrincipal', {posts: e });
})
        app.get("/Tec",function(req,res,next){
	res.render('pages/Navegacion', {posts: e });
})
     app.get("/subirRespuestas",function(req,res,next){
  res.render('pages/subirRespuestas', {posts: e });
})



  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
