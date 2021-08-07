const fakePosts = [
  {
    id: 1,
    title: "Top 15 Must Read Team Leadership Blogs",
    description:
      "Innovation and a growing number of specialized workers means that leadership itself is becoming a specialized skill. The road to success is...",
    auther: "John McMan",
    date: "25 November, 2020",
    avatar: "/avatars/John McMan.jpg",
    photo: "/post images/1.jpg",
  },
  {
    id: 2,
    title: "Importance of Communication in Teamwork",
    description:
      "Under the assignment of responding other’s blog post, I read some blogs about teamwork. Then, I have some ideas of teamwork due to one of...",
    auther: "Scarlett Geller",
    date: "20 Febreuary, 2021",
    avatar: "/avatars/Scarlett Geller.jpg",
    photo: "/post images/2.jpeg",
  },
  {
    id: 3,
    title: "Which one is better, teamwork or working independently?",
    description:
      "In the business world, people have two ways to organize their working style: working independently and teamwork.",
    auther: "Darwen Green",
    date: "09 March, 2020",
    avatar: "/avatars/Darwen Green.jpg",
    photo: "/post images/3.png",
  },
  {
    id: 4,
    title: "How to be a good team member?",
    description:
      "Last week, I found a helpful book, “When Teams Work Best” written by Frank LaFasto and Carl Larson in 2001, in UB library to make a whole picture of teamwork...",
    auther: "Monica Black",
    date: "05 May, 2019",
    avatar: "/avatars/Monica Black.jpg",
    photo: "/post images/4.png",
  },
  {
    id: 5,
    title: "How to build effective cross-team collaboration",
    description:
      "Effective cross-team collaboration is no less important than collective work inside the team. Without such a collaboration company...",
    auther: "Lara Larson",
    date: "29 October, 2020",
    avatar: "/avatars/Lara Larson.jpg",
    photo: "/post images/5.jpeg",
  },
  {
    id: 6,
    title: "Importance of effective collaboration for team productivity",
    description:
      "A collaborative team is much more effective than a hierarchical team. In a hierarchical team, there is a leader or captain who guides the...",
    auther: "Mark Edward",
    date: "21 December, 20219",
    avatar: "/avatars/Mark Edward.jpg",
    photo: "/post images/1.jpg",
  },
];

