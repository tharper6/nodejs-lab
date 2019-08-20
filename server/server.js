const path = require ('path');
const fs = require ('fs');
const rp = require ('request-promise')

// const chirpArr = [
//     {
//         title: 'Baltimore Ravens',
//         text: 'NFL team'
//     },
//     {
//         title: 'Tennessee Vols',
//         text: 'College FB team'
//     },
//     {
//         title: 'Boston Red Sox',
//         text: 'MLB team'
//     },
//     {
//         title: 'Boston Celtics',
//         text: 'NBA team'
//     },
//     {
//         title: 'Boston Bruins',
//         text: 'NHL team'
//     }
// ]

// const newChirpArr = JSON.stringify(chirpArr);

// const dataPath = path.join(__dirname, '../chirps.json')
// // console.log(dataPath)

// fs.writeFile(dataPath, newChirpArr, err => {
//     if(err) console.log
// })

// fs.readFile(dataPath, (err, data) => {
//     if(err) console.log(err)
//     const revertBackToJS = JSON.parse(data)
//     console.log(revertBackToJS)
// })

rp('https://www.reddit.com/r/popular.json')
.then(data => {
    const articles = JSON.parse(data);
    const articleArr = articles.data.children
    const getArticle = articleArr.map(article => {
        return {
            title: article.data.title,
            url: article.data.url,
            author: article.data.author_fullname
        }
    })
    const arr = []
    arr.push(getArticle)
    const dataPath = path.join(__dirname, '../popular-articles.json')
    fs.writeFile(dataPath, JSON.stringify(arr), (err => {
        if(err) console.log(err);
    }))
})

