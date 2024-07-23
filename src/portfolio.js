/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Princy Patwa",
  title: "Hi, I'm Princy",
  subTitle: emoji(
    "I'm a Front-end Developer  Currently looking for an opportunity to utilize my technical skills in a challenging working environment and become a valuable asset to the organization."
  ),
  resumeLink:
    "https://shorturl.at/ZtYS4", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/princy1160/",
  linkedin: "https://www.linkedin.com/in/princy-patwa-cse/",
  gmail: "princypatwa2003@gmail.com/",
  leetcode: "https://leetcode.com/princypatwa2003/",
  // medium: "https://medium.com/@princyspatwa.14",
  // gitlab: "https://gitlab.com/https://gitlab.com/princypatwa1",
  // facebook: "https://www.facebook.com/princy.patwa.583",
  // stackoverflow: "https://stackoverflow.com/users/19699835/princy-patwa",
  // qwiklabs : "https://www.cloudskillsboost.google/public_profiles/48810fe0-70af-47a2-acec-1c76c9bbdde0",
  //twitter: "https://twitter.com/PrincySha54513629",
  // instagram:"https://www.instagram.com/as_sparker/",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    " FRONT-END DEVELOPER",
  skills: [
    emoji("⚡ Developed Web Applications and Python Projects"),
    // emoji(
    //   "⚡ Data Strucutre Algorithm: 750+ Problems Solved, Knight on Leetcode 1890 Rating with 20 Badge & 380 days streak"
    // ),
    // emoji("⚡ Exploring DevOps Knows Docker and learning Jenkins")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fizz_icon: "icon-cplusplus",
      color: "cyan"
    },

    {
      skillName: "Python",
      fizz_icon: "icon-python",
      color: "green"
    },
    {
      skillName: "JavaScript",
      fizz_icon: "icon-javascript-alt",
      color: "red"
    },
    // {
    //   skillName: "Reactjs",
    //   fizz_icon: "icon-reactjs",
    //   color: "cyan"
    // },
    // {
    //   skillName: "Nodejs",
    //   fizz_icon: "icon-nodejs",
    //   color: "green"
    // },
    {
      skillName: "HTML",
      fizz_icon: "icon-html5-alt",
      color: "orange"
    },
    {
      skillName: "CSS",
      fizz_icon: "icon-css3-alt",
      color: "maroon"
    },
    // {
    //   skillName: "Mongodb",
    //   fizz_icon: "icon-mongodb",
    //   color: "green"
    // },
    {
      skillName: "SQL:-Database",
      fizz_icon: "icon-mysql-alt",
      color: "cyan"
    },
    // {
    //   skillName: "Redis:-Database",
    //   fizz_icon: "icon-redis",
    //   color:"red"
    // },
    // {
    //   skillName: "Firebase",
    //   fizz_icon: "icon-fire-alt",
    //   color: "orange"
    // },

    // {
    //   skillName: "Docker",
    //   fizz_icon: "icon-docker",
    //   color: "cyan"
    // }
    // {
    //   skillName: "Jenkins",
    //   fontAwesomeClassname: "fab fa-jenkins",
    //   color:"maroon"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maulana Azad National Institute of Technology Bhopal(MANIT Bhopal)",
      logo: require("./assets/images/manit.png"),
      subHeader:
        "Computer Science Engineering",
      duration: "Nov 2022 - May 2026",
      desc: " Zenith- Member of The Programming Club of MANIT ",
      // descBullets: [
      //   "Worked for Startup in IIT Mandi Catalyst on decreasing the cost of travelling and Cleared Stage-1 of Entrepreneurship Practicum ",
      //   "Team Leader of Design Practicum and Fabricated a Working Prototype of Hand Rehabilizer"
      // ]
    },
    {
      schoolName: "Jawahar Navodaya Vidyalaya, Datia, Madhya Pradesh",
      logo: require("./assets/images/jnv.png"),
      subHeader: "Maths, Physics, Chemistry",
      duration: "July 2016 - April 2020",
      desc: " Class XII : 80.4 % and X : 79%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    // {
    //   Stack: "Backend",
    //   progressPercentage: "70%"
    // },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
  
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on`

const bigProjects = {
  title: "🛠️ Projects 👨‍💻 ",
  subtitle: "Own Personal Project",
  projects: [
   

    {
      image: require("./assets/images/pathfinding.gif"),
      projectName: "Sorting Algorithms Visualizer",
      projectDesc:
        "Developed a real time Sorting Algorithms Visualizer App using Python.Includes Bubble Sort, Insertion Sort, Selection Sort, Quick Sort, and Merge Sort.",
      footerLink: [
        {
          name: "Demo",
          url: "https://github.com/princy1160/sorting_visualizer_app"
        },
        {
          name: "Github Link",
          url: "https://github.com/princy1160/sorting_visualizer_app"
        }
        //  you can add extra buttons here.
      ]
    },

    
    
    {
      image: require("./assets/images/disneyplus.gif"),
      projectName: "Disney-Plus-2.0",
      projectDesc: `Deployed a web application which showcase cartoon movies collection
      with recommendation. Implemented responsive design and integrated
      Firebase to seamlessly store data, handle Google authentication, and
      provide real-time updates to the application.
      `,
      footerLink: [
        {
          name: "Demo",
          url: "https://github.com/princy1160/MagicStream/"
        },
        {
          name: "Github Link",
          url: "https://github.com/princy1160/MagicStream"
        }
      ]
    },
    
    {
      image: require("./assets/images/space_shooter.png"),
      projectName: "Space Invader Game",
      projectDesc:
        "Developed an engaging Space Invader game using Python and Pygame. Designed intuitive game mechanics, including spaceship controls and bullet shooting.",
      footerLink: [
        {
          name: "Demo",
          url: "https://github.com/princy1160/space_invader_game/"
        },
        {
          name: "Github Link",
          url: "https://github.com/princy1160/space_invader_game"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" 🏅 Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "TechGig Geek goddess 🎯   ",
      subtitle: `🚀 Shortlisted for TechGig Geek goddess coding finale round and secured 391 rank.
        
        

in Leetcode`,
      image: require("./assets/images/Techgig.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "TechGig Profile",
          url: "https://www.techgig.com/geekgoddess/pub/princypatwa"
        }
      ]
    },
    {
      title: "Super-100",
      subtitle:
        "Cleared Super-100 scholarship test from pan India.",
      image: require("./components/Super-30.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "View My Certificate",
          url: "https://drive.google.com/file/d/1zkFuHrLnlHKxuxXLd9UdD6y8fTpylEI1/view?usp=drivesdk"
        }
      ]
    },

    {
      title: "Vigyan-Manthan-Yatra",
      subtitle:
        "Cleared Vigyan Manthan Yatra Scholarship Exam and got Scholarship through test conducted in Pan India.",
      image: require("./assets/images/vigyan_manthan.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1zYid1SE84GLT-MPKuYP7Y8kPAoWXijDW/view?usp=drivesdk"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    },
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(" "),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  
  email_address: "princypatwa2003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
