import React from 'react';
import BooksList from './General/BooksList';

const booksToRead = [
  {
    title: 'Actionable Gamification: Beyond Points, Badges and Leaderboards',
    author: 'Yu-Kai Chou',
    image: 'https://m.media-amazon.com/images/I/61EyclvK8GL.jpg',
  },
  {
    title: 'How Google Works',
    author: 'Eric Schmidt, Jonathan Rosenberg',
    image: 'https://m.media-amazon.com/images/I/51WpL-WjlpL.jpg',
  },
  {
    title: 'No Rules Rules: Netflix and the Culture of Reinvention',
    author: 'Reed Hastings, Erin Meyer',
    image: 'https://m.media-amazon.com/images/I/71KCwxodiJL.jpg',
  },
  {
    title: 'Story: Substance, Structure, Style, and the Principles of Screenwriting',
    author: 'Robert McKee',
    image: 'https://m.media-amazon.com/images/I/51KMvYBy5SL.jpg',
  },
  {
    title: 'Lights Out: Pride, Delusion, and the Fall of General Electric',
    author: 'Ted Mann, Thomas Gryta',
    image: 'https://m.media-amazon.com/images/I/61aKxwG3zFL.jpg',
  },
  {
    title: 'The Startup Owners Manual: The Step-By-Step Guide for Building a Great Company',
    author: 'Steve Blank, Bob Dorf',
    image: 'https://m.media-amazon.com/images/I/51nrLEimQcL.jpg',
  },
  {
    title: 'The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers',
    author: 'Ben Horowitz',
    image: 'https://m.media-amazon.com/images/I/810u9MkT3SL.jpg',
  },
  {
    title: 'The Power Presenter: Technique, Style, and Strategy from Americas Top Speaking Coach',
    author: 'Jerry Weissman',
    image: 'https://m.media-amazon.com/images/I/514ck6YIOqL.jpg',
  },
  {
    title: 'The intelligent investor: The Definitive Book on Value Investing',
    author: 'Benjamin Graham',
    image: 'https://m.media-amazon.com/images/I/919mmNCTaaL.jpg',
  },
  {
    title: 'High Output Management',
    author: 'Andrew S. Grove',
    image: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91j9DLZhD6L.jpg',
  },
  {
    title: "Don't Make Me Think: A Common Sense Approach to Web Usability",
    author: 'Steve Krug',
    image: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51WS36aA2BL.jpg',
  },
  {
    title: 'The Hero with a Thousand Faces',
    author: 'Joseph Campbell',
    image: 'https://m.media-amazon.com/images/I/51VeJN9ikML.jpg',
  },
  {
    title: 'The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company',
    author: 'Robert Iger',
    image: 'https://m.media-amazon.com/images/I/915oFtkji9L.jpg',
  },
  {
    title: 'Predictably Irrational, Revised and Expanded Edition: The Hidden Forces That Shape Our Decisions',
    author: 'Dr. Dan Ariely',
    image: 'https://m.media-amazon.com/images/I/61v5CqYL2WL.jpg',
  },
  {
    title: 'Blue Ocean Strategy, Expanded Edition: How to Create Uncontested Market Space and Make the Competition Irrelevant',
    author: 'W. Chan Kim, Renée Mauborgne',
    image: 'https://m.media-amazon.com/images/I/813Pyktx7UL.jpg',
  },
  {
    title: 'Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days',
    author: 'Jake Knapp, John Zeratsky, Braden Kowitz, Dan Bittner',
    image: 'https://m.media-amazon.com/images/I/71Z1HWsH4fL.jpg',
  },
  {
    title: 'User Story Mapping: Discover the Whole Story, Build the Right Product',
    author: 'Jeff Patton (Author)',
    image: 'https://m.media-amazon.com/images/I/51xjwiaguCL.jpg',
  },
  {
    title: "Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger",
    author: 'Peter D. Kaufman',
    image: 'https://m.media-amazon.com/images/I/81bvEcXd0yL.jpg',
  },
  {
    title: 'The Voltage Effect: How to Make Good Ideas Great and Great Ideas Scale',
    author: 'John A List',
    image: 'https://m.media-amazon.com/images/I/710utAgINML.jpg',
  },
  {
    title: 'A Guide to the Good Life: The Ancient Art of Stoic Joy',
    author: 'William B. Irvine',
    image: 'https://m.media-amazon.com/images/I/31xoxmaxHJL.jpg',
  },
  {
    title: 'Change: How to Make Big Things Happen',
    author: 'Damon Centola',
    image: 'https://m.media-amazon.com/images/I/81jw5k939bL.jpg',
  },
  {
    title: 'The Beginning of Infinity: Explanations That Transform the World',
    author: 'David Deutsch',
    image: 'https://m.media-amazon.com/images/I/81kgWVO7VkL.jpg',
  },
  {
    title: 'Influence: The Psychology of Persuasion',
    author: 'Robert B. Cialdini',
    image: 'https://m.media-amazon.com/images/I/71JbZ0V06zL.jpg',
  },
  {
    title: 'Predictable Revenue: Turn Your Business Into a Sales Machine with the $100 Million Best Practices of Salesforce.com',
    author: 'Aaron Ross, Marylou Tyler',
    image: 'https://m.media-amazon.com/images/I/61yAYYNvIVL.jpg',
  },
  {
    title: 'The Challenger Sale: Taking Control of the Customer Conversation',
    author: 'Matthew Dixon, Brent Adamson',
    image: 'https://m.media-amazon.com/images/I/81uVH3YVlgL.jpg',
  },
  {
    title: 'Sell the Way You Buy: A Modern Approach To Sales That Actually Works (Even On You!)',
    author: 'David Priemer',
    image: 'https://m.media-amazon.com/images/I/711Q5WTMTJL.jpg',
  },
  {
    title: "The Amazon Way: Amazon's 14 Leadership Principles",
    author: 'John Rossman',
    image: 'https://m.media-amazon.com/images/I/61dx0hEkWnS.jpg',
  },
  {
    title: "The Innovator's Dilemma: The Revolutionary Book That Will Change the Way You Do Business",
    author: 'Clayton M. Christensen',
    image: 'https://m.media-amazon.com/images/I/618BdBwK5ML.jpg',
  },
  {
    title: 'Continuous Discovery Habits: Discover Products that Create Customer Value and Business Value',
    author: 'Teresa Torres',
    image: 'https://m.media-amazon.com/images/I/611QkQ+CXES.jpg',
  },
  {
    title: 'Empowered: Ordinary People, Extraordinary Products (Silicon Valley Product Group)',
    author: 'Marty Cagan',
    image: 'https://m.media-amazon.com/images/I/71O0cfXUnLL.jpg',
  },
  {
    title: 'Strong Product People: A Complete Guide to Developing Great Product Managers',
    author: 'Petra Wille',
    image: 'https://m.media-amazon.com/images/I/618ws4ppSBL.jpg',
  },
  {
    title: 'Escaping the Build Trap: How Effective Product Management Creates Real Value',
    author: 'Melissa Perri',
    image: 'https://m.media-amazon.com/images/I/81rhQF3g4-L.jpg',
  },
  {
    title: 'Product Leadership: How Top Product Managers Launch Awesome Products and Build Successful Teams',
    author: 'Richard Banfield, Martin Eriksson, Nate Walkingshaw',
    image: 'https://m.media-amazon.com/images/I/61Q47F8k3bL.jpg',
  },
  {
    title: 'The Inmates Are Running the Asylum: Why High Tech Products Drive Us Crazy and How to Restore the Sanity',
    author: 'Alan Cooper',
    image: 'https://m.media-amazon.com/images/I/41+Ev14Di4L.jpg',
  },
  {
    title: 'Loved: How to Rethink Marketing for Tech Products (Silicon Valley Product Group)',
    author: 'Martina Lauchengco, Todd Wilms, Chris Jones',
    image: 'https://m.media-amazon.com/images/I/71JGnUdqC5L.jpg',
  },
  {
    title: 'Cracking the PM Interview: How to Land a Product Manager Job in Technology',
    author: 'Gayle Laakmann McDowell, Jackie Bavaro',
    image: 'https://m.media-amazon.com/images/I/61lpVd2HzXL.jpg',
  },
  {
    title: 'When Coffee and Kale Compete: Become great at making products people will buy',
    author: 'Alan Klement',
    image: 'https://m.media-amazon.com/images/I/61OI41CD53L.jpg',
  },
  {
    title: 'Cracking the PM Career: The Skills, Frameworks, and Practices To Become a Great Product Manager',
    author: 'Jackie Bavaro, Gayle McDowell',
    image: 'https://m.media-amazon.com/images/I/61ytrkspHnL.jpg',
  },
  {
    title: "Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts",
    author: 'Annie Duke',
    image: 'https://m.media-amazon.com/images/I/81RraEAq2NL.jpg',
  },
  {
    title: "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
    author: 'Steve Krug',
    image: 'https://m.media-amazon.com/images/I/51WS36aA2BL.jpg',
  },
  {
    title: 'Obviously Awesome: How to Nail Product Positioning so Customers Get It, Buy It, Love It',
    author: 'April Dunford, Geoffrey Moore',
    image: 'https://m.media-amazon.com/images/I/61ncg5hBY6L.jpg',
  },
  {
    title: 'Indistractable: How to Control Your Attention and Choose Your Life',
    author: 'Nir Eyal',
    image: 'https://m.media-amazon.com/images/I/71yV71FUIAS.jpg',
  },
  {
    title: 'Dare to Lead: Brave Work. Tough Conversations. Whole Hearts.',
    author: 'Brene Brown',
    image: 'https://m.media-amazon.com/images/I/71Yz0igLjoL.jpg',
  },
  {
    title: 'Start with Why: How Great Leaders Inspire Everyone to Take Action',
    author: 'Simon Sinek',
    image: 'https://m.media-amazon.com/images/I/7153xiXZMoL.jpg',
  },
  {
    title: 'Competing Against Luck: The Story of Innovation and Customer Choice',
    author: 'Clayton M. Christensen, Karen Dillon, Taddy Hall, David S. Duncan',
    image: 'https://m.media-amazon.com/images/I/81jN2hzQg9L.jpg',
  },
  {
    title: 'Nudge: The Final Edition: Improving Decisions About Money, Health, and the Environment',
    author: 'Richard H. Thaler, Cass R. Sunstein',
    image: 'https://m.media-amazon.com/images/I/413vkHc-U1L.jpg',
  },
  {
    title: 'The Most Important Thing: Uncommon Sense for The Thoughtful Investor',
    author: 'Howard Marks',
    image: 'https://m.media-amazon.com/images/I/61NNr+MqsgL.jpg',
  },
  {
    title: 'Market Wizards: Interviews with Top Traders',
    author: 'Jack D. Schwager',
    image: 'https://m.media-amazon.com/images/I/51YCBFM34QL.jpg',
  },
  {
    title: 'The Alchemy of Finance',
    author: 'George Soros',
    image: 'https://m.media-amazon.com/images/I/5126Y09VPwL.jpg',
  },
  {
    title: 'More Money Than God: Hedge Funds and the Making of a New Elite',
    author: 'Sebastian Mallaby',
    image: 'https://m.media-amazon.com/images/I/61BUXNslV7L.jpg',
  },
  {
    title: "Founders at Work: Stories of Startups' Early Days",
    author: 'Jessica Livingston',
    image: 'https://m.media-amazon.com/images/I/61p0C5iQ8vL.jpg',
  },
  {
    title: 'Radical Candor: Fully Revised & Updated Edition: Be a Kick-Ass Boss Without Losing Your Humanity',
    author: 'Kim Scott',
    image: 'https://m.media-amazon.com/images/I/81Yd6Q6geBL.jpg',
  },
  {
    title: '$100M Offers: How to Make Offers So Good People Feel Stupid Saying No',
    author: 'Alex Hormozi',
    image: 'https://m.media-amazon.com/images/I/618zYUWUKfL.jpg',
  },
  {
    title: 'Traction: Get a Grip on Your Business',
    author: 'Gino Wickman',
    image: 'https://m.media-amazon.com/images/I/81d7NYQfKXL.jpg',
  },
  {
    title: 'Shoe Dog: A Memoir by the Creator of Nike',
    author: 'Phil Knight',
    image: 'https://m.media-amazon.com/images/I/71U49T+hOTL.jpg',
  },
  {
    title: 'Recruiting',
    author: 'Ryan Breslow',
    image: 'https://m.media-amazon.com/images/I/41jojP3003L.jpg',
  },
  {
    title: 'The Messy Middle: Finding Your Way Through the Hardest and Most Crucial Part of Any Bold Venture',
    author: 'Scott Belsky',
    image: 'https://m.media-amazon.com/images/I/81heFYwGUeL.jpg',
  },
  {
    title: "The Innovator's Solution: Creating and Sustaining Successful Growth",
    author: 'Clayton M. Christensen',
    image: 'https://m.media-amazon.com/images/I/71PoYga+qwL.jpg',
  },
  {
    title: 'Built to Sell: Creating a Business That Can Thrive Without You',
    author: 'John Warrilow',
    image: 'https://m.media-amazon.com/images/I/51uaWR-TlbL.jpg',
  },
  {
    title: 'Rework',
    author: 'Jason Fried, David Heinemeier Hansson',
    image: 'https://m.media-amazon.com/images/I/71SqvmjaM3L.jpg',
  },
  {
    title: 'Resilience: Hard-Won Wisdom for Living a Better Life',
    author: 'Eric Greitens',
    image: 'https://m.media-amazon.com/images/I/51sQ7g5XwAL.jpg',
  },
  {
    title: 'Liftoff: Elon Musk and the Desperate Early Days That Launched SpaceX',
    author: 'Eric Berger',
    image: 'https://m.media-amazon.com/images/I/81jGRuec-wL.jpg',
  },
  {
    title: 'Buy Back Your Time: Get Unstuck, Reclaim Your Freedom, and Build Your Empire',
    author: 'Dan Martell',
    image: 'https://m.media-amazon.com/images/I/719pWKuKMwL._SL1500_.jpg',
  },
  {
    title: "Think Again: The Power of Knowing What You Don't Know",
    author: 'Adam Grant',
    image: 'https://m.media-amazon.com/images/I/71K+FclxRdL._SL1500_.jpg',
  },
  {
    title: 'Elon Musk',
    author: 'Walter Isaacson',
    image: 'https://m.media-amazon.com/images/I/814mI0-rkxL._SL1500_.jpg',
  },
  {
    title: "Man's Search for Meaning",
    author: 'Viktor E. Frankl',
    image: 'https://m.media-amazon.com/images/I/71tdb1udZnL._SL1500_.jpg',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    image: 'https://m.media-amazon.com/images/I/71wvKXWfcML._SL1500_.jpg',
  },
  {
    title: 'The Beginning of Infinity: Explanations That Transform the World',
    author: 'David Deutsch',
    image: 'https://m.media-amazon.com/images/I/81V2UlgBb9L._SL1500_.jpg',
  },
  {
    title: 'The Rational Optimist: How Prosperity Evolves',
    author: 'Matt Ridley',
    image: 'https://m.media-amazon.com/images/I/61BwDm28ViL._SL1500_.jpg',
  },
  {
    title: 'Working in Public: The Making and Maintenance of Open Source Software',
    author: 'Nadia Eghbal',
    image: 'https://m.media-amazon.com/images/I/61eKpnU9c+L._SL1480_.jpg',
  },
];

export default function BooksToRead() {
  return <BooksList books={booksToRead} />;
}
