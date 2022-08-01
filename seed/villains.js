const db = require('../db')
const { Villain } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const villains = [
    {
      name: "Donald 'Red' Grant",
      movies: 'From Russia with Love',
      description:
        "'Red' Grant is a S.P.E.C.T.R.E. soldier, a standout in the agents on S.P.E.C.T.R.E. Island who has been specifically training to counteract 007 himself. ",
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shutterstock-editorial-5886245cr-huge-1556305211.jpg?crop=1xw:1xh;center,top&resize=980:*',
      bond: 'Sean Connery'
    },
    {
      name: 'Dr. Julius No',
      movies: 'Dr. No',
      description:
        "The first major Bond villain set the standard and established the cliches. He's a snobby intellectual (a genius scientist), with an elaborate lair (an island fortress), and a strange disfigurement (robot hands). He has an army of henchmen willing to die for his cause, which involves taking control of an American rocket launch.",
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dr-julius-no-dr-no-gettyimages-133285841-1556304772.jpg?crop=1xw:1xh;center,top&resize=980:*',
      bond: 'Sean Connery'
    },
    {
      name: 'Alec Trevelyan',
      movies: 'GoldenEye',
      description:
        'Alec Trevelyan, the former Agent 006, a villain whose origin story is directly tied to him being a casualty of the lengthy shadow war that Bond survived. Left for dead by 007 at the end of a disastrous mission, 006 re-emerges, hideously scarred and embittered and ready to wreck the systems that let him down. ',
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/alec-trevelyan-goldeneye-gettyimages-126135695-1556305148.jpg?crop=1xw:1xh;center,top&resize=980:*',
      bond: 'Pierce Brosnan'
    },
    {
      name: 'Elliot Carver',
      movies: 'Tomorrow Never Dies',
      description:
        "Media tycoon Elliot Carver wants to orchestrate World War III not because he has a political motive, but because his countless newspapers and television shows would benefit from that kind of dramatic world event. And since he's causing the whole thing, he'll always have the juicy, inside scoop.",
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elliot-carver-tomorrow-never-dies-shutterstock-editorial-5885200j-huge-1556302765.jpg?crop=1xw:1xh;center,top&resize=980:*',
      bond: 'Pierce Brosnan'
    },
    {
      name: 'Le Chiffre',
      movies: 'Casino Royale',
      description:
        "The saddest and most ineffectual of all the Bond villains, Le Chiffre is noteworthy because he's a desperately trying to make up for a huge misfire when Bond goes in for the kill. This is no mastermind with a scheme that needs to be thwarted—he's just a desperate man taking desperate measures to save his life.",
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/le-chiffre-casino-royale-shutterstock-editorial-1544001a-huge-1556302476.jpg?crop=1xw:1xh;center,top&resize=980:*',
      bond: 'Daniel Craig'
    },
    {
      name: 'Dominic Greene',
      movies: 'Quantum of Solace',
      description:
        "In a streamlined, fully-envisioned film, Mathieu Amalric could have played a great Bond villain. Instead, he's pretty good, lending some fairly entertaining sleaze to a thinly sketched megalomaniac whose evil scheme is as uninspiring as the rest of Quantum of Solace.",
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominic-greene-quantum-of-solace-shutterstock-editorial-5886228ao-huge-1555606090.jpg?crop=1xw:1xh;center,top&resize=980:*',
      bond: 'Daniel Craig'
    }
  ]

  await Villain.insertMany(villains)
  console.log('Created some villains!')
}
const run = async () => {
  await main()
  db.close()
}

run()
