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
    message: "Head TA at Code in Place and Algorithms TA at Iowa State University. Interning as a Software Engineer Intern at Principal Financial Group in Summer 2025.", 
    basedLocation: "Ames, IA",
    resumeLink: "https://drive.google.com/file/d/1DSiVvvn_d0hKfUNQpix3bxvIMcxq2Vdn/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/isulogotransparent.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/jimmyheadshot.jpg',
}

const socialMediaLinks = {
    github: "https://github.com/Karcadian",
    linkedin: "https://www.linkedin.com/in/jimmyle-/",
    medium: "",
    stackoverflow: "",
    xtwitter: ""
} // to add any additional social media links check out the README.md or src/icons.js file

// --- About Section ---
const about = {
    autobiography: [
        "Hi, I'm Jimmy Le, a senior studying Computer Science at Iowa State University. I'm particularly interested in healthtech, edtech, and AI/ML! ",
    ], // Separated items are paragraphs
    techStack: [
        "Python",
        "Java",
        "JavaScript",
        "PHP",
        "C",
        "C++",
        "SQL"
    ],
    photo1Link: "images/jimmymarmot.jpg",
    photo2Link: "images/jimmybird.jpg",
    photo3Link: "images/jimmyicpc.JPG"
}

// --- Experience Section ---
const experiences = [
    {
        position: "Head Teaching Assistant",
        company: {
            name: "Stanford Code in Place",
            link: "https://codeinplace.stanford.edu/team"
        },
        duration: "Mar. 2025 - Present",
        bulletPoints: [
            // "Led outreach efforts to introduce CiP to beginners, presenting at non-CS university clubs and public libraries.",
            // "Reached out to 500+ public libraries in Iowa and 10+ clubs at Iowa State University.",
            // "Moderated forums and resolved conflicts in a large-scale learning environment with 10,000+ students and 700+ section leaders.",
            // "Provided backup instruction, covering 50-minute Python sections for absent Section Leaders.",
            // "Planned and organized events, including an 'Intro to Technical Interviews' session for students exploring tech careers."
        ]
    },
    {
        position: "Algorithms Teaching Assistant",
        company: {
            name: "Iowa State University"
        },
        duration: "Dec. 2024 - Present",
        bulletPoints: [
            // "Led weekly recitations for a 70+ student section on algorithmic problem-solving.",
            // "Held weekly office hours and moderated course forums, addressing student questions.",
            // "Guided students by breaking down their thought process and asking high-level questions.",
            // "Graded 150+ assignments per homework cycle, providing constructive feedback."
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
            // "Taught weekly 50-minute Python sections following Stanford's CS106A curriculum.",
            // "Provided feedback on assignments and coding exercises to reinforce programming concepts.",
            // "Moderated forums and guided students toward correct solutions.",
            // "Offered 1:1 assistance to ensure student comprehension."
        ]
    },
    {
        position: "Full-Stack Software Engineer",
        company: {
            name: "Iowa State University"
        },
        duration: "Nov. 2023 - Jan. 2025",
        bulletPoints: [
            // "Built two PHP/Laravel address book apps for team creation, contact management, and Okta API login.",
            // "Refactored ISU's student toolkit website, MyState, benefiting 20,000+ users.",
            // "Updated outdated Confluence documentation in collaboration with ISU's Web Dev team."
        ]
    },
];


// --- Project Section ---
const works = [
    {
        projectName: "CyMarket",
        yearCompleted: "Jan. 2024 - May 2024",
        description: "An Android application simulating a marketplace specialized for Iowa State University-affiliated users.",
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
        projectName: "CJ Secret Santa",
        yearCompleted: "Dec. 2024",
        description: "Jimmy Le, Cameron Mohne",
        techStack: "React, Flask, MySQL",
        links: [
            {
                label: "",
                type: "external",
                url: "https://www.cj-secret-santa.com/"
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
            email: "jimmyle@iastate.edu", // email takes precedence
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