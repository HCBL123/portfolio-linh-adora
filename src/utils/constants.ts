/** @notice Author's url */
export const OFFICIAL_AUTHOR_URL = 'https://quiet-node.dev';

/** @notice Official Author Twitter */
export const OFFICIAL_PLATOFORM_TWITTER_URL = 'https://twitter.com/quiet_node';

/** @notice Official OG Image URL */
export const OFFICIAL_OG_IMAGE_URL = `${OFFICIAL_AUTHOR_URL}/brandings/quiet-node-og.png`;

/** @notice Official Platform Twitter Image URL */
export const OFFICIAL_TWITTER_IMAGE_URL = `/assets/avatars/ins_icon.png`;

export const QUIET_NODE_PORTFOLIO_V2_GITHUB_LINK =
  'https://github.com/quiet-node/portfolio-v2';

export const QUIET_NODE_GITHUB_LINK = 'https://github.com/LinkAdora';
export const QUIET_NODE_REDDIT_LINK =
  'https://www.reddit.com/user/Quiet-Computer-3495';
export const QUIET_NODE_EMAIL_LINK = 'mailto:nglinh@aseanyouth.net';
export const QUIET_NODE_LINKEDIN_LINK = 'https://www.linkedin.com/in/linh-g-nguyen-b498b9350/';
export const QUIET_NODE_TWITTER_LINK = 'https://www.instagram.com/_twinklelittlemoon_/';
export const QUIET_NODE_DISCORD_LINK =
  'https://discordapp.com/users/401650245202739201';

export const GO_LINK = 'https://go.dev/';
export const TS_LINK = 'https://typescriptlang.org/';
export const OPENAI_LINK = 'https://openai.com/';
export const SOL_LINK = 'https://soliditylang.org/';
export const JAVA_LINK = 'https://java.com/';
export const MONGO_LINK = 'https://mongodb.com/';
export const TAILWIND_LINK = 'https://tailwindcss.com/';
export const FRAMER_LINK = 'https://www.framer.com/motion/';
export const REACT_LINK = 'https://reactjs.org/';
export const NEXT_LINK = 'https://nextjs.org/';
export const SPRING_LINK = 'https://spring.io/';
export const HARDHAT_LINK = 'https://hardhat.org/';
export const NODE_LINK = 'https://nodejs.org/';
export const DOCKER_LINK = 'https://docker.com/';
export const JS_LINK = 'https://javascript.com/';
export const ETHEREUM_LINK = 'https://ethereum.org/en/';
export const HEDERA_LINK = 'https://hedera.com';
export const OZ_LINK = 'https://www.openzeppelin.com/';
export const ETHERSJS_LINK = 'https://docs.ethers.org/v6/';
export const MOCHA_LINK = 'https://mochajs.org/';
export const POSTGRES_LINK = 'https://www.postgresql.org/';
export const AWS_LINK = 'https://aws.amazon.com/';
export const VERCEL_LINK = 'https://vercel.com/';
export const NETLIFY_LINK = 'https://www.netlify.com/';
export const DYNAMO_LINK = 'https://aws.amazon.com/dynamodb/';  
export const VITE_LINK = 'https://vitejs.dev/';
export const POLYGON_LINK = 'https://polygon.technology/';
export const OL_LINK = 'https://openliberty.io/';
export const REDUX_LINK = 'https://redux.js.org/';
export const KOT_LINK = 'https://kotlinlang.org/';
export const XML_LINK =
  'https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction';
export const ANDROID_LINK = 'https://developer.android.com/';
export const FIRE_LINK = 'https://firebase.google.com/';
export const SWIFT_LINK = 'https://developer.apple.com/xcode/swiftui/';
export const MAC_LINK = 'https://support.apple.com/macos';
export const XCODE_LINK = 'https://developer.apple.com/xcode/';
export const FIGMA_LINK = 'https://www.figma.com/';


