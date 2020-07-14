import { ResolvedGraph } from 'resolved-graph'

interface Movie {
  type: 'Movie'
  title: string
  tagline?: string
  released: number
}

interface Person {
  type: 'Person'
  name: string
  born?: number
}

interface ActedIn {
  type: 'ACTED_IN'
  roles: string[]
}

interface Reviewed {
  type: 'REVIEWED'
  summary: string
  rating: number
}

interface Other {
  type: 'DIRECTED' | 'WROTE' | 'PRODUCED' | 'FOLLOWS'
}

export const movies = () =>
  new ResolvedGraph<Movie | Person, ActedIn | Reviewed | Other>({
    nodes: [
      {
        id: '53',
        data: {
          type: 'Movie',
          title: 'As Good as It Gets',
          tagline: 'A comedy from the heart that goes for the throat.',
          released: 1997,
        },
      },
      {
        id: '112',
        data: {
          type: 'Person',
          name: 'Helen Hunt',
          born: 1963,
        },
      },
      {
        id: '117',
        data: {
          type: 'Person',
          name: 'Greg Kinnear',
          born: 1963,
        },
      },
      {
        id: '119',
        data: {
          type: 'Person',
          name: 'James L. Brooks',
          born: 1940,
        },
      },
      {
        id: '120',
        data: {
          type: 'Movie',
          title: 'What Dreams May Come',
          tagline: 'After life there is more. The end is just the beginning.',
          released: 1998,
        },
      },
      {
        id: '131',
        data: {
          type: 'Person',
          name: 'Annabella Sciorra',
          born: 1960,
        },
      },
      {
        id: '134',
        data: {
          type: 'Person',
          name: 'Max von Sydow',
          born: 1929,
        },
      },
      {
        id: '143',
        data: {
          type: 'Person',
          name: 'Werner Herzog',
          born: 1942,
        },
      },
      {
        id: '144',
        data: {
          type: 'Person',
          name: 'Robin Williams',
          born: 1951,
        },
      },
      {
        id: '160',
        data: {
          type: 'Person',
          name: 'Vincent Ward',
          born: 1956,
        },
      },
      {
        id: '166',
        data: {
          type: 'Movie',
          title: 'Snow Falling on Cedars',
          tagline: 'First loves last. Forever.',
          released: 1999,
        },
      },
      {
        id: '167',
        data: {
          type: 'Person',
          name: 'Ethan Hawke',
          born: 1970,
        },
      },
      {
        id: '168',
        data: {
          type: 'Person',
          name: 'Rick Yune',
          born: 1971,
        },
      },
      {
        id: '169',
        data: {
          type: 'Person',
          name: 'James Cromwell',
          born: 1940,
        },
      },
      {
        id: '170',
        data: {
          type: 'Person',
          name: 'Scott Hicks',
          born: 1953,
        },
      },
      {
        id: '171',
        data: {
          type: 'Movie',
          title: "You've Got Mail",
          tagline: 'At odds in life... in love on-line.',
          released: 1998,
        },
      },
      {
        id: '172',
        data: {
          type: 'Person',
          name: 'Parker Posey',
          born: 1968,
        },
      },
      {
        id: '173',
        data: {
          type: 'Person',
          name: 'Dave Chappelle',
          born: 1973,
        },
      },
      {
        id: '174',
        data: {
          type: 'Person',
          name: 'Steve Zahn',
          born: 1967,
        },
      },
      {
        id: '175',
        data: {
          type: 'Person',
          name: 'Tom Hanks',
          born: 1956,
        },
      },
      {
        id: '176',
        data: {
          type: 'Person',
          name: 'Nora Ephron',
          born: 1941,
        },
      },
      {
        id: '177',
        data: {
          type: 'Movie',
          title: 'Sleepless in Seattle',
          tagline: 'What if someone you never met, someone you never saw, someone you never knew was the only someone for you?',
          released: 1993,
        },
      },
      {
        id: '178',
        data: {
          type: 'Person',
          name: 'Rita Wilson',
          born: 1956,
        },
      },
      {
        id: '179',
        data: {
          type: 'Person',
          name: 'Bill Pullman',
          born: 1953,
        },
      },
      {
        id: '180',
        data: {
          type: 'Person',
          name: 'Victor Garber',
          born: 1949,
        },
      },
      {
        id: '181',
        data: {
          type: 'Person',
          name: "Rosie O'Donnell",
          born: 1962,
        },
      },
      {
        id: '182',
        data: {
          type: 'Movie',
          title: 'Joe Versus the Volcano',
          tagline: 'A story of love, lava and burning desire.',
          released: 1990,
        },
      },
      {
        id: '183',
        data: {
          type: 'Person',
          name: 'John Patrick Stanley',
          born: 1950,
        },
      },
      {
        id: '184',
        data: {
          type: 'Person',
          name: 'Nathan Lane',
          born: 1956,
        },
      },
      {
        id: '185',
        data: {
          type: 'Movie',
          title: 'When Harry Met Sally',
          tagline: 'Can two friends sleep together and still love each other in the morning?',
          released: 1998,
        },
      },
      {
        id: '186',
        data: {
          type: 'Person',
          name: 'Billy Crystal',
          born: 1948,
        },
      },
      {
        id: '187',
        data: {
          type: 'Person',
          name: 'Carrie Fisher',
          born: 1956,
        },
      },
      {
        id: '188',
        data: {
          type: 'Person',
          name: 'Bruno Kirby',
          born: 1949,
        },
      },
      {
        id: '189',
        data: {
          type: 'Movie',
          title: 'That Thing You Do',
          tagline: 'In every life there comes a time when that thing you dream becomes that thing you do',
          released: 1996,
        },
      },
      {
        id: '190',
        data: {
          type: 'Person',
          name: 'Liv Tyler',
          born: 1977,
        },
      },
      {
        id: '191',
        data: {
          type: 'Movie',
          title: 'The Replacements',
          tagline: 'Pain heals, Chicks dig scars... Glory lasts forever',
          released: 2000,
        },
      },
      {
        id: '192',
        data: {
          type: 'Person',
          name: 'Brooke Langton',
          born: 1970,
        },
      },
      {
        id: '193',
        data: {
          type: 'Person',
          name: 'Gene Hackman',
          born: 1930,
        },
      },
      {
        id: '194',
        data: {
          type: 'Person',
          name: 'Orlando Jones',
          born: 1968,
        },
      },
      {
        id: '195',
        data: {
          type: 'Person',
          name: 'Howard Deutch',
          born: 1950,
        },
      },
      {
        id: '196',
        data: {
          type: 'Movie',
          title: 'RescueDawn',
          tagline: "Based on the extraordinary true story of one man's fight for freedom",
          released: 2006,
        },
      },
      {
        id: '197',
        data: {
          type: 'Person',
          name: 'Christian Bale',
          born: 1974,
        },
      },
      {
        id: '198',
        data: {
          type: 'Person',
          name: 'Zach Grenier',
          born: 1954,
        },
      },
      {
        id: '199',
        data: {
          type: 'Movie',
          title: 'The Birdcage',
          tagline: 'Come as you are',
          released: 1996,
        },
      },
      {
        id: '200',
        data: {
          type: 'Person',
          name: 'Mike Nichols',
          born: 1931,
        },
      },
      {
        id: '201',
        data: {
          type: 'Movie',
          title: 'Unforgiven',
          tagline: "It's a hell of a thing, killing a man",
          released: 1992,
        },
      },
      {
        id: '202',
        data: {
          type: 'Person',
          name: 'Richard Harris',
          born: 1930,
        },
      },
      {
        id: '203',
        data: {
          type: 'Person',
          name: 'Clint Eastwood',
          born: 1930,
        },
      },
      {
        id: '204',
        data: {
          type: 'Movie',
          title: 'Johnny Mnemonic',
          tagline: 'The hottest data on earth. In the coolest head in town',
          released: 1995,
        },
      },
      {
        id: '205',
        data: {
          type: 'Person',
          name: 'Takeshi Kitano',
          born: 1947,
        },
      },
      {
        id: '206',
        data: {
          type: 'Person',
          name: 'Dina Meyer',
          born: 1968,
        },
      },
      {
        id: '207',
        data: {
          type: 'Person',
          name: 'Ice-T',
          born: 1958,
        },
      },
      {
        id: '208',
        data: {
          type: 'Person',
          name: 'Robert Longo',
          born: 1953,
        },
      },
      {
        id: '209',
        data: {
          type: 'Movie',
          title: 'Cloud Atlas',
          tagline: 'Everything is connected',
          released: 2012,
        },
      },
      {
        id: '210',
        data: {
          type: 'Person',
          name: 'Halle Berry',
          born: 1966,
        },
      },
      {
        id: '211',
        data: {
          type: 'Person',
          name: 'Jim Broadbent',
          born: 1949,
        },
      },
      {
        id: '212',
        data: {
          type: 'Person',
          name: 'Tom Tykwer',
          born: 1965,
        },
      },
      {
        id: '213',
        data: {
          type: 'Person',
          name: 'David Mitchell',
          born: 1969,
        },
      },
      {
        id: '214',
        data: {
          type: 'Person',
          name: 'Stefan Arndt',
          born: 1961,
        },
      },
      {
        id: '215',
        data: {
          type: 'Movie',
          title: 'The Da Vinci Code',
          tagline: 'Break The Codes',
          released: 2006,
        },
      },
      {
        id: '216',
        data: {
          type: 'Person',
          name: 'Ian McKellen',
          born: 1939,
        },
      },
      {
        id: '217',
        data: {
          type: 'Person',
          name: 'Audrey Tautou',
          born: 1976,
        },
      },
      {
        id: '218',
        data: {
          type: 'Person',
          name: 'Paul Bettany',
          born: 1971,
        },
      },
      {
        id: '219',
        data: {
          type: 'Person',
          name: 'Ron Howard',
          born: 1954,
        },
      },
      {
        id: '220',
        data: {
          type: 'Movie',
          title: 'V for Vendetta',
          tagline: 'Freedom! Forever!',
          released: 2006,
        },
      },
      {
        id: '221',
        data: {
          type: 'Person',
          name: 'Natalie Portman',
          born: 1981,
        },
      },
      {
        id: '222',
        data: {
          type: 'Person',
          name: 'Stephen Rea',
          born: 1946,
        },
      },
      {
        id: '223',
        data: {
          type: 'Person',
          name: 'John Hurt',
          born: 1940,
        },
      },
      {
        id: '224',
        data: {
          type: 'Person',
          name: 'Ben Miles',
          born: 1967,
        },
      },
      {
        id: '225',
        data: {
          type: 'Movie',
          title: 'Speed Racer',
          tagline: 'Speed has no limits',
          released: 2008,
        },
      },
      {
        id: '226',
        data: {
          type: 'Person',
          name: 'Emile Hirsch',
          born: 1985,
        },
      },
      {
        id: '227',
        data: {
          type: 'Person',
          name: 'John Goodman',
          born: 1960,
        },
      },
      {
        id: '228',
        data: {
          type: 'Person',
          name: 'Susan Sarandon',
          born: 1946,
        },
      },
      {
        id: '229',
        data: {
          type: 'Person',
          name: 'Matthew Fox',
          born: 1966,
        },
      },
      {
        id: '230',
        data: {
          type: 'Person',
          name: 'Christina Ricci',
          born: 1980,
        },
      },
      {
        id: '231',
        data: {
          type: 'Person',
          name: 'Rain',
          born: 1982,
        },
      },
      {
        id: '232',
        data: {
          type: 'Movie',
          title: 'Ninja Assassin',
          tagline: 'Prepare to enter a secret world of assassins',
          released: 2009,
        },
      },
      {
        id: '233',
        data: {
          type: 'Person',
          name: 'Naomie Harris',
        },
      },
      {
        id: '234',
        data: {
          type: 'Movie',
          title: 'The Green Mile',
          tagline: "Walk a mile you'll never forget.",
          released: 1999,
        },
      },
      {
        id: '235',
        data: {
          type: 'Person',
          name: 'Michael Clarke Duncan',
          born: 1957,
        },
      },
      {
        id: '236',
        data: {
          type: 'Person',
          name: 'David Morse',
          born: 1953,
        },
      },
      {
        id: '237',
        data: {
          type: 'Person',
          name: 'Sam Rockwell',
          born: 1968,
        },
      },
      {
        id: '238',
        data: {
          type: 'Person',
          name: 'Gary Sinise',
          born: 1955,
        },
      },
      {
        id: '239',
        data: {
          type: 'Person',
          name: 'Patricia Clarkson',
          born: 1959,
        },
      },
      {
        id: '240',
        data: {
          type: 'Person',
          name: 'Frank Darabont',
          born: 1959,
        },
      },
      {
        id: '241',
        data: {
          type: 'Movie',
          title: 'Frost/Nixon',
          tagline: '400 million people were waiting for the truth.',
          released: 2008,
        },
      },
      {
        id: '242',
        data: {
          type: 'Person',
          name: 'Frank Langella',
          born: 1938,
        },
      },
      {
        id: '243',
        data: {
          type: 'Person',
          name: 'Michael Sheen',
          born: 1969,
        },
      },
      {
        id: '244',
        data: {
          type: 'Person',
          name: 'Oliver Platt',
          born: 1960,
        },
      },
      {
        id: '245',
        data: {
          type: 'Movie',
          title: 'Hoffa',
          tagline: "He didn't want law. He wanted justice.",
          released: 1992,
        },
      },
      {
        id: '246',
        data: {
          type: 'Person',
          name: 'Danny DeVito',
          born: 1944,
        },
      },
      {
        id: '247',
        data: {
          type: 'Person',
          name: 'John C. Reilly',
          born: 1965,
        },
      },
      {
        id: '248',
        data: {
          type: 'Movie',
          title: 'Apollo 13',
          tagline: 'Houston, we have a problem.',
          released: 1995,
        },
      },
      {
        id: '249',
        data: {
          type: 'Person',
          name: 'Ed Harris',
          born: 1950,
        },
      },
      {
        id: '250',
        data: {
          type: 'Person',
          name: 'Bill Paxton',
          born: 1955,
        },
      },
      {
        id: '251',
        data: {
          type: 'Movie',
          title: 'Twister',
          tagline: "Don't Breathe. Don't Look Back.",
          released: 1996,
        },
      },
      {
        id: '252',
        data: {
          type: 'Person',
          name: 'Philip Seymour Hoffman',
          born: 1967,
        },
      },
      {
        id: '253',
        data: {
          type: 'Person',
          name: 'Jan de Bont',
          born: 1943,
        },
      },
      {
        id: '254',
        data: {
          type: 'Movie',
          title: 'Cast Away',
          tagline: 'At the edge of the world, his journey begins.',
          released: 2000,
        },
      },
      {
        id: '255',
        data: {
          type: 'Person',
          name: 'Robert Zemeckis',
          born: 1951,
        },
      },
      {
        id: '256',
        data: {
          type: 'Movie',
          title: "One Flew Over the Cuckoo's Nest",
          tagline: "If he's crazy, what does that make you?",
          released: 1975,
        },
      },
      {
        id: '257',
        data: {
          type: 'Person',
          name: 'Milos Forman',
          born: 1932,
        },
      },
      {
        id: '258',
        data: {
          type: 'Movie',
          title: "Something's Gotta Give",
          released: 2003,
        },
      },
      {
        id: '259',
        data: {
          type: 'Person',
          name: 'Diane Keaton',
          born: 1946,
        },
      },
      {
        id: '260',
        data: {
          type: 'Person',
          name: 'Nancy Meyers',
          born: 1949,
        },
      },
      {
        id: '261',
        data: {
          type: 'Movie',
          title: 'Bicentennial Man',
          tagline: "One robot's 200 year journey to become an ordinary man.",
          released: 1999,
        },
      },
      {
        id: '276',
        data: {
          type: 'Person',
          name: 'Keanu Reeves',
          born: 1964,
        },
      },
      {
        id: '277',
        data: {
          type: 'Person',
          name: 'Carrie-Anne Moss',
          born: 1967,
        },
      },
      {
        id: '278',
        data: {
          type: 'Person',
          name: 'Laurence Fishburne',
          born: 1961,
        },
      },
      {
        id: '279',
        data: {
          type: 'Person',
          name: 'Hugo Weaving',
          born: 1960,
        },
      },
      {
        id: '280',
        data: {
          type: 'Person',
          name: 'Lilly Wachowski',
          born: 1967,
        },
      },
      {
        id: '281',
        data: {
          type: 'Person',
          name: 'Lana Wachowski',
          born: 1965,
        },
      },
      {
        id: '282',
        data: {
          type: 'Person',
          name: 'Joel Silver',
          born: 1952,
        },
      },
      {
        id: '283',
        data: {
          type: 'Person',
          name: 'Emil Eifrem',
          born: 1978,
        },
      },
      {
        id: '284',
        data: {
          type: 'Movie',
          title: 'The Matrix Reloaded',
          tagline: 'Free your mind',
          released: 2003,
        },
      },
      {
        id: '285',
        data: {
          type: 'Movie',
          title: 'The Matrix Revolutions',
          tagline: 'Everything that has a beginning has an end',
          released: 2003,
        },
      },
      {
        id: '286',
        data: {
          type: 'Movie',
          title: "The Devil's Advocate",
          tagline: 'Evil has its winning ways',
          released: 1997,
        },
      },
      {
        id: '287',
        data: {
          type: 'Person',
          name: 'Charlize Theron',
          born: 1975,
        },
      },
      {
        id: '288',
        data: {
          type: 'Person',
          name: 'Al Pacino',
          born: 1940,
        },
      },
      {
        id: '289',
        data: {
          type: 'Person',
          name: 'Taylor Hackford',
          born: 1944,
        },
      },
      {
        id: '290',
        data: {
          type: 'Movie',
          title: 'A Few Good Men',
          tagline:
            "In the heart of the nation's capital, in a courthouse of the U.S. government, one man will stop at nothing to keep his honor, and one will stop at nothing to find the truth.",
          released: 1992,
        },
      },
      {
        id: '291',
        data: {
          type: 'Person',
          name: 'Tom Cruise',
          born: 1962,
        },
      },
      {
        id: '292',
        data: {
          type: 'Person',
          name: 'Jack Nicholson',
          born: 1937,
        },
      },
      {
        id: '293',
        data: {
          type: 'Person',
          name: 'Demi Moore',
          born: 1962,
        },
      },
      {
        id: '294',
        data: {
          type: 'Person',
          name: 'Kevin Bacon',
          born: 1958,
        },
      },
      {
        id: '295',
        data: {
          type: 'Person',
          name: 'Kiefer Sutherland',
          born: 1966,
        },
      },
      {
        id: '296',
        data: {
          type: 'Person',
          name: 'Noah Wyle',
          born: 1971,
        },
      },
      {
        id: '297',
        data: {
          type: 'Person',
          name: 'Cuba Gooding Jr.',
          born: 1968,
        },
      },
      {
        id: '298',
        data: {
          type: 'Person',
          name: 'Kevin Pollak',
          born: 1957,
        },
      },
      {
        id: '299',
        data: {
          type: 'Person',
          name: 'J.T. Walsh',
          born: 1943,
        },
      },
      {
        id: '300',
        data: {
          type: 'Person',
          name: 'James Marshall',
          born: 1967,
        },
      },
      {
        id: '301',
        data: {
          type: 'Person',
          name: 'Christopher Guest',
          born: 1948,
        },
      },
      {
        id: '302',
        data: {
          type: 'Person',
          name: 'Rob Reiner',
          born: 1947,
        },
      },
      {
        id: '303',
        data: {
          type: 'Person',
          name: 'Aaron Sorkin',
          born: 1961,
        },
      },
      {
        id: '304',
        data: {
          type: 'Movie',
          title: 'Top Gun',
          tagline: 'I feel the need, the need for speed.',
          released: 1986,
        },
      },
      {
        id: '305',
        data: {
          type: 'Person',
          name: 'Kelly McGillis',
          born: 1957,
        },
      },
      {
        id: '306',
        data: {
          type: 'Person',
          name: 'Val Kilmer',
          born: 1959,
        },
      },
      {
        id: '307',
        data: {
          type: 'Person',
          name: 'Anthony Edwards',
          born: 1962,
        },
      },
      {
        id: '308',
        data: {
          type: 'Person',
          name: 'Tom Skerritt',
          born: 1933,
        },
      },
      {
        id: '309',
        data: {
          type: 'Person',
          name: 'Meg Ryan',
          born: 1961,
        },
      },
      {
        id: '310',
        data: {
          type: 'Person',
          name: 'Tony Scott',
          born: 1944,
        },
      },
      {
        id: '311',
        data: {
          type: 'Person',
          name: 'Jim Cash',
          born: 1941,
        },
      },
      {
        id: '312',
        data: {
          type: 'Movie',
          title: 'Jerry Maguire',
          tagline: 'The rest of his life begins now.',
          released: 2000,
        },
      },
      {
        id: '313',
        data: {
          type: 'Person',
          name: 'Renee Zellweger',
          born: 1969,
        },
      },
      {
        id: '314',
        data: {
          type: 'Person',
          name: 'Kelly Preston',
          born: 1962,
        },
      },
      {
        id: '315',
        data: {
          type: 'Person',
          name: "Jerry O'Connell",
          born: 1974,
        },
      },
      {
        id: '316',
        data: {
          type: 'Person',
          name: 'Jay Mohr',
          born: 1970,
        },
      },
      {
        id: '317',
        data: {
          type: 'Person',
          name: 'Bonnie Hunt',
          born: 1961,
        },
      },
      {
        id: '318',
        data: {
          type: 'Person',
          name: 'Regina King',
          born: 1971,
        },
      },
      {
        id: '319',
        data: {
          type: 'Person',
          name: 'Jonathan Lipnicki',
          born: 1996,
        },
      },
      {
        id: '320',
        data: {
          type: 'Person',
          name: 'Cameron Crowe',
          born: 1957,
        },
      },
      {
        id: '321',
        data: {
          type: 'Movie',
          title: 'Stand By Me',
          tagline:
            "For some, it's the last real taste of innocence, and the first real taste of life. But for everyone, it's the time that memories are made of.",
          released: 1986,
        },
      },
      {
        id: '322',
        data: {
          type: 'Person',
          name: 'River Phoenix',
          born: 1970,
        },
      },
      {
        id: '323',
        data: {
          type: 'Person',
          name: 'Corey Feldman',
          born: 1971,
        },
      },
      {
        id: '324',
        data: {
          type: 'Person',
          name: 'Wil Wheaton',
          born: 1972,
        },
      },
      {
        id: '325',
        data: {
          type: 'Person',
          name: 'John Cusack',
          born: 1966,
        },
      },
      {
        id: '326',
        data: {
          type: 'Person',
          name: 'Marshall Bell',
          born: 1942,
        },
      },
      {
        id: '327',
        data: {
          type: 'Person',
          name: 'Chris Columbus',
          born: 1958,
        },
      },
      {
        id: '328',
        data: {
          type: 'Movie',
          title: "Charlie Wilson's War",
          tagline: "A stiff drink. A little mascara. A lot of nerve. Who said they couldn't bring down the Soviet empire.",
          released: 2007,
        },
      },
      {
        id: '329',
        data: {
          type: 'Person',
          name: 'Julia Roberts',
          born: 1967,
        },
      },
      {
        id: '330',
        data: {
          type: 'Movie',
          title: 'The Polar Express',
          tagline: 'This Holiday Season… Believe',
          released: 2004,
        },
      },
      {
        id: '331',
        data: {
          type: 'Movie',
          title: 'A League of Their Own',
          tagline: 'Once in a lifetime you get a chance to do something different.',
          released: 1992,
        },
      },
      {
        id: '332',
        data: {
          type: 'Person',
          name: 'Madonna',
          born: 1954,
        },
      },
      {
        id: '333',
        data: {
          type: 'Person',
          name: 'Geena Davis',
          born: 1956,
        },
      },
      {
        id: '334',
        data: {
          type: 'Person',
          name: 'Lori Petty',
          born: 1963,
        },
      },
      {
        id: '335',
        data: {
          type: 'Movie',
          title: 'The Matrix',
          tagline: 'Welcome to the Real World',
          released: 1999,
        },
      },
      {
        id: '336',
        data: {
          type: 'Person',
          name: 'Penny Marshall',
          born: 1943,
        },
      },
      {
        id: '337',
        data: {
          type: 'Person',
          name: 'Paul Blythe',
        },
      },
      {
        id: '338',
        data: {
          type: 'Person',
          name: 'Angela Scope',
        },
      },
      {
        id: '339',
        data: {
          type: 'Person',
          name: 'Jessica Thompson',
        },
      },
      {
        id: '340',
        data: {
          type: 'Person',
          name: 'James Thompson',
        },
      },
    ],
    links: [
      {
        id: '81',
        from: '309',
        to: '185',
        data: {
          type: 'ACTED_IN',
          roles: ['Sally Albright'],
        },
      },
      {
        id: '85',
        from: '187',
        to: '185',
        data: {
          type: 'ACTED_IN',
          roles: ['Marie'],
        },
      },
      {
        id: '86',
        from: '188',
        to: '185',
        data: {
          type: 'ACTED_IN',
          roles: ['Jess'],
        },
      },
      {
        id: '114',
        from: '302',
        to: '185',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '123',
        from: '302',
        to: '185',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '149',
        from: '176',
        to: '185',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '182',
        from: '176',
        to: '185',
        data: {
          type: 'WROTE',
        },
      },
      {
        id: '183',
        from: '175',
        to: '189',
        data: {
          type: 'ACTED_IN',
          roles: ['Mr. White'],
        },
      },
      {
        id: '184',
        from: '190',
        to: '189',
        data: {
          type: 'ACTED_IN',
          roles: ['Faye Dolan'],
        },
      },
      {
        id: '185',
        from: '287',
        to: '189',
        data: {
          type: 'ACTED_IN',
          roles: ['Tina'],
        },
      },
      {
        id: '191',
        from: '175',
        to: '189',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '192',
        from: '276',
        to: '191',
        data: {
          type: 'ACTED_IN',
          roles: ['Shane Falco'],
        },
      },
      {
        id: '193',
        from: '192',
        to: '191',
        data: {
          type: 'ACTED_IN',
          roles: ['Annabelle Farrell'],
        },
      },
      {
        id: '194',
        from: '193',
        to: '191',
        data: {
          type: 'ACTED_IN',
          roles: ['Jimmy McGinty'],
        },
      },
      {
        id: '195',
        from: '194',
        to: '191',
        data: {
          type: 'ACTED_IN',
          roles: ['Clifford Franklin'],
        },
      },
      {
        id: '196',
        from: '195',
        to: '191',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '197',
        from: '326',
        to: '196',
        data: {
          type: 'ACTED_IN',
          roles: ['Admiral'],
        },
      },
      {
        id: '198',
        from: '197',
        to: '196',
        data: {
          type: 'ACTED_IN',
          roles: ['Dieter Dengler'],
        },
      },
      {
        id: '199',
        from: '198',
        to: '196',
        data: {
          type: 'ACTED_IN',
          roles: ['Squad Leader'],
        },
      },
      {
        id: '200',
        from: '174',
        to: '196',
        data: {
          type: 'ACTED_IN',
          roles: ['Duane'],
        },
      },
      {
        id: '201',
        from: '143',
        to: '196',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '202',
        from: '144',
        to: '199',
        data: {
          type: 'ACTED_IN',
          roles: ['Armand Goldman'],
        },
      },
      {
        id: '203',
        from: '184',
        to: '199',
        data: {
          type: 'ACTED_IN',
          roles: ['Albert Goldman'],
        },
      },
      {
        id: '204',
        from: '193',
        to: '199',
        data: {
          type: 'ACTED_IN',
          roles: ['Sen. Kevin Keeley'],
        },
      },
      {
        id: '205',
        from: '200',
        to: '199',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '206',
        from: '202',
        to: '201',
        data: {
          type: 'ACTED_IN',
          roles: ['English Bob'],
        },
      },
      {
        id: '207',
        from: '203',
        to: '201',
        data: {
          type: 'ACTED_IN',
          roles: ['Bill Munny'],
        },
      },
      {
        id: '208',
        from: '193',
        to: '201',
        data: {
          type: 'ACTED_IN',
          roles: ['Little Bill Daggett'],
        },
      },
      {
        id: '209',
        from: '203',
        to: '201',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '210',
        from: '276',
        to: '204',
        data: {
          type: 'ACTED_IN',
          roles: ['Johnny Mnemonic'],
        },
      },
      {
        id: '211',
        from: '205',
        to: '204',
        data: {
          type: 'ACTED_IN',
          roles: ['Takahashi'],
        },
      },
      {
        id: '212',
        from: '206',
        to: '204',
        data: {
          type: 'ACTED_IN',
          roles: ['Jane'],
        },
      },
      {
        id: '213',
        from: '207',
        to: '204',
        data: {
          type: 'ACTED_IN',
          roles: ['J-Bone'],
        },
      },
      {
        id: '214',
        from: '208',
        to: '204',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '215',
        from: '175',
        to: '209',
        data: {
          type: 'ACTED_IN',
          roles: ['Zachry', 'Dr. Henry Goose', 'Isaac Sachs', 'Dermot Hoggins'],
        },
      },
      {
        id: '216',
        from: '279',
        to: '209',
        data: {
          type: 'ACTED_IN',
          roles: ['Bill Smoke', 'Haskell Moore', 'Tadeusz Kesselring', 'Nurse Noakes', 'Boardman Mephi', 'Old Georgie'],
        },
      },
      {
        id: '217',
        from: '210',
        to: '209',
        data: {
          type: 'ACTED_IN',
          roles: ['Luisa Rey', 'Jocasta Ayrs', 'Ovid', 'Meronym'],
        },
      },
      {
        id: '218',
        from: '211',
        to: '209',
        data: {
          type: 'ACTED_IN',
          roles: ['Vyvyan Ayrs', 'Captain Molyneux', 'Timothy Cavendish'],
        },
      },
      {
        id: '219',
        from: '212',
        to: '209',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '220',
        from: '280',
        to: '209',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '221',
        from: '281',
        to: '209',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '222',
        from: '213',
        to: '209',
        data: {
          type: 'WROTE',
        },
      },
      {
        id: '223',
        from: '214',
        to: '209',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '224',
        from: '175',
        to: '215',
        data: {
          type: 'ACTED_IN',
          roles: ['Dr. Robert Langdon'],
        },
      },
      {
        id: '225',
        from: '216',
        to: '215',
        data: {
          type: 'ACTED_IN',
          roles: ['Sir Leight Teabing'],
        },
      },
      {
        id: '226',
        from: '217',
        to: '215',
        data: {
          type: 'ACTED_IN',
          roles: ['Sophie Neveu'],
        },
      },
      {
        id: '227',
        from: '218',
        to: '215',
        data: {
          type: 'ACTED_IN',
          roles: ['Silas'],
        },
      },
      {
        id: '228',
        from: '219',
        to: '215',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '229',
        from: '279',
        to: '220',
        data: {
          type: 'ACTED_IN',
          roles: ['V'],
        },
      },
      {
        id: '230',
        from: '221',
        to: '220',
        data: {
          type: 'ACTED_IN',
          roles: ['Evey Hammond'],
        },
      },
      {
        id: '231',
        from: '222',
        to: '220',
        data: {
          type: 'ACTED_IN',
          roles: ['Eric Finch'],
        },
      },
      {
        id: '232',
        from: '223',
        to: '220',
        data: {
          type: 'ACTED_IN',
          roles: ['High Chancellor Adam Sutler'],
        },
      },
      {
        id: '233',
        from: '224',
        to: '220',
        data: {
          type: 'ACTED_IN',
          roles: ['Dascomb'],
        },
      },
      {
        id: '234',
        from: '300',
        to: '220',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '235',
        from: '280',
        to: '220',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '236',
        from: '281',
        to: '220',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '237',
        from: '282',
        to: '220',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '238',
        from: '280',
        to: '220',
        data: {
          type: 'WROTE',
        },
      },
      {
        id: '239',
        from: '281',
        to: '220',
        data: {
          type: 'WROTE',
        },
      },
      {
        id: '240',
        from: '226',
        to: '225',
        data: {
          type: 'ACTED_IN',
          roles: ['Speed Racer'],
        },
      },
      {
        id: '241',
        from: '227',
        to: '225',
        data: {
          type: 'ACTED_IN',
          roles: ['Pops'],
        },
      },
      {
        id: '242',
        from: '228',
        to: '225',
        data: {
          type: 'ACTED_IN',
          roles: ['Mom'],
        },
      },
      {
        id: '243',
        from: '229',
        to: '225',
        data: {
          type: 'ACTED_IN',
          roles: ['Racer X'],
        },
      },
      {
        id: '244',
        from: '230',
        to: '225',
        data: {
          type: 'ACTED_IN',
          roles: ['Trixie'],
        },
      },
      {
        id: '245',
        from: '231',
        to: '225',
        data: {
          type: 'ACTED_IN',
          roles: ['Taejo Togokahn'],
        },
      },
      {
        id: '246',
        from: '224',
        to: '225',
        data: {
          type: 'ACTED_IN',
          roles: ['Cass Jones'],
        },
      },
      {
        id: '247',
        from: '280',
        to: '225',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '248',
        from: '281',
        to: '225',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '249',
        from: '280',
        to: '225',
        data: {
          type: 'WROTE',
        },
      },
      {
        id: '250',
        from: '281',
        to: '225',
        data: {
          type: 'WROTE',
        },
      },
      {
        id: '251',
        from: '276',
        to: '335',
        data: {
          type: 'ACTED_IN',
          roles: ['Neo'],
        },
      },
      {
        id: '252',
        from: '277',
        to: '335',
        data: {
          type: 'ACTED_IN',
          roles: ['Trinity'],
        },
      },
      {
        id: '253',
        from: '278',
        to: '335',
        data: {
          type: 'ACTED_IN',
          roles: ['Morpheus'],
        },
      },
      {
        id: '254',
        from: '279',
        to: '335',
        data: {
          type: 'ACTED_IN',
          roles: ['Agent Smith'],
        },
      },
      {
        id: '255',
        from: '280',
        to: '335',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '256',
        from: '281',
        to: '335',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '257',
        from: '282',
        to: '335',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '258',
        from: '283',
        to: '335',
        data: {
          type: 'ACTED_IN',
          roles: ['Emil'],
        },
      },
      {
        id: '259',
        from: '276',
        to: '284',
        data: {
          type: 'ACTED_IN',
          roles: ['Neo'],
        },
      },
      {
        id: '260',
        from: '277',
        to: '284',
        data: {
          type: 'ACTED_IN',
          roles: ['Trinity'],
        },
      },
      {
        id: '261',
        from: '282',
        to: '225',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '262',
        from: '231',
        to: '232',
        data: {
          type: 'ACTED_IN',
          roles: ['Raizo'],
        },
      },
      {
        id: '263',
        from: '233',
        to: '232',
        data: {
          type: 'ACTED_IN',
          roles: ['Mika Coretti'],
        },
      },
      {
        id: '264',
        from: '168',
        to: '232',
        data: {
          type: 'ACTED_IN',
          roles: ['Takeshi'],
        },
      },
      {
        id: '265',
        from: '224',
        to: '232',
        data: {
          type: 'ACTED_IN',
          roles: ['Ryan Maslow'],
        },
      },
      {
        id: '266',
        from: '300',
        to: '232',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '267',
        from: '280',
        to: '232',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '268',
        from: '281',
        to: '232',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '269',
        from: '282',
        to: '232',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '270',
        from: '175',
        to: '234',
        data: {
          type: 'ACTED_IN',
          roles: ['Paul Edgecomb'],
        },
      },
      {
        id: '271',
        from: '235',
        to: '234',
        data: {
          type: 'ACTED_IN',
          roles: ['John Coffey'],
        },
      },
      {
        id: '272',
        from: '236',
        to: '234',
        data: {
          type: 'ACTED_IN',
          roles: ['Brutus "Brutal" Howell'],
        },
      },
      {
        id: '273',
        from: '317',
        to: '234',
        data: {
          type: 'ACTED_IN',
          roles: ['Jan Edgecomb'],
        },
      },
      {
        id: '274',
        from: '169',
        to: '234',
        data: {
          type: 'ACTED_IN',
          roles: ['Warden Hal Moores'],
        },
      },
      {
        id: '275',
        from: '237',
        to: '234',
        data: {
          type: 'ACTED_IN',
          roles: ['"Wild Bill" Wharton'],
        },
      },
      {
        id: '276',
        from: '238',
        to: '234',
        data: {
          type: 'ACTED_IN',
          roles: ['Burt Hammersmith'],
        },
      },
      {
        id: '277',
        from: '239',
        to: '234',
        data: {
          type: 'ACTED_IN',
          roles: ['Melinda Moores'],
        },
      },
      {
        id: '278',
        from: '240',
        to: '234',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '279',
        from: '242',
        to: '241',
        data: {
          type: 'ACTED_IN',
          roles: ['Richard Nixon'],
        },
      },
      {
        id: '280',
        from: '243',
        to: '241',
        data: {
          type: 'ACTED_IN',
          roles: ['David Frost'],
        },
      },
      {
        id: '281',
        from: '294',
        to: '241',
        data: {
          type: 'ACTED_IN',
          roles: ['Jack Brennan'],
        },
      },
      {
        id: '282',
        from: '244',
        to: '241',
        data: {
          type: 'ACTED_IN',
          roles: ['Bob Zelnick'],
        },
      },
      {
        id: '283',
        from: '237',
        to: '241',
        data: {
          type: 'ACTED_IN',
          roles: ['James Reston, Jr.'],
        },
      },
      {
        id: '284',
        from: '219',
        to: '241',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '285',
        from: '292',
        to: '245',
        data: {
          type: 'ACTED_IN',
          roles: ['Hoffa'],
        },
      },
      {
        id: '286',
        from: '246',
        to: '245',
        data: {
          type: 'ACTED_IN',
          roles: ['Robert "Bobby" Ciaro'],
        },
      },
      {
        id: '287',
        from: '299',
        to: '245',
        data: {
          type: 'ACTED_IN',
          roles: ['Frank Fitzsimmons'],
        },
      },
      {
        id: '288',
        from: '247',
        to: '245',
        data: {
          type: 'ACTED_IN',
          roles: ['Peter "Pete" Connelly'],
        },
      },
      {
        id: '289',
        from: '246',
        to: '245',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '290',
        from: '175',
        to: '248',
        data: {
          type: 'ACTED_IN',
          roles: ['Jim Lovell'],
        },
      },
      {
        id: '291',
        from: '294',
        to: '248',
        data: {
          type: 'ACTED_IN',
          roles: ['Jack Swigert'],
        },
      },
      {
        id: '292',
        from: '249',
        to: '248',
        data: {
          type: 'ACTED_IN',
          roles: ['Gene Kranz'],
        },
      },
      {
        id: '293',
        from: '250',
        to: '248',
        data: {
          type: 'ACTED_IN',
          roles: ['Fred Haise'],
        },
      },
      {
        id: '294',
        from: '238',
        to: '248',
        data: {
          type: 'ACTED_IN',
          roles: ['Ken Mattingly'],
        },
      },
      {
        id: '295',
        from: '219',
        to: '248',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '296',
        from: '250',
        to: '251',
        data: {
          type: 'ACTED_IN',
          roles: ['Bill Harding'],
        },
      },
      {
        id: '297',
        from: '112',
        to: '251',
        data: {
          type: 'ACTED_IN',
          roles: ['Dr. Jo Harding'],
        },
      },
      {
        id: '298',
        from: '198',
        to: '251',
        data: {
          type: 'ACTED_IN',
          roles: ['Eddie'],
        },
      },
      {
        id: '299',
        from: '252',
        to: '251',
        data: {
          type: 'ACTED_IN',
          roles: ['Dustin "Dusty" Davis'],
        },
      },
      {
        id: '300',
        from: '253',
        to: '251',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '301',
        from: '175',
        to: '254',
        data: {
          type: 'ACTED_IN',
          roles: ['Chuck Noland'],
        },
      },
      {
        id: '302',
        from: '112',
        to: '254',
        data: {
          type: 'ACTED_IN',
          roles: ['Kelly Frears'],
        },
      },
      {
        id: '303',
        from: '255',
        to: '254',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '304',
        from: '292',
        to: '256',
        data: {
          type: 'ACTED_IN',
          roles: ['Randle McMurphy'],
        },
      },
      {
        id: '305',
        from: '246',
        to: '256',
        data: {
          type: 'ACTED_IN',
          roles: ['Martini'],
        },
      },
      {
        id: '306',
        from: '257',
        to: '256',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '307',
        from: '292',
        to: '258',
        data: {
          type: 'ACTED_IN',
          roles: ['Harry Sanborn'],
        },
      },
      {
        id: '308',
        from: '259',
        to: '258',
        data: {
          type: 'ACTED_IN',
          roles: ['Erica Barry'],
        },
      },
      {
        id: '309',
        from: '276',
        to: '258',
        data: {
          type: 'ACTED_IN',
          roles: ['Julian Mercer'],
        },
      },
      {
        id: '310',
        from: '260',
        to: '258',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '311',
        from: '260',
        to: '258',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '312',
        from: '260',
        to: '258',
        data: {
          type: 'WROTE',
        },
      },
      {
        id: '313',
        from: '144',
        to: '261',
        data: {
          type: 'ACTED_IN',
          roles: ['Andrew Marin'],
        },
      },
      {
        id: '314',
        from: '244',
        to: '261',
        data: {
          type: 'ACTED_IN',
          roles: ['Rupert Burns'],
        },
      },
      {
        id: '315',
        from: '327',
        to: '261',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '316',
        from: '175',
        to: '328',
        data: {
          type: 'ACTED_IN',
          roles: ['Rep. Charlie Wilson'],
        },
      },
      {
        id: '317',
        from: '329',
        to: '328',
        data: {
          type: 'ACTED_IN',
          roles: ['Joanne Herring'],
        },
      },
      {
        id: '318',
        from: '252',
        to: '328',
        data: {
          type: 'ACTED_IN',
          roles: ['Gust Avrakotos'],
        },
      },
      {
        id: '319',
        from: '200',
        to: '328',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '320',
        from: '175',
        to: '330',
        data: {
          type: 'ACTED_IN',
          roles: ['Hero Boy', 'Father', 'Conductor', 'Hobo', 'Scrooge', 'Santa Claus'],
        },
      },
      {
        id: '321',
        from: '255',
        to: '330',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '322',
        from: '175',
        to: '331',
        data: {
          type: 'ACTED_IN',
          roles: ['Jimmy Dugan'],
        },
      },
      {
        id: '323',
        from: '333',
        to: '331',
        data: {
          type: 'ACTED_IN',
          roles: ['Dottie Hinson'],
        },
      },
      {
        id: '324',
        from: '334',
        to: '331',
        data: {
          type: 'ACTED_IN',
          roles: ['Kit Keller'],
        },
      },
      {
        id: '325',
        from: '181',
        to: '331',
        data: {
          type: 'ACTED_IN',
          roles: ['Doris Murphy'],
        },
      },
      {
        id: '326',
        from: '332',
        to: '331',
        data: {
          type: 'ACTED_IN',
          roles: ['"All the Way" Mae Mordabito'],
        },
      },
      {
        id: '327',
        from: '250',
        to: '331',
        data: {
          type: 'ACTED_IN',
          roles: ['Bob Hinson'],
        },
      },
      {
        id: '328',
        from: '336',
        to: '331',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '329',
        from: '340',
        to: '339',
        data: {
          type: 'FOLLOWS',
        },
      },
      {
        id: '330',
        from: '338',
        to: '339',
        data: {
          type: 'FOLLOWS',
        },
      },
      {
        id: '331',
        from: '337',
        to: '338',
        data: {
          type: 'FOLLOWS',
        },
      },
      {
        id: '332',
        from: '339',
        to: '209',
        data: {
          type: 'REVIEWED',
          summary: 'An amazing journey',
          rating: 95,
        },
      },
      {
        id: '333',
        from: '339',
        to: '191',
        data: {
          type: 'REVIEWED',
          summary: 'Silly, but fun',
          rating: 65,
        },
      },
      {
        id: '334',
        from: '340',
        to: '191',
        data: {
          type: 'REVIEWED',
          summary: 'The coolest football movie ever',
          rating: 100,
        },
      },
      {
        id: '335',
        from: '338',
        to: '191',
        data: {
          type: 'REVIEWED',
          summary: 'Pretty funny at times',
          rating: 62,
        },
      },
      {
        id: '336',
        from: '339',
        to: '201',
        data: {
          type: 'REVIEWED',
          summary: 'Dark, but compelling',
          rating: 85,
        },
      },
      {
        id: '337',
        from: '339',
        to: '199',
        data: {
          type: 'REVIEWED',
          summary: "Slapstick redeemed only by the Robin Williams and Gene Hackman's stellar performances",
          rating: 45,
        },
      },
      {
        id: '341',
        from: '278',
        to: '284',
        data: {
          type: 'ACTED_IN',
          roles: ['Morpheus'],
        },
      },
      {
        id: '342',
        from: '279',
        to: '284',
        data: {
          type: 'ACTED_IN',
          roles: ['Agent Smith'],
        },
      },
      {
        id: '343',
        from: '280',
        to: '284',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '344',
        from: '281',
        to: '284',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '345',
        from: '282',
        to: '284',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '346',
        from: '276',
        to: '285',
        data: {
          type: 'ACTED_IN',
          roles: ['Neo'],
        },
      },
      {
        id: '347',
        from: '277',
        to: '285',
        data: {
          type: 'ACTED_IN',
          roles: ['Trinity'],
        },
      },
      {
        id: '348',
        from: '278',
        to: '285',
        data: {
          type: 'ACTED_IN',
          roles: ['Morpheus'],
        },
      },
      {
        id: '349',
        from: '279',
        to: '285',
        data: {
          type: 'ACTED_IN',
          roles: ['Agent Smith'],
        },
      },
      {
        id: '350',
        from: '280',
        to: '285',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '351',
        from: '281',
        to: '285',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '352',
        from: '282',
        to: '285',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '353',
        from: '276',
        to: '286',
        data: {
          type: 'ACTED_IN',
          roles: ['Kevin Lomax'],
        },
      },
      {
        id: '354',
        from: '287',
        to: '286',
        data: {
          type: 'ACTED_IN',
          roles: ['Mary Ann Lomax'],
        },
      },
      {
        id: '355',
        from: '288',
        to: '286',
        data: {
          type: 'ACTED_IN',
          roles: ['John Milton'],
        },
      },
      {
        id: '356',
        from: '289',
        to: '286',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '357',
        from: '291',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Lt. Daniel Kaffee'],
        },
      },
      {
        id: '358',
        from: '292',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Col. Nathan R. Jessup'],
        },
      },
      {
        id: '359',
        from: '293',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Lt. Cdr. JoAnne Galloway'],
        },
      },
      {
        id: '360',
        from: '294',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Capt. Jack Ross'],
        },
      },
      {
        id: '361',
        from: '295',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Lt. Jonathan Kendrick'],
        },
      },
      {
        id: '362',
        from: '296',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Cpl. Jeffrey Barnes'],
        },
      },
      {
        id: '363',
        from: '297',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Cpl. Carl Hammaker'],
        },
      },
      {
        id: '364',
        from: '298',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Lt. Sam Weinberg'],
        },
      },
      {
        id: '365',
        from: '299',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Lt. Col. Matthew Andrew Markinson'],
        },
      },
      {
        id: '366',
        from: '300',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Pfc. Louden Downey'],
        },
      },
      {
        id: '367',
        from: '301',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Dr. Stone'],
        },
      },
      {
        id: '368',
        from: '303',
        to: '290',
        data: {
          type: 'ACTED_IN',
          roles: ['Man in Bar'],
        },
      },
      {
        id: '369',
        from: '302',
        to: '290',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '370',
        from: '303',
        to: '290',
        data: {
          type: 'WROTE',
        },
      },
      {
        id: '371',
        from: '291',
        to: '304',
        data: {
          type: 'ACTED_IN',
          roles: ['Maverick'],
        },
      },
      {
        id: '372',
        from: '305',
        to: '304',
        data: {
          type: 'ACTED_IN',
          roles: ['Charlie'],
        },
      },
      {
        id: '373',
        from: '306',
        to: '304',
        data: {
          type: 'ACTED_IN',
          roles: ['Iceman'],
        },
      },
      {
        id: '374',
        from: '307',
        to: '304',
        data: {
          type: 'ACTED_IN',
          roles: ['Goose'],
        },
      },
      {
        id: '375',
        from: '308',
        to: '304',
        data: {
          type: 'ACTED_IN',
          roles: ['Viper'],
        },
      },
      {
        id: '376',
        from: '309',
        to: '304',
        data: {
          type: 'ACTED_IN',
          roles: ['Carole'],
        },
      },
      {
        id: '377',
        from: '310',
        to: '304',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '378',
        from: '311',
        to: '304',
        data: {
          type: 'WROTE',
        },
      },
      {
        id: '379',
        from: '291',
        to: '312',
        data: {
          type: 'ACTED_IN',
          roles: ['Jerry Maguire'],
        },
      },
      {
        id: '380',
        from: '297',
        to: '312',
        data: {
          type: 'ACTED_IN',
          roles: ['Rod Tidwell'],
        },
      },
      {
        id: '381',
        from: '313',
        to: '312',
        data: {
          type: 'ACTED_IN',
          roles: ['Dorothy Boyd'],
        },
      },
      {
        id: '382',
        from: '314',
        to: '312',
        data: {
          type: 'ACTED_IN',
          roles: ['Avery Bishop'],
        },
      },
      {
        id: '383',
        from: '315',
        to: '312',
        data: {
          type: 'ACTED_IN',
          roles: ['Frank Cushman'],
        },
      },
      {
        id: '384',
        from: '316',
        to: '312',
        data: {
          type: 'ACTED_IN',
          roles: ['Bob Sugar'],
        },
      },
      {
        id: '385',
        from: '317',
        to: '312',
        data: {
          type: 'ACTED_IN',
          roles: ['Laurel Boyd'],
        },
      },
      {
        id: '386',
        from: '318',
        to: '312',
        data: {
          type: 'ACTED_IN',
          roles: ['Marcee Tidwell'],
        },
      },
      {
        id: '387',
        from: '319',
        to: '312',
        data: {
          type: 'ACTED_IN',
          roles: ['Ray Boyd'],
        },
      },
      {
        id: '388',
        from: '320',
        to: '312',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '389',
        from: '320',
        to: '312',
        data: {
          type: 'PRODUCED',
        },
      },
      {
        id: '390',
        from: '320',
        to: '312',
        data: {
          type: 'WROTE',
        },
      },
      {
        id: '391',
        from: '324',
        to: '321',
        data: {
          type: 'ACTED_IN',
          roles: ['Gordie Lachance'],
        },
      },
      {
        id: '392',
        from: '322',
        to: '321',
        data: {
          type: 'ACTED_IN',
          roles: ['Chris Chambers'],
        },
      },
      {
        id: '393',
        from: '315',
        to: '321',
        data: {
          type: 'ACTED_IN',
          roles: ['Vern Tessio'],
        },
      },
      {
        id: '394',
        from: '323',
        to: '321',
        data: {
          type: 'ACTED_IN',
          roles: ['Teddy Duchamp'],
        },
      },
      {
        id: '395',
        from: '325',
        to: '321',
        data: {
          type: 'ACTED_IN',
          roles: ['Denny Lachance'],
        },
      },
      {
        id: '396',
        from: '295',
        to: '321',
        data: {
          type: 'ACTED_IN',
          roles: ['Ace Merrill'],
        },
      },
      {
        id: '397',
        from: '326',
        to: '321',
        data: {
          type: 'ACTED_IN',
          roles: ['Mr. Lachance'],
        },
      },
      {
        id: '398',
        from: '302',
        to: '321',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '399',
        from: '292',
        to: '53',
        data: {
          type: 'ACTED_IN',
          roles: ['Melvin Udall'],
        },
      },
      {
        id: '400',
        from: '112',
        to: '53',
        data: {
          type: 'ACTED_IN',
          roles: ['Carol Connelly'],
        },
      },
      {
        id: '401',
        from: '117',
        to: '53',
        data: {
          type: 'ACTED_IN',
          roles: ['Simon Bishop'],
        },
      },
      {
        id: '402',
        from: '297',
        to: '53',
        data: {
          type: 'ACTED_IN',
          roles: ['Frank Sachs'],
        },
      },
      {
        id: '403',
        from: '119',
        to: '53',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '404',
        from: '144',
        to: '120',
        data: {
          type: 'ACTED_IN',
          roles: ['Chris Nielsen'],
        },
      },
      {
        id: '405',
        from: '297',
        to: '120',
        data: {
          type: 'ACTED_IN',
          roles: ['Albert Lewis'],
        },
      },
      {
        id: '406',
        from: '131',
        to: '120',
        data: {
          type: 'ACTED_IN',
          roles: ['Annie Collins-Nielsen'],
        },
      },
      {
        id: '407',
        from: '134',
        to: '120',
        data: {
          type: 'ACTED_IN',
          roles: ['The Tracker'],
        },
      },
      {
        id: '408',
        from: '143',
        to: '120',
        data: {
          type: 'ACTED_IN',
          roles: ['The Face'],
        },
      },
      {
        id: '409',
        from: '160',
        to: '120',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '410',
        from: '167',
        to: '166',
        data: {
          type: 'ACTED_IN',
          roles: ['Ishmael Chambers'],
        },
      },
      {
        id: '411',
        from: '168',
        to: '166',
        data: {
          type: 'ACTED_IN',
          roles: ['Kazuo Miyamoto'],
        },
      },
      {
        id: '412',
        from: '134',
        to: '166',
        data: {
          type: 'ACTED_IN',
          roles: ['Nels Gudmundsson'],
        },
      },
      {
        id: '413',
        from: '169',
        to: '166',
        data: {
          type: 'ACTED_IN',
          roles: ['Judge Fielding'],
        },
      },
      {
        id: '414',
        from: '170',
        to: '166',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '415',
        from: '175',
        to: '171',
        data: {
          type: 'ACTED_IN',
          roles: ['Joe Fox'],
        },
      },
      {
        id: '416',
        from: '309',
        to: '171',
        data: {
          type: 'ACTED_IN',
          roles: ['Kathleen Kelly'],
        },
      },
      {
        id: '417',
        from: '117',
        to: '171',
        data: {
          type: 'ACTED_IN',
          roles: ['Frank Navasky'],
        },
      },
      {
        id: '418',
        from: '172',
        to: '171',
        data: {
          type: 'ACTED_IN',
          roles: ['Patricia Eden'],
        },
      },
      {
        id: '419',
        from: '173',
        to: '171',
        data: {
          type: 'ACTED_IN',
          roles: ['Kevin Jackson'],
        },
      },
      {
        id: '420',
        from: '174',
        to: '171',
        data: {
          type: 'ACTED_IN',
          roles: ['George Pappas'],
        },
      },
      {
        id: '421',
        from: '176',
        to: '171',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '422',
        from: '175',
        to: '177',
        data: {
          type: 'ACTED_IN',
          roles: ['Sam Baldwin'],
        },
      },
      {
        id: '423',
        from: '309',
        to: '177',
        data: {
          type: 'ACTED_IN',
          roles: ['Annie Reed'],
        },
      },
      {
        id: '424',
        from: '178',
        to: '177',
        data: {
          type: 'ACTED_IN',
          roles: ['Suzy'],
        },
      },
      {
        id: '425',
        from: '179',
        to: '177',
        data: {
          type: 'ACTED_IN',
          roles: ['Walter'],
        },
      },
      {
        id: '426',
        from: '180',
        to: '177',
        data: {
          type: 'ACTED_IN',
          roles: ['Greg'],
        },
      },
      {
        id: '427',
        from: '181',
        to: '177',
        data: {
          type: 'ACTED_IN',
          roles: ['Becky'],
        },
      },
      {
        id: '428',
        from: '176',
        to: '177',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '429',
        from: '175',
        to: '182',
        data: {
          type: 'ACTED_IN',
          roles: ['Joe Banks'],
        },
      },
      {
        id: '430',
        from: '309',
        to: '182',
        data: {
          type: 'ACTED_IN',
          roles: ['DeDe', 'Angelica Graynamore', 'Patricia Graynamore'],
        },
      },
      {
        id: '431',
        from: '184',
        to: '182',
        data: {
          type: 'ACTED_IN',
          roles: ['Baw'],
        },
      },
      {
        id: '432',
        from: '183',
        to: '182',
        data: {
          type: 'DIRECTED',
        },
      },
      {
        id: '433',
        from: '186',
        to: '185',
        data: {
          type: 'ACTED_IN',
          roles: ['Harry Burns'],
        },
      },
      {
        id: '434',
        from: '339',
        to: '215',
        data: {
          type: 'REVIEWED',
          summary: 'A solid romp',
          rating: 68,
        },
      },
      {
        id: '435',
        from: '340',
        to: '215',
        data: {
          type: 'REVIEWED',
          summary: 'Fun, but a little far fetched',
          rating: 65,
        },
      },
      {
        id: '436',
        from: '339',
        to: '312',
        data: {
          type: 'REVIEWED',
          summary: 'You had me at Jerry',
          rating: 92,
        },
      },
    ],
  })
