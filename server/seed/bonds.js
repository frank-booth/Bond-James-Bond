const db = require('../db')
const Bond = require('../models/bond')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const bonds = [
    {
      name: 'Sean Connery',
      years: '1962-1967, 1971',
      movie_count: 6,
      image:
        'https://images.immediate.co.uk/production/volatile/sites/3/2012/02/1308-5cb00fe.jpg?quality=90&webp=true&crop=146px,0px,844px,562px&fit=750,500'
    },
    {
      name: 'Pierce Brosnan',
      years: '1995-2002',
      movie_count: 4,
      image:
        'https://images.immediate.co.uk/production/volatile/sites/3/2019/08/pierce-brosnan-goldeneye-a35d646.jpg?quality=90&webp=true&crop=29px,0px,5134px,3420px&fit=750,500'
    },
    {
      name: 'Daniel Craig',
      years: '2006-2021',
      movie_count: 5,
      image:
        'https://images.immediate.co.uk/production/volatile/sites/3/2020/06/daniel-craig-james-bond-a2ed57d-scaled.jpg?quality=90&webp=true&fit=750,500'
    }
  ]

  await Bond.insertMany(bonds)
  console.log('Created some bonds!')
}
const run = async () => {
  await main()
  db.close()
}

run()