const posts = [
  {
    id: 1,
    title: "Top 15 Must Read Team Leadership Blogs",
    description: "Innovation and a growing number of specialized workers means that leadership itself is becoming a specialized skill. The road to success is...",
    content: `Innovation and a growing number of specialized workers means that leadership itself is becoming a specialized skill. The road to success is never straight-forward. It demands continuous self-development and learning from mistakes. In addition to learning from your own mistakes, you need to keep up with others.There's no better way to keep up than to take the cues from other leaders and educate yourself.great team leadership blogsWe've updated our "top leadership" blog post to be relevant for 2020 as the work world changes and evolves. This research has fueled our understanding of the industry. Learning is a community effort and therefore, leaders should actively engage with the advice of other leaders. For this purpose, we made a list of the top 15 leadership blogs that share valuable insights and fresh perspectives.This list was originally for improving leadership in our own company, butr the information is useful for everyone looking to improve their leadership skills.`,
    auther: "John McMan",
    date: "25 November, 2020",
    avatar: "/avatars/John McMan.jpg",
    photo: "/post images/1.jpg",
    position: "CEO of TechManagement company",
  },
  {
    id: 2,
    title: "Importance of Communication in Teamwork",
    description: "Under the assignment of responding other’s blog post, I read some blogs about teamwork. Then, I have some ideas of teamwork due to one of...",
    content: `Innovation and a growing number of specialized workers means that leadership itself is becoming a specialized skill. The road to success is never straight-forward. It demands continuous self-development and learning from mistakes. In addition to learning from your own mistakes, you need to keep up with others.There's no better way to keep up than to take the cues from other leaders and educate yourself.great team leadership blogsWe've updated our "top leadership" blog post to be relevant for 2020 as the work world changes and evolves. This research has fueled our understanding of the industry. Learning is a community effort and therefore, leaders should actively engage with the advice of other leaders. For this purpose, we made a list of the top 15 leadership blogs that share valuable insights and fresh perspectives.This list was originally for improving leadership in our own company, butr the information is useful for everyone looking to improve their leadership skills.`,
    auther: "Scarlett Geller",
    date: "20 Febreuary, 2021",
    avatar: "/avatars/Scarlett Geller.jpg",
    photo: "/post images/2.jpeg",
    position: "CEO of TechManagement company",
  },
  {
    id: 3,
    title: "Which one is better, teamwork or working independently?",
    description: "In the business world, people have two ways to organize their working style: working independently and teamwork.",
    content: `Innovation and a growing number of specialized workers means that leadership itself is becoming a specialized skill. The road to success is never straight-forward. It demands continuous self-development and learning from mistakes. In addition to learning from your own mistakes, you need to keep up with others.There's no better way to keep up than to take the cues from other leaders and educate yourself.great team leadership blogsWe've updated our "top leadership" blog post to be relevant for 2020 as the work world changes and evolves. This research has fueled our understanding of the industry. Learning is a community effort and therefore, leaders should actively engage with the advice of other leaders. For this purpose, we made a list of the top 15 leadership blogs that share valuable insights and fresh perspectives.This list was originally for improving leadership in our own company, butr the information is useful for everyone looking to improve their leadership skills.`,
    auther: "Darwen Green",
    date: "09 March, 2020",
    avatar: "/avatars/Darwen Green.jpg",
    photo: "/post images/3.png",
    position: "CEO of TechManagement company",
  },
  {
    id: 4,
    title: "How to be a good team member?",
    description:"Last week, I found a helpful book, “When Teams Work Best” written by Frank LaFasto and Carl Larson in 2001, in UB library to make a whole picture of teamwork...",
    content: `Innovation and a growing number of specialized workers means that leadership itself is becoming a specialized skill. The road to success is never straight-forward. It demands continuous self-development and learning from mistakes. In addition to learning from your own mistakes, you need to keep up with others.There's no better way to keep up than to take the cues from other leaders and educate yourself.great team leadership blogsWe've updated our "top leadership" blog post to be relevant for 2020 as the work world changes and evolves. This research has fueled our understanding of the industry. Learning is a community effort and therefore, leaders should actively engage with the advice of other leaders. For this purpose, we made a list of the top 15 leadership blogs that share valuable insights and fresh perspectives.This list was originally for improving leadership in our own company, butr the information is useful for everyone looking to improve their leadership skills.`,
    auther: "Monica Black",
    date: "05 May, 2019",
    avatar: "/avatars/Monica Black.jpg",
    photo: "/post images/4.png",
    position: "CEO of TechManagement company",
  },
  {
    id: 5,
    title: "How to build effective cross-team collaboration",
    description:"Effective cross-team collaboration is no less important than collective work inside the team. Without such a collaboration company...",
    content: `Innovation and a growing number of specialized workers means that leadership itself is becoming a specialized skill. The road to success is never straight-forward. It demands continuous self-development and learning from mistakes. In addition to learning from your own mistakes, you need to keep up with others.There's no better way to keep up than to take the cues from other leaders and educate yourself.great team leadership blogsWe've updated our "top leadership" blog post to be relevant for 2020 as the work world changes and evolves. This research has fueled our understanding of the industry. Learning is a community effort and therefore, leaders should actively engage with the advice of other leaders. For this purpose, we made a list of the top 15 leadership blogs that share valuable insights and fresh perspectives.This list was originally for improving leadership in our own company, butr the information is useful for everyone looking to improve their leadership skills.`,
    auther: "Lara Larson",
    date: "29 October, 2020",
    avatar: "/avatars/Lara Larson.jpg",
    photo: "/post images/5.jpeg",
    position: "CEO of TechManagement company",
  },
  {
    id: 6,
    title: "Importance of effective collaboration for team productivity",
    description:"A collaborative team is much more effective than a hierarchical team. In a hierarchical team, there is a leader or captain who guides the...",
    content: `Innovation and a growing number of specialized workers means that leadership itself is becoming a specialized skill. The road to success is never straight-forward. It demands continuous self-development and learning from mistakes. In addition to learning from your own mistakes, you need to keep up with others.There's no better way to keep up than to take the cues from other leaders and educate yourself.great team leadership blogsWe've updated our "top leadership" blog post to be relevant for 2020 as the work world changes and evolves. This research has fueled our understanding of the industry. Learning is a community effort and therefore, leaders should actively engage with the advice of other leaders. For this purpose, we made a list of the top 15 leadership blogs that share valuable insights and fresh perspectives.This list was originally for improving leadership in our own company, butr the information is useful for everyone looking to improve their leadership skills.`,
    auther: "Mark Edward",
    date: "21 December, 20219",
    avatar: "/avatars/Mark Edward.jpg",
    photo: "/post images/1.jpg",
    position: "CEO of TechManagement company",
  },
];

export const getPostsOverview = () => fakePosts;

export const getPostById = (id) => posts.find((post) => post.id == id);

export const getPaths = () =>
  fakePosts.map(({ id }) => ({
    params: {
      postId: id.toString(),
    },
  }));
