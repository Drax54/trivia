//sub sub categories



import { QuizType } from '../types';

export const quizTypes: QuizType[] = [

  // Entertainment - Classic Movies Quiz Types
  // Entertainment - Classic Movies Quiz Types
  // Entertainment - Classic Movies Quiz Types

  {
    id: 'golden-age-hollywood-trivia',
    subCategoryId: 'classic-movies',
    name: 'Golden Age Hollywood Trivia Questions',
    description: 'Test your knowledge of classic films from the 1930s to 1960s',
    difficulty: 'intermediate',
    questionsCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b',
    tags: ['classic films', 'hollywood', 'golden age'],
    popularity: 82,
    timeEstimate: '25 mins',
    icon: 'Film'
  },
  {
    id: 'film-noir-trivia',
    subCategoryId: 'classic-movies',
    name: 'Film Noir Classics Trivia Questions',
    description: 'Explore the dark and mysterious world of film noir',
    difficulty: 'advanced',
    questionsCount: 15,
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
    tags: ['film noir', 'crime', 'drama'],
    popularity: 75,
    timeEstimate: '20 mins',
    icon: 'Camera'
  },
  {
    id: 'silent-era-trivia',
    subCategoryId: 'classic-movies',
    name: 'Silent Era Movies Trivia Question and Answers',
    description: 'Discover the earliest days of cinema with silent film classics',
    difficulty: 'advanced',
    questionsCount: 12,
    imageUrl: '/public/silent-movies.png',
    tags: ['silent films', 'early cinema', 'black and white'],
    popularity: 65,
    timeEstimate: '18 mins',
    icon: 'Mute'
  },
  {
    id: 'iconic-actors-trivia',
    subCategoryId: 'classic-movies',
    name: 'Iconic Classic Actors Trivia Question and Answers',
    description: 'Identify famous actors and actresses who defined classic Hollywood',
    difficulty: 'intermediate',
    questionsCount: 18,
    imageUrl: 'https://images.unsplash.com/photo-1473187983305-f615310e7daa',
    tags: ['actors', 'hollywood stars', 'golden age'],
    popularity: 80,
    timeEstimate: '22 mins',
    icon: 'Star'
  },
  {
    id: 'classic-oscar-winners-trivia',
    subCategoryId: 'classic-movies',
    name: 'Classic Oscar Winner Trivia Question and Answers',
    description: 'How well do you know the Oscar-winning films of yesteryear?',
    difficulty: 'intermediate',
    questionsCount: 25,
    imageUrl: 'https://images.unsplash.com/photo-1522844990619-4951c40f7eda',
    tags: ['oscars', 'award-winning', 'academy awards'],
    popularity: 88,
    timeEstimate: '30 mins',
    icon: 'Award'
  },
  {
    id: 'epic-classics-trivia',
    subCategoryId: 'classic-movies',
    name: 'Epic Classic Films Trivia Question and Answers',
    description: 'Dive into the larger-than-life epics of classic cinema',
    difficulty: 'intermediate',
    questionsCount: 17,
    imageUrl: '/public/Epic-Classic-Films.png',
    tags: ['epics', 'historical films', 'classics'],
    popularity: 78,
    timeEstimate: '24 mins',
    icon: 'Clapperboard'
  },
  {
    id: 'classic-musical-films-trivia',
    subCategoryId: 'classic-movies',
    name: 'Classic Musical Films Trivia Question and Answers',
    description: 'Sing along and remember the best classic musicals in history',
    difficulty: 'intermediate',
    questionsCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad',
    tags: ['musicals', 'songs', 'classic films'],
    popularity: 85,
    timeEstimate: '25 mins',
    icon: 'Music'
  },

  {
    id: 'hitchcock-masterpieces-trivia',
    subCategoryId: 'classic-movies',
    name: 'Hitchcock Masterpieces Trivia Question and Answers',
    description: 'Test your knowledge of Alfred Hitchcock\'s suspenseful classics',
    difficulty: 'advanced',
    questionsCount: 15,
    imageUrl: '/public/Hitchcock-Masterpieces.png',
    tags: ['hitchcock', 'thriller', 'suspense'],
    popularity: 90,
    timeEstimate: '20 mins',
    icon: 'Eye'
  },

  {
    id: 'foreign-classics-trivia',
    subCategoryId: 'classic-movies',
    name: 'International Classic Films Trivia Question and Answers',
    description: 'Explore the greatest classic films from around the world',
    difficulty: 'advanced',
    questionsCount: 22,
    imageUrl: 'https://images.unsplash.com/photo-1498855926480-d98e83099315',
    tags: ['international cinema', 'foreign films', 'world cinema'],
    popularity: 72,
    timeEstimate: '28 mins',
    icon: 'Globe'
  },
  {
    id: 'western-classics-trivia',
    subCategoryId: 'classic-movies',
    name: 'Western Movie Classics Trivia Question and Answers',
    description: 'How well do you know the iconic westerns of classic Hollywood?',
    difficulty: 'intermediate',
    questionsCount: 16,
    imageUrl: '/public/Western-Movie-Classics.png',
    tags: ['westerns', 'cowboys', 'classic films'],
    popularity: 77,
    timeEstimate: '20 mins',
    icon: 'CowboyHat'
  },
  {
    id: 'screwball-comedies-trivia',
    subCategoryId: 'classic-movies',
    name: 'Screwball Comedies Trivia Question and Answers',
    description: 'Laugh through the wittiest and most outrageous classic comedies',
    difficulty: 'intermediate',
    questionsCount: 14,
    imageUrl: 'https://images.unsplash.com/photo-1482440308425-276ad0f28b19',
    tags: ['comedy', 'screwball', 'funny movies'],
    popularity: 74,
    timeEstimate: '18 mins',
    icon: 'Laugh'
  },
  {
    id: 'war-epics-trivia',
    subCategoryId: 'classic-movies',
    name: 'Classic War Films Trivia Question and Answers',
    description: 'Relive the gripping and heroic tales from classic war films',
    difficulty: 'advanced',
    questionsCount: 19,
    imageUrl: '/public/Classic-War-Films.png',
    tags: ['war movies', 'epics', 'classic cinema'],
    popularity: 79,
    timeEstimate: '23 mins',
    icon: 'Shield'
  },








  // Technology - Mobile Tech Quiz Types










  {
    id: 'smartphone-evolution-trivia',
    subCategoryId: 'smartphone',
    name: 'Smartphone Evolution',
    description: 'The history and development of mobile phones',
    difficulty: 'beginner',
    questionsCount: 15,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    tags: ['smartphones', 'mobile', 'technology'],
    popularity: 85,
    timeEstimate: '20 mins',
    icon: 'Smartphone'
  },
  {
    id: 'mobile-os-trivia',
    subCategoryId: 'smartphone',
    name: 'Mobile Operating Systems',
    description: 'Deep dive into iOS, Android, and other mobile platforms',
    difficulty: 'intermediate',
    questionsCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67',
    tags: ['operating systems', 'ios', 'android'],
    popularity: 78,
    timeEstimate: '25 mins',
    icon: 'Layers'
  },


  {
    id: 'machine-learning-basics',
    subCategoryId: 'ai-innovations',
    name: 'Machine Learning Basics',
    description: 'Explore the fundamentals of machine learning, including algorithms and applications.',
    difficulty: 'intermediate',
    questionsCount: 20,
    imageUrl: '/machine-learning-basics.png',
    tags: ['machine learning', 'supervised learning', 'unsupervised learning'],
    popularity: 85,
    timeEstimate: '25 mins',
    icon: 'BarChart'
  },
  {
    id: 'deep-learning-trivia',
    subCategoryId: 'ai-innovations',
    name: 'Deep Learning',
    description: 'Dive into neural networks, backpropagation, and advanced deep learning concepts.',
    difficulty: 'advanced',
    questionsCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    tags: ['deep learning', 'neural networks', 'AI algorithms'],
    popularity: 90,
    timeEstimate: '30 mins',
    icon: 'Database'
  },
  {
    id: 'natural-language-processing',
    subCategoryId: 'ai-innovations',
    name: 'Natural Language Processing',
    description: 'Learn how AI processes and understands human language through NLP techniques.',
    difficulty: 'advanced',
    questionsCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
    tags: ['NLP', 'language models', 'AI text processing'],
    popularity: 88,
    timeEstimate: '25 mins',
    icon: 'Text'
  },
  // {
  //   id: 'computer-vision',
  //   subCategoryId: 'ai-innovations',
  //   name: 'Computer Vision',
  //   description: 'Understand how AI interprets images and videos using computer vision techniques.',
  //   difficulty: 'intermediate',
  //   questionsCount: 20,
  //   imageUrl: '/computer-vision.png',
  //   tags: ['computer vision', 'image recognition', 'object detection'],
  //   popularity: 82,
  //   timeEstimate: '25 mins',
  //   icon: 'Eye'
  // },
  // {
  //   id: 'ai-ethics-and-governance',
  //   subCategoryId: 'ai-innovations',
  //   name: 'AI Ethics & Governance',
  //   description: 'Explore ethical concerns and regulatory frameworks for responsible AI usage.',
  //   difficulty: 'beginner',
  //   questionsCount: 20,
  //   imageUrl: '/ai-ethics-and-governance.png',
  //   tags: ['AI ethics', 'bias in AI', 'AI governance'],
  //   popularity: 75,
  //   timeEstimate: '20 mins',
  //   icon: 'ShieldCheck'
  // },

  // {
  //   id: 'loki',
  //   subCategoryId: 'marvel-mcu',
  //   name: 'Loki Series',
  //   description: 'Deep dive into iOS, Android, and other mobile platforms',
  //   difficulty: 'intermediate',
  //   questionsCount: 20,
  //   imageUrl: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67',
  //   tags: ['operating systems', 'ios', 'android'],
  //   popularity: 78,
  //   timeEstimate: '25 mins',
  //   icon: 'Layers'
  // }, 

  // {
  //   id: 'icon-man',
  //   subCategoryId: 'marvel-mcu',
  //   name: 'Iron Man',
  //   description: 'Deep dive into iOS, Android, and other mobile platforms',
  //   difficulty: 'intermediate',
  //   questionsCount: 20,
  //   imageUrl: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67',
  //   tags: ['operating systems', 'ios', 'android'],
  //   popularity: 78,
  //   timeEstimate: '25 mins',
  //   icon: 'Layers'
  // },





  // {
  //   "id": "football-legends-greatest-players",
  //   "subCategoryId": "football-legends",
  //   "name": "Greatest Football Players",
  //   "description": "Discover the legends who have shaped the history of football",
  //   "difficulty": "intermediate",
  //   "questionsCount": 18,
  //   "imageUrl": "https://images.unsplash.com/photo-1601461056279-e72ed8c9b70d",
  //   "tags": ["football", "players", "history"],
  //   "popularity": 92,
  //   "timeEstimate": "22 mins",
  //   "icon": "Star"
  // },
  // {
  //   "id": "football-legends-world-cup-heroes",
  //   "subCategoryId": "football-legends",
  //   "name": "World Cup Heroes",
  //   "description": "Test your knowledge of iconic players from World Cup history",
  //   "difficulty": "advanced",
  //   "questionsCount": 20,
  //   "imageUrl": "https://images.unsplash.com/photo-1503480207415-fdddcc27f27a",
  //   "tags": ["world cup", "football", "legends"],
  //   "popularity": 89,
  //   "timeEstimate": "24 mins",
  //   "icon": "Trophy"
  // },
  {
    "id": "top-football-goal-scorers-trivia",
    "subCategoryId": "football-legends",
    "name": "Top Football Goal Scorers",
    "description": "Learn about the players who have scored the most goals in football history",
    "difficulty": "intermediate",
    "questionsCount": 15,
    "imageUrl": "/top-football-goal-scorers.png",
    "tags": ["goal scorers", "records", "football"],
    "popularity": 87,
    "timeEstimate": "20 mins",
    "icon": "Goal"
  },
  {
    "id": "famous-football-managers-trivia",
    "subCategoryId": "football-legends",
    "name": "Famous Football Managers",
    "description": "Test your knowledge of legendary football managers and their achievements",
    "difficulty": "intermediate",
    "questionsCount": 12,
    "imageUrl": "/famous-football-managers-trivia.png",
    "tags": ["managers", "football legends", "coaches"],
    "popularity": 80,
    "timeEstimate": "15 mins",
    "icon": "Manager"
  },
  {
    "id": "world-cup-legends-trivia",
    "subCategoryId": "football-legends",
    "name": "World Cup Legends",
    "description": "Discover the players who left an indelible mark on World Cup history",
    "difficulty": "advanced",
    "questionsCount": 20,
    "imageUrl": "/world-cup-football-legends.png",
    "tags": ["World Cup", "legends", "football history"],
    "popularity": 90,
    "timeEstimate": "25 mins",
    "icon": "Trophy"
  },
  {
    "id": "football-rivalries-trivia",
    "subCategoryId": "football-legends",
    "name": "Football Rivalries",
    "description": "Learn about the greatest rivalries and matches in football history",
    "difficulty": "beginner",
    "questionsCount": 10,
    "imageUrl": "/football-rivalries.png",
    "tags": ["rivalries", "classic matches", "football"],
    "popularity": 75,
    "timeEstimate": "15 mins",
    "icon": "Handshake"
  },

  // {
  //   "id": "iconic-football-moments-trivia",
  //   "subCategoryId": "football-legends",
  //   "name": "Iconic Football Moments",
  //   "description": "Test your memory of the most iconic and unforgettable moments in football",
  //   "difficulty": "intermediate",
  //   "questionsCount": 15,
  //   "imageUrl": "https://images.unsplash.com/photo-1590490352173-d6929d7aa0a2",
  //   "tags": ["iconic moments", "football highlights", "history"],
  //   "popularity": 85,
  //   "timeEstimate": "20 mins",
  //   "icon": "Lightning"
  // },
  // {
  //   "id": "football-awards-trivia",
  //   "subCategoryId": "football-legends",
  //   "name": "Football Awards",
  //   "description": "Explore the history of Ballon d'Or, FIFA Best Awards, and more",
  //   "difficulty": "intermediate",
  //   "questionsCount": 12,
  //   "imageUrl": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  //   "tags": ["awards", "Ballon d'Or", "football legends"],
  //   "popularity": 82,
  //   "timeEstimate": "15 mins",
  //   "icon": "Medal"
  // },
  // {
  //   "id": "greatest-defenders-trivia",
  //   "subCategoryId": "football-legends",
  //   "name": "Greatest Defenders",
  //   "description": "Learn about the players who mastered the art of defense in football",
  //   "difficulty": "advanced",
  //   "questionsCount": 15,
  //   "imageUrl": "https://images.unsplash.com/photo-1597589345505-5c8c137fb90e",
  //   "tags": ["defenders", "football legends", "defense"],
  //   "popularity": 83,
  //   "timeEstimate": "20 mins",
  //   "icon": "Shield"
  // },




  // {
  //   "id": "football-legends-coaches",
  //   "subCategoryId": "football-legends",
  //   "name": "Legendary Football Coaches",
  //   "description": "Explore the greatest minds behind football's most successful teams",
  //   "difficulty": "medium",
  //   "questionsCount": 16,
  //   "imageUrl": "https://images.unsplash.com/photo-1583083076223-0e0e058bcd09",
  //   "tags": ["coaches", "managers", "football"],
  //   "popularity": 85,
  //   "timeEstimate": "21 mins",
  //   "icon": "Whistle"
  // },
  // {
  //   "id": "football-legends-ballon-dor-winners",
  //   "subCategoryId": "football-legends",
  //   "name": "Ballon d'Or Winners",
  //   "description": "How well do you know the players who have won the prestigious Ballon d'Or?",
  //   "difficulty": "advanced",
  //   "questionsCount": 20,
  //   "imageUrl": "https://images.unsplash.com/photo-1599586127202-d91b5ba4c7b2",
  //   "tags": ["ballon d'or", "awards", "football"],
  //   "popularity": 90,
  //   "timeEstimate": "25 mins",
  //   "icon": "Medal"
  // },
  // {
  //   "id": "football-legends-rivalries",
  //   "subCategoryId": "football-legends",
  //   "name": "Greatest Football Rivalries",
  //   "description": "Test your knowledge of legendary rivalries between clubs and players",
  //   "difficulty": "intermediate",
  //   "questionsCount": 17,
  //   "imageUrl": "https://images.unsplash.com/photo-1616169134318-926cc50e2f28",
  //   "tags": ["rivalries", "clubs", "players"],
  //   "popularity": 88,
  //   "timeEstimate": "22 mins",
  //   "icon": "Handshake"
  // },
















];