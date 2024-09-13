// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: false, // activate for all sections
    onlyLanding: true, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 1.0 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = false // recommended: for best behavior after refresh

// --- Greeting Section ---
const greeting = {
    intro: "",
    name: "Jimmy Le",
    message: "Computer Science junior with experience in full-stack development. Currently working as a software developer at my university building web applications.",
    basedLocation: "Ames, IA",
    resumeLink: "https://drive.google.com/drive/u/0/folders/1zxdo_mfu7IDuuYi5W6N4e90piHxdk2oC", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/isulogotransparent.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/jimmyheadshot.jpg',
}

const socialMediaLinks = {
    github: "https://github.com/Karcadian",
    linkedin: "https://www.linkedin.com/in/jimmy-le-155695241/",
    medium: "",
    stackoverflow: "",
    xtwitter: ""
} // to add any additional social media links check out the README.md or src/icons.js file

// --- About Section ---
const about = {
    autobiography: [
        "My name is Jimmy Le, and I'm a junior studying computer science at Iowa State University. My interest in problem-solving began with AP Computer Science A in high school. After my freshman year at Iowa State, I underwent spinal fusion surgery, which limited my ability to pursue academic and professional opportunities during that summer. However, I have mostly recovered and started working as a part-time software developer for my university during my sophomore year. Additionally, from April to June 2024, I taught a section of 12 students using Stanford's CS106A curriculum through Stanford's Code in Place program.",
    ], // Separated items are paragraphs
    techStack: [
        "Java",
        "Python",
        "JavaScript",
        "PHP",
        "C/C++",
        "MySQL",
        "React",
        "Vue.js"
    ],
    photo1Link: "images/jimmymarmot.jpg",
    photo2Link: "images/jimmybird.jpg",
    photo3Link: "images/jimmyicpc.JPG"
}

// --- Experience Section ---
const experiences = [
    {
        position: "Student Software Developer",
        company: {
            name: "ISU",
            link: "https://www.it.iastate.edu/teams/development-integration"
        },
        duration: "Nov. 2023 - Present",
        bulletPoints: [
            "Develop full-stack web applications for Iowa State University's clients in an Agile environment, contributing to improved user experiences and streamlined data management.",
            "Reviewed and improved training methods through collaboration with the ISU Web Development team by updating outdated documentation.",
            "Created two address book applications, allowing users to make teams, create contacts, and safely log in using ISU's Okta API."
        ],
        hashtags: [
        ]
    },
    {
        position: "Section Leader",
        company: {
            name: "Stanford Code in Place",
            link: "https://codeinplace.stanford.edu/"
        },
        duration: "Apr. 2024 - June 2024",
        bulletPoints: [
            "Prepared and taught 50-minute weekly sections in Python following Stanford's CS106A curriculum to a section of 12 students.",
            "Helped answer student concerns on forums, fostered a welcoming environment, and guided students toward forming correct solutions to problems.",
            "Checked in with students to ensure they understood concepts, lessons, and dedicated extra time 1:1 for extra review."
        ],
        hashtags: [
        ]
    }
]

// --- Project Section ---
const works = [
    {
        projectName: "CyMarket",
        yearCompleted: "Jan. 2024 - May 2024",
        description: "Developed and led a team of four in an Android application simulating a marketplace specialized for Iowa State University-affiliated users.",
        techStack: "Java, Springboot, MySQL",
        links: [
            {
                label: "",
                type: "external",
                url: "https://www.youtube.com/watch?v=fuxOwWdZOas&list=PL6BdlkdKLEB9h28E61p7hHIJW62bzfRjM&index=38"
            }
        ],
        imageLink: "images/cymarket.png",
        alignLeft: false
    },
    {
        projectName: "React Weather App",
        yearCompleted: "Nov. 2023",
        description: "Developed a responsive React Weather Application, allowing users to retrieve 7-day forecasts for cities of their choice. Incorporated React, JavaScript, and GeoDB API to optimize the search functionality for precise weather data. Integrated Node.js with OpenWeather API for real-time weather data, deploying the app on GitHub Pages for convenient access. Designed a user-friendly interface focusing on responsiveness, delivering a seamless experience for users exploring weather forecasts for diverse cities.",
        techStack: "React, JavaScript, Node.js, HTML/CSS",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/Karcadian/ReactWeatherApp"
            },
        ],
        imageLink: "images/reactweatherapp.png",
        alignLeft: true
    },
    {
        projectName: "Secret Santa Website",
        yearCompleted: "Nov. 2022 - Dec. 2022",
        description: "In a team of two, developed a user-centric front-end with HTML/CSS and integrated it with a Python/Flask back-end, creating an intuitive interface for Secret Santa event management.",
        techStack: "HTML, CSS, SQL",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/icl0ud/secretsanta2022"
            },
            {
                label: "",
                type: "external",
                url: "https://cameronmohne.pythonanywhere.com/home"
            }
        ],
        imageLink: "images/secretsanta.png",
        alignLeft: false
    },
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in touch!",
        note: [
            "",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "jimmyle@iastate.edu", // email takes precedance
            other: ""
        },
        responseTimeMessage: ""
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}