//main subcategory file



import { SubCategory } from '../../types';

export const subCategories: SubCategory[] = [
  // Entertainment Sub-Categories

    {
      id: 'classic-movies',
      categoryId: 'entertainment',
      name: 'Classic Movies',
      description: 'Test your knowledge of timeless cinema classics',
      difficulty: 'intermediate',
      questionsCount: 20,
      imageUrl: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b',
      tags: ['classic films', 'golden age', 'film history'],
      popularity: 85,
      timeEstimate: '25 mins'
    },


    
    // {
    //   id: 'tv-series',
    //   categoryId: 'entertainment',
    //   name: 'TV Series',
    //   description: 'From sitcoms to dramas - test your TV show knowledge',
    //   difficulty: 'beginner',
    //   questionsCount: 15,
    //   imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1',
    //   tags: ['television', 'sitcoms', 'drama series'],
    //   popularity: 90,
    //   timeEstimate: '20 mins'
    // },
    // {
    //   id: 'pop-music',
    //   categoryId: 'entertainment',
    //   name: 'Pop Music',
    //   description: 'Challenge yourself with pop music trivia through the decades',
    //   difficulty: 'intermediate',
    //   questionsCount: 25,
    //   imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    //   tags: ['music', 'artists', 'albums'],
    //   popularity: 88,
    //   timeEstimate: '30 mins'
    // },
    // {
    //   id: 'golden-age-hollywood',
    //   categoryId: 'entertainment',
    //   name: 'Golden Age Hollywood',
    //   description: 'Explore classic films from the 1930s to 1960s',
    //   difficulty: 'intermediate',
    //   questionsCount: 20,
    //   imageUrl: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb',
    //   tags: ['golden age', 'hollywood', 'classic cinema'],
    //   popularity: 82,
    //   timeEstimate: '25 mins'
    // },






    // {
    //   id: 'film-noir-classics',
    //   categoryId: 'entertainment',
    //   name: 'Film Noir Classics',
    //   description: 'Explore the dark and mysterious world of film noir',
    //   difficulty: 'advanced',
    //   questionsCount: 15,
    //   imageUrl: 'https://images.unsplash.com/photo-1519676867240-f03562f07b3d',
    //   tags: ['film noir', 'crime', 'drama'],
    //   popularity: 75,
    //   timeEstimate: '20 mins'
    // },
    // {
    //   id: 'blockbuster-hits',
    //   categoryId: 'entertainment',
    //   name: 'Blockbuster Hits',
    //   description: 'Trivia about the biggest box office hits of all time',
    //   difficulty: 'intermediate',
    //   questionsCount: 30,
    //   imageUrl: 'https://images.unsplash.com/photo-1598373182133-0cf4250e6de1',
    //   tags: ['blockbusters', 'box office', 'popular movies'],
    //   popularity: 95,
    //   timeEstimate: '30 mins'
    // },
    // {
    //   id: 'marvel-mcu',
    //   categoryId: 'entertainment',
    //   name: 'Marvel Cinematic Universe (MCU)',
    //   description: 'Test your knowledge of the Marvel movies',
    //   difficulty: 'beginner',
    //   questionsCount: 25,
    //   imageUrl: 'https://images.unsplash.com/photo-1574169208507-84376144848a',
    //   tags: ['marvel', 'superheroes', 'mcu'],
    //   popularity: 98,
    //   timeEstimate: '25 mins'
    // },
    // {
    //   id: 'harry-potter-movies',
    //   categoryId: 'entertainment',
    //   name: 'Harry Potter Movies',
    //   description: 'Magical trivia for all Harry Potter movie fans',
    //   difficulty: 'intermediate',
    //   questionsCount: 20,
    //   imageUrl: 'https://images.unsplash.com/photo-1598792302699-a50069d43e2c',
    //   tags: ['harry potter', 'wizarding world', 'fantasy'],
    //   popularity: 96,
    //   timeEstimate: '25 mins'
    // },
    // {
    //   id: 'disney-classics',
    //   categoryId: 'entertainment',
    //   name: 'Disney Animated Classics',
    //   description: 'Trivia about Disney timeless animated movies',
    //   difficulty: 'beginner',
    //   questionsCount: 30,
    //   imageUrl: 'https://images.unsplash.com/photo-1587614381479-3831cde40f48',
    //   tags: ['disney', 'animation', 'family movies'],
    //   popularity: 97,
    //   timeEstimate: '30 mins'
    // },
    // {
    //   id: 'pixar-movies',
    //   categoryId: 'entertainment',
    //   name: 'Pixar Movies',
    //   description: 'Challenge yourself with Pixar trivia from Toy Story to Soul',
    //   difficulty: 'intermediate',
    //   questionsCount: 20,
    //   imageUrl: 'https://images.unsplash.com/photo-1511379938547-c49f92d1e4eb',
    //   tags: ['pixar', 'animation', 'family films'],
    //   popularity: 90,
    //   timeEstimate: '25 mins'
    // },
    // {
    //   id: 'famous-directors',
    //   categoryId: 'entertainment',
    //   name: 'Famous Directors',
    //   description: 'Identify the masters behind the camera',
    //   difficulty: 'advanced',
    //   questionsCount: 15,
    //   imageUrl: 'https://images.unsplash.com/photo-1578319947993-e4e1954c9f92',
    //   tags: ['directors', 'filmmakers', 'cinema'],
    //   popularity: 70,
    //   timeEstimate: '20 mins'
    // },
    // {
    //   id: 'oscar-winning-films',
    //   categoryId: 'entertainment',
    //   name: 'Oscar-Winning Films',
    //   description: 'Test your knowledge of award-winning movies',
    //   difficulty: 'intermediate',
    //   questionsCount: 25,
    //   imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
    //   tags: ['oscars', 'academy awards', 'film trivia'],
    //   popularity: 92,
    //   timeEstimate: '25 mins'
    // },
    // {
    //   id: 'horror-classics',
    //   categoryId: 'entertainment',
    //   name: 'Horror Classics',
    //   description: 'Trivia about iconic horror films',
    //   difficulty: 'advanced',
    //   questionsCount: 20,
    //   imageUrl: 'https://images.unsplash.com/photo-1601950528569-9d793a0d94c3',
    //   tags: ['horror', 'scary movies', 'thriller'],
    //   popularity: 88,
    //   timeEstimate: '20 mins'
    // },
    // Add similar objects for all 70 subcategories, following this format
    














  // Technology Sub-Categories
  {
    id: 'smartphone',
    categoryId: 'technology',
    name: 'Smartphone',
    description: 'From smartphones to apps - test your mobile tech knowledge',
    difficulty: 'beginner',
    questionsCount: 15,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    tags: ['smartphones', 'apps', 'mobile devices', 'smartphone-os'],
    popularity: 85,
    timeEstimate: '20 mins'
  },


  // Technology Sub-Categories
{
  id: 'ai-innovations',
  categoryId: 'technology',
  name: 'AI Innovations',
  description: 'Dive into the fascinating world of artificial intelligence and machine learning.',
  difficulty: 'advanced',
  questionsCount: 20,
  imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
  tags: ['AI', 'machine learning', 'neural networks', 'deep learning'],
  popularity: 92,
  timeEstimate: '25 mins'
},
// {
//   id: 'cyber-security',
//   categoryId: 'technology',
//   name: 'Cybersecurity Basics',
//   description: 'Learn about online safety, encryption, and how to protect digital assets.',
//   difficulty: 'intermediate',
//   questionsCount: 18,
//   imageUrl: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9',
//   tags: ['cybersecurity', 'encryption', 'hacking', 'data protection'],
//   popularity: 88,
//   timeEstimate: '22 mins'
// },
// {
//   id: 'blockchain',
//   categoryId: 'technology',
//   name: 'Blockchain & Cryptocurrencies',
//   description: 'Explore the technology behind Bitcoin, Ethereum, and the future of finance.',
//   difficulty: 'intermediate',
//   questionsCount: 20,
//   imageUrl: '/Blockchain-and-Cryptocurrencies.png',
//   tags: ['blockchain', 'crypto', 'finance', 'decentralized'],
//   popularity: 89,
//   timeEstimate: '24 mins'
// },
// {
//   id: 'cloud-computing',
//   categoryId: 'technology',
//   name: 'Cloud Computing Essentials',
//   description: 'Discover the fundamentals of cloud platforms like AWS, Azure, and Google Cloud.',
//   difficulty: 'beginner',
//   questionsCount: 15,
//   imageUrl: '/Cloud-Computing.png',
//   tags: ['cloud computing', 'AWS', 'Azure', 'Google Cloud'],
//   popularity: 82,
//   timeEstimate: '20 mins'
// },

  // Sports Sub-Categories
  {
    id: 'football-legends',
    categoryId: 'sports',
    name: 'Football Legends',
    description: 'Test your knowledge about football\'s greatest players',
    difficulty: 'intermediate',
    questionsCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55',
    tags: ['football', 'soccer', 'players'],
    popularity: 95,
    timeEstimate: '25 mins'
  },
  // {
  //   id: 'olympic-history',
  //   categoryId: 'sports',
  //   name: 'Olympic History',
  //   description: 'From ancient Greece to modern Olympics',
  //   difficulty: 'advanced',
  //   questionsCount: 25,
  //   imageUrl: 'https://images.unsplash.com/photo-1569517282132-25d22f4573e6',
  //   tags: ['olympics', 'athletes', 'medals'],
  //   popularity: 82,
  //   timeEstimate: '30 mins'
  // },
  // {
  //   id: 'cricket-world',
  //   categoryId: 'sports',
  //   name: 'Cricket World',
  //   description: 'Everything about international cricket',
  //   difficulty: 'intermediate',
  //   questionsCount: 18,
  //   imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da',
  //   tags: ['cricket', 'world cup', 'players'],
  //   popularity: 88,
  //   timeEstimate: '22 mins'
  // }
];