export default {
  /**
   * basic Information
   */
  title: `sunghoyaaa.com`,
  description: `개발자 김성호`,
  language: `ko`,
  siteUrl: `https://sunghoyaaa.com/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `김성호`,
    nickname: `sunghoyaaa`,
    stack: ['Frontend', 'React', 'Typescript'],
    bio: {
      email: `tjdgh0313@gmail.com`,
      residence: 'Gyeonggi-do, South Korea',
      bachelorDegree: 'Seoul Cyber Univ. Computer Engineering (2022.03-2024.02)',
    },
    social: {
      github: `https://github.com/Banana-Master`,
      linkedIn: `https://www.linkedin.com/in/%EA%B9%80%EC%84%B1%ED%98%B8-sungho-kim-b082682a0/`,
      resume: `https://www.figma.com/file/dtkCl6G7G5DVe18DN2LWny/%EC%9D%B4%EC%A0%95%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0%3A1`,
    },
    dropdown: {
      tistory: '',
      velog: '',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'category1',
      category: 'featured-category1',
    },
    {
      title: 'category2',
      category: 'featured-category2',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2024.08.26 - NOW',
      en: 'BizWorks',
      kr: '비즈웍스',
      info: '풀스택(SvelteKit) 개발 팀',
      link: 'https://www.bizworks.co.kr/homepage/BizworksHomepage/',
    },
    // {
    //   category: 'Career',
    //   date: '2021.01.04 - 2022.01.04',
    //   en: 'B Corp.',
    //   kr: 'B 회사',
    //   info: 'B 팀',
    //   link: '',
    // },
    {
      category: 'Education',
      date: '2023.08.14 - 2023.11.21',
      en: 'NHN Academy',
      kr: '',
      info: '백엔드 6기',
      link: 'https://hanghae99.spartacodingclub.kr/v2/graduate/64990820fe76242e95014a20',
    },
    {
      category: 'Education',
      date: '2023.08.14 - 2023.11.21',
      en: 'HangHae99',
      kr: '항해99',
      info: 'React - 풀타임',
      link: 'https://hanghae99.spartacodingclub.kr/v2/graduate/64990820fe76242e95014a20',
    },
    {
      category: 'Activity',
      date: '2023.07 - NOW',
      en: 'Community',
      kr: '커뮤니티',
      info: 'IT 커뮤니티',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
