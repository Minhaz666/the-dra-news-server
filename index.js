const express = require('express');
const app = express();
const port = 5000;
const cors=require('cors');

app.use(cors());

const categories= require('./data/categories.json');
const news=require('./data/news.json')
// console.log(data)

app.get('/', (req, res) => {
  res.send('news server is running')
});

app.get('/categories', (req, res) => {
  res.send(categories)
});

app.get('/news', (req, res) => {
  res.send(news);
});

app.get('/news/:id', (req, res) => {
  const id= parseInt(req.params.id);
  console.log (id)
  const selectednews=news.find(singlenews=>parseInt(singlenews._id )== id)
  res.send(selectednews);
});

app.get('/categories/:id',(req,res)=>{
  const categoriesid=parseInt(req.params.id);
  // console.log(name);
  if (categoriesid===0)
  {
    res.send(news)
  }
  else{
    const categoryNews=news.filter(singlenews=>categoriesid == parseInt(singlenews.category_id));
  res.send(categoryNews)
  }
  
})

app.listen(port, () => {
  console.log(`news server is listening on port ${port}`)
})