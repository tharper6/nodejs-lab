const path = require ('path');
const fs = require ('fs');
const rp = require ('request-promise')

rp('https://reddit.com/r/popular.json')
.then(data => {
    const articles = JSON.parse(data)
    const articleArr = articles.data.children.data
    const getArticles = articleArr.map(article => {
        return {
            image: article.preview.image
        }
    })
    console.log(getArticles)
})