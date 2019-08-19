const path = require ('path');
const fs = require ('fs');

const chirpArr = [
    {
        title: 'Baltimore Ravens',
        text: 'NFL team'
    },
    {
        title: 'Tennessee Vols',
        text: 'College FB team'
    },
    {
        title: 'Boston Red Sox',
        text: 'MLB team'
    },
    {
        title: 'Boston Celtics',
        text: 'NBA team'
    },
    {
        title: 'Boston Bruins',
        text: 'NHL team'
    }
]

const newChirpArr = JSON.stringify(chirpArr);

const dataPath = path.join(__dirname, '../chirps.json')
// console.log(dataPath)

fs.writeFile(dataPath, newChirpArr + '\n', err => {
    if(err) console.log
})

fs.readFile('../chirps.json', (err, data) => {
    if(err) console.log(err)
    console.log(data)
})