export const PROJECTS_LISTS: Project[] = [
  {
    id: 1,
    title: 'University of South Florida - Laboratory for Advanced Materials and Sensor Technologies',
    role: 'Research Assistant & Intern',
    category: 'research',
    supervisors: [
      'Professor Manh-Huong Phan',
      'Professor Dang H. Nguyen',
      'Asso. Professor Nguyen Hoang Dinh'
    ],
    publications: [
      {
        title: 'A Novel Magnetic Respiratory Sensor for Human Healthcare',
        publisher: 'MDPI',
        link: 'https://www.mdpi.com/2076-3417/11/8/3585',
        year: 2023
      },
      {
        title: 'Magnetoimpedance Biosensors and Real-Time Healthcare Monitors',
        publisher: 'MDPI',
        link: 'https://www.mdpi.com/2079-6374/12/7/517',
        year: 2023
      },
      {
        title: 'Sensitivity Analysis and Parameter Exploration',
        publisher: 'BMES',
        link: 'https://drive.google.com/file/d/1ezaAktVRgR22svSFgJ6WopqeZxxJ6g55/view',
        year: 2023
      }
    ],
    achievements: [
      {
        title: 'AI-DURST Project',
        description: 'Developed AI diagnostic algorithm with 90%+ accuracy for pulmonary diseases',
        grantor: 'Vingroup Innovation Foundation (VinIF)'
      }
    ],
    tools: [
    ],
    thumbnail: 'usf/usf-lab.svg',
    cssStyles: {
      wrapper: 'bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg',
      title: 'text-2xl font-bold text-gray-800 mb-4',
      content: 'prose prose-lg text-gray-700',
      links: 'text-indigo-600 hover:text-indigo-700 transition-colors'
    }
  },
  {
    id: 2,
    title: 'FPT Software Computer Talents Club',
    role: 'Track Leader & Python Developer Intern',
    category: 'development',
    supervisors: [],
    publications: [],
    achievements: [
      {
        title: 'Hackathon Achievement',
        description: 'Third prize in 2022 FCTClub Hackathon during Summer Camp',
        grantor: 'FPT Software'
      },
      {
        title: 'Academic Excellence',
        description: 'Best Learner of the Year and Outstanding Learner of the Year for 2 consecutive years with 100% scholarship',
        grantor: 'FPT Software Academy'
      },
      {
        title: 'AquaEmi Project Lead',
        description: 'Developed water quality monitoring system for Mekong River:\n• Designed ARIMA-based predictive model with 8.6% MAPE for water quality parameters\n• Implemented real-time monitoring using IoT sensors and Django framework\n• Created visualization dashboard for environmental health monitoring',
        grantor: 'FPT Software'
      }
    ],
    tools: [
      // {
      //   name: 'Python',
      //   link: 'https://www.python.org/',
      //   icon: 'python.svg'
      // },
      // {
      //   name: 'Django',
      //   link: 'https://www.djangoproject.com/',
      //   icon: 'django.svg'
      // },
      // {
      //   name: 'TensorFlow',
      //   link: 'https://www.tensorflow.org/',
      //   icon: 'tensorflow.svg'
      // },
      // {
      //   name: 'IoT',
      //   link: 'https://www.arduino.cc/',
      //   icon: 'arduino.svg'
      // }
    ],
    thumbnail: 'fct/fct.jpg',
    cssStyles: {
      wrapper: 'bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-xl shadow-lg',
      title: 'text-2xl font-bold text-gray-800 mb-4',
      content: 'prose prose-lg text-gray-700',
      links: 'text-teal-600 hover:text-teal-700 transition-colors'
    }
  },
  {
    id: 3,
    title: 'BotBrainiacs Robotics Club',
    role: 'Workshop Organizer & Technical Instructor',
    category: 'development',
    supervisors: [],
    publications: [],
    achievements: [
      {
        title: 'Arduino Workshop Leadership',
        description: 'Organized and led a hands-on Arduino workshop at the city-wide Science Fair, teaching 60 participants to build smart trash bins',
        grantor: undefined
      },
      {
        title: 'Technical Implementation',
        description: 'Guided participants in integrating Arduino Uno, servo motors, and ultrasonic sensors to create functional IoT devices',
        grantor: undefined
      }
    ],
    tools: [
      // {
      //   name: 'Arduino',
      //   link: 'https://www.arduino.cc/',
      //   icon: 'arduino.svg'
      // },
      // {
      //   name: 'C++',
      //   link: 'https://cplusplus.com/',
      //   icon: 'cpp.svg'
      // }
    ],
    thumbnail: 'robotics/robotics.jpg',
    cssStyles: {
      wrapper: 'bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-lg',
      title: 'text-2xl font-bold text-gray-800 mb-4',
      content: 'prose prose-lg text-gray-700',
      links: 'text-purple-600 hover:text-purple-700 transition-colors'
    }
  },
  {
    id: 4,
    title: 'ASEAN Youth Organization',
    role: 'Technical Lead & Developer',
    category: 'development',
    supervisors: [],
    publications: [],
    achievements: [
      {
        title: 'Web Development Leadership',
        description: 'Collaborated with team to create user-friendly platform for community engagement and resource sharing',
        grantor: undefined
      },
      {
        title: 'Technical Innovation',
        description: 'Enhanced public access to technology tools through web development and platform optimization',
        grantor: undefined
      },
      {
        title: 'Future Impact',
        description: 'Developed problem-solving and technical expertise in creating tools for healthcare and global health advancements',
        grantor: undefined
      }
    ],
    tools: [
      // {
      //   name: 'React',
      //   link: REACT_LINK,
      //   icon: 'react.svg'
      // },
      // {
      //   name: 'Node.js',
      //   link: NODE_LINK,
      //   icon: 'nodejs.svg'
      // },
      // {
      //   name: 'TypeScript',
      //   link: TS_LINK,
      //   icon: 'typescript.svg'
      // }
    ],
    thumbnail: 'ayo/ayo.png',
    cssStyles: {
      wrapper: 'bg-gradient-to-br from-sky-50 to-indigo-50 p-6 rounded-xl shadow-lg',
      title: 'text-2xl font-bold text-gray-800 mb-4',
      content: 'prose prose-lg text-gray-700',
      links: 'text-sky-600 hover:text-sky-700 transition-colors'
    }
  },
  {
    id: 5,
    title: "SOS Children's Village Vietnam",
    role: 'English Teacher Leader',
    category: 'development',
    supervisors: [],
    publications: [],
    achievements: [
      {
        title: 'English Education Impact',
        description: 'Provided personalized English tutoring to orphaned children, improving literacy and confidence in communication among 15+ students',
        grantor: undefined
      },
      {
        title: 'Soft Skills Development',
        description: 'Learned the value of patience and empathy, qualities that deeply inform my approach to developing user-friendly and impactful solutions for underserved populations',
        grantor: undefined
      }
    ],
    tools: [
      // {
      //   name: 'Teaching',
      //   link: '#',
      //   icon: 'teaching.svg'
      // }
    ],
    thumbnail: 'sos/sos-village.jpg',
    cssStyles: {
      wrapper: 'bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-lg',
      title: 'text-2xl font-bold text-gray-800 mb-4',
      content: 'prose prose-lg text-gray-700',
      links: 'text-amber-600 hover:text-amber-700 transition-colors'
    }
  }
];

