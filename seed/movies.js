const db = require('../db')
const { Movie, Bond } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const seanConnery = await Bond.find({ name: 'Sean Connery' })
  const pierceBrosnan = await Bond.find({ name: 'Pierce Brosnan' })
  const danielCraig = await Bond.find({ name: 'Daniel Craig' })

  const movies = [
    {
      name: 'Dr. No',
      year_released: '1962',
      poster: 'https://www.coverwhiz.com/uploads/movies/dr-no.jpg',
      bond: seanConnery[0]._id
    },
    {
      name: 'From Russia With Love',
      year_released: '1963',
      poster:
        'https://i.pinimg.com/564x/f5/c3/8a/f5c38a3a03a82462befc2edbcec60fc3.jpg',
      bond: seanConnery[0]._id
    },
    {
      name: 'Goldfinger',
      year_released: '1964',
      poster:
        'https://resizing.flixster.com/00SmgIKZRSHAu9aWZYQBrDFqSBo=/206x305/v2/https://flxt.tmsimg.com/assets/p3374_p_v8_av.jpg',
      bond: seanConnery[0]._id
    },
    {
      name: 'Thunderball',
      year_released: '1965',
      poster:
        'https://resizing.flixster.com/2fhYR-mWKDd4J-DGQnqXF_eh94s=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p6355_p_v8_ah.jpg',
      bond: seanConnery[0]._id
    },
    {
      name: 'You Only Live Twice',
      year_released: '1967',
      poster:
        'https://resizing.flixster.com/x4wCyxnpmBY5tehJJLe2DPJe7N4=/206x305/v2/https://flxt.tmsimg.com/assets/p164_p_v8_ai.jpg',
      bond: seanConnery[0]._id
    },
    {
      name: 'GoldenEye',
      year_released: '1995',
      poster:
        'http://images5.fanpop.com/image/photos/31300000/GoldenEye-Poster-goldeneye-1995-007-31323730-180-280.jpg',
      bond: pierceBrosnan[0]._id
    },
    {
      name: 'Tomorrow Never Dies',
      year_released: '1997',
      poster: 'https://m.media-amazon.com/images/I/7157UzTxuiL._AC_SY679_.jpg',
      bond: pierceBrosnan[0]._id
    },
    {
      name: 'Casino Royale',
      year_released: '2006',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
      bond: danielCraig[0]._id
    },
    {
      name: 'Quantum of Solace',
      year_released: '2008',
      poster: 'https://m.media-amazon.com/images/I/71S3LNFhKlL._AC_SY606_.jpg',
      bond: danielCraig[0]._id
    }
  ]

  await Movie.insertMany(movies)
  console.log('Created some movies!')
}
const run = async () => {
  await main()
  db.close()
}

run()
