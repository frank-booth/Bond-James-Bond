const db = require('../db')
const { Bond } = require('../models')

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
      name: 'George Lazenby',
      years: '1969',
      movie_count: 1,
      image:
        'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/20/1495103673-george-lazenby-bond.jpg'
    },
    {
      name: 'Roger Moore',
      years: '1973-1985',
      movie_count: 7,
      image:
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/23/14/roger-moore-james-bond.jpg?width=1200'
    },
    {
      name: 'Timothy Dalton',
      years: '1987 -1989',
      movie_count: 2,
      image:
        'https://media.gq-magazine.co.uk/photos/5d13932ab363fa855720c8bc/16:9/w_2560%2Cc_limit/timothy-dalton-hp-gq-24aug15-rex_b.jpg'
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