export const SOCIAL_FOOTER = [
  {
    id: 0,
    title: 'Github',
    desc: "Most favorite place. I know it's not like a social media place but love pushing code to it daily. NERD!",
    link: QUIET_NODE_GITHUB_LINK,
    bgClass: 'bg-github',
  },
  {
    id: 1,
    title: 'Reddit',
    desc: "Second favorite place. Just became a redditor for a year now but can't stop reading random posts.",
    link: QUIET_NODE_REDDIT_LINK,
    bgClass: 'bg-reddit',
  },
  {
    id: 2,
    title: 'LinkedIn',
    desc: 'Professional social media. Been using it professionaly for 2 years. Connect with me!',
    link: QUIET_NODE_LINKEDIN_LINK,
    bgClass: 'bg-linkedin',
  },
  {
    id: 3,
    title: 'Twitter',
    desc: 'Only up for the news. Well you know still follow me.',
    link: QUIET_NODE_TWITTER_LINK,
    bgClass: 'bg-twitter',
  },
  {
    id: 4,
    title: 'Gmail',
    desc: 'Main communicating media. Shoot me an email!',
    link: QUIET_NODE_EMAIL_LINK,
    bgClass: 'bg-gmail',
  },
  {
    id: 5,
    title: 'Discord',
    desc: "C'mon you just can't 'not' have a discord these days! No? nvm.",
    link: QUIET_NODE_DISCORD_LINK,
    bgClass: 'bg-discord',
  },
];
