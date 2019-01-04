


export default [
  {
    description:
    'I build web applications ranging from simple agency landing pages and single page applications to CRUD based websites.',
    cl:"highlight",
    icon:'FaDesktop',
    id:1
},

{ source:require('../images/fashionstartup.jpg'),
  title: 'fashionstartupNYC',
  description:
  'One stop service for emerging fashion brands\
  offering market entry analytics, design and sample making services.',
  technologies:"React SCSS Node",
  features:["Single Page", "Mailchimp API newsletter subscription.", "Contact form."],
  link:"https://fashionstartup.nyc",
  id:3

},
{ source:require('../images/econ3.png'),
  gallery:[require('../images/econ.jpg'),require('../images/econ4.png'),require('../images/econ3.png')],
  title: 'EconToolLab',
  description:
    'An easy-to-use desktop application for visualization and analysis of economic data',

  technologies:"Python Matplotlib Pandas Quandl-API SQL ",
  features:["Imports economic/financial datasets from Quandl API to SQLite Database using Python Pandas library.",
            "Offers interactive graphing tool built with Python Matplotlib for visualizing data and creating custom plots.",
            "Dynamic quantitative analysis (variance, standard deviation, correlation etc.) of data based on user’s input criteria using Python Numpy library."],
  id:4
},
{ source:require('../images/port.jpg'),
  gallery:[require('../images/port.jpg'),require('../images/port2.png')],
  title: 'photographer portfolio',
  description:
  'A minimalistic personal photography / videography portfolio.',
  technologies:"React SCSS Node",
  features:["Masonry gallery layout.", "Lightbox image display"],
  link:"https://jaykim.co",
  id:2

},
  { source:require('../images/b2bpattern2.jpg'),
  gallery:[require('../images/b2bpattern3.png'),require('../images/b2bpattern4.png'),require('../images/b2bpattern2.jpg')],
    title: 'b2bpattern',
    description:
    'An agency that offers a shopping platform for\
    production ready apparel patterns',
    technologies:"Express, Node, MongoDB, AmazonS3",
    features:["Authentication and admin panel for adding, editing, removing inventory."," Product image upload to Amazon S3 bucket using AWS SDK.",
    "Shopping cart and Stripe API checkout integration.",
    "Contact form built using Nodemailer and Google OATH2."],
    link:"https://b2bpattern.com",
    id:5
    },

  {
    description:
    'I build user-friendly, functional websites while maintaining clean and reusable component/module based code.',
    cl:"highlight",
    icon:'FaCode',
    id:6
  }

  ];
