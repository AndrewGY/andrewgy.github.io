export const experience = [
    {
        id:0,
        company:"CARICOM Secretariat",
        startTime:"July, 2018",
        endTime:"Sept. 2018",
        role:"Intern",
        responsibilities:[
            {
                id:0,
                description:"Researcher in the ICT4Development department of CARICOM HQ - intergovernmental organisation consisting of 15 countries.",            
            },
            {
                id:1,
                description:"Wrote numerous data-driven reports on topics related to technology in the region to facilitate improved decision-making by the department.",
            },
            {
                id:2,
                description:"Created several application mockups and submitted critiques to revitalize the department's online presence.",
            },
        ],
    },
    {
        id:1,
        company:"Guyana Defence Force",
        startTime:"Sept, 2019",
        endTime:"Apr, 2020",
        role:"Junior Software Engineer",
        responsibilities:[
            {
                id:0,
                description:"Functioned as a civilian employee (work bound by confidentiality agreements) in the Guyana Defence Force's Smart City Project during my final year of studies.",
            },
            {
                id:1,
                description:"Completed several Big Data & IoT courses provided by Huawei",            
            },
        ],
    },
    {
        id:2,
        company:"Unity Guyana",
        startTime:"Sept, 2019",
        endTime:"Present",
        role:"VP, Co-Founder",
        responsibilities:[
            {
                id:0,
                description:"Launched online platform that is being used to aid the professional advancement of youth in Guyana",
            },
            {
                id:1,
                description:"Collaborated with local branch of UNICEF and the Civil Defence Commission",
            },
        ],
    },
    {
        id:3,
        company:"University of Guyana",
        startTime:"Nov. 2020",
        endTime:"Dec 2022",
        role:"Software Engineer",
        responsibilities:[
            {
                id:0,
                description:"PHP Development of in‑house Student Record and Human Resource Management systems",
            },
            {
                id:1,
                description:"AWS Administration ‑ Experience with EC2, RDS, Cloudformation, IAM, Lambda",
            },
            {
                id:2,
                description:"Integrated in‑house information systems with Moodle Learning Management System, Examsoft, Unitime Timetabling software etc",
            },
        ],
    },
]


export const featured_projects = [
    {
        id:0,
        projectName:"CheXidator",
        description:"Convolutional Neural Network to automatically evaluate the validity of posterior-anterior chest x-ray images in radiology departments of hospitals. Also outputs heatmap visualization of results based on recent development in Gradient-weighted Class-activation mapping",
        url:"",
        github:"https://github.com/AndrewGY/CheXidator",
        img:"chexidator.png",
        tech:[
            {
                id:0,
                techName:"PyTorch"
            },
            {
                id:1,
                techName:"OpenCV"
            },
            {
                id:2,
                techName:"Flask"
            },
            {
                id:3,
                techName:"Google Colaboratory"
            }
        ]
    },
    {
        id:1,
        projectName:"Electronic Voting dApp",
        description:"Development of prototype for a decentralized application (dApp) that can facilitate e-voting. Ethereum Smart contact was implemented with Solidity",
        url:"",
        github:"",
        img:"project-img-2.png",
        tech:[
            {
                id:0,
                techName:"Solidity"
            },
            {
                id:1,
                techName:"React"
            },
            {
                id:2,
                techName:"Metamask"
            },
            {
                id:3,
                techName:"Truffle"
            }
        ]
    },
    // {
    //     id:2,
    //     projectName:"Third Project",
    //     description:"Custom wordpress theme built with Timber and Woocommerce for blistabloc, the only reactive shoe insert that prevents blisters from forming.",
    //     url:"https://google.com",
    //     github:"",
    //     img:"project-img-1.png",
    //     tech:[
    //         {
    //             id:0,
    //             techName:"VS Code"
    //         },
    //         {
    //             id:1,
    //             techName:"JavaScript"
    //         },
    //         {
    //             id:2,
    //             techName:"TypeScript"
    //         },
    //         {
    //             id:3,
    //             techName:"XCode"
    //         }
    //     ]
    // },
]

export const projects = [
    {
        id:0,
        projectName:"Sylvanus",
        description:"CNN Model to detect gunshot and chainsaw sounds (typically associated with illegal logging) from typical forest ambience.",
        url:"",
        github:"",
        tech:[
            {
                id:0,
                techName:"Tensorflow"
            },
            {
                id:1,
                techName:"Librosa"
            },
            {
                id:2,
                techName:"AWS Sagemaker"
            },
        ]
    },
    {
        id: 1,
        projectName: "Custom LMS Integration",
        description: "Microservice facilitating integration of the Moodle Learning Management System with a Student Record System.",
        url: "",
        github: "",
        tech: [
            {
                id: 0,
                techName: "Quarkus"
            },
            {
                id: 1,
                techName: "Docker"
            },
            {
                id: 2,
                techName: "Kafka"
            },
        ]
    },
    {
        id: 2,
        projectName: "CuisineWhiz",
        description: "CuisineWhiz is a compact project that suggests personalized recipes based on the user's dietary preferences and available ingredients. The system analyzes the user's input, such as dietary restrictions, preferred cuisines and ingredients on hand, to generate tailored recipe recommendations.",
        url: "",
        github: "",
        tech: [
            {
                id: 0,
                techName: "Python"
            },
            {
                id: 1,
                techName: "Flask"
            },
            {
                id: 2,
                techName: "Pandas"
            },
            {
                id: 3,
                techName: "Spoonacular API"
            },
        ]
    },
    ]


export const awards = [
    {
        id:0,
        awardName:"Office of the Prime Minister Innovation Challenge 2020 (Guyana)",
        rank:"Runner Up",
        description:""
    },
    {
        id:1,
        awardName:"Dean's List / Honor's Roll",
        rank:"",
        description:"2018-2020"
    },
    {
        id:2,
        awardName:"Guyana Innovation Prize",
        rank:"Winner",
        description:"Winner of the 2022/2023 Guyana Innovation Prize."
    }
]

export const education = [
    {
        id:0,
        name:"University of Guyana",
        degree:"ASc Computer Science",
        grade:"Credit",
        startingFrom:"2016",
        endingAt:"2018"
    },
    {
        id:1,
        name:"University of Guyana",
        degree:"BSc Computer Science",
        grade:"Distinction",
        startingFrom:"2018",
        endingAt:"2020"
    },
    {
        id:2,
        name:"Heriot-Watt University",
        degree:"MSc Digital Leadership",
        startingFrom:"2022",
        endingAt:"2025"
    },
    // {
    //     id:2,
    //     name:"University of London",
    //     degree:"Bachelors in CS",
    //     startingFrom:"2017",
    //     endingAt:"2021"
    // }
]


export const userEmail = "andrew.gy592@gmail.com"
export const userLinkedin = "https://www.linkedin.com/in/andrew-garnett-gy/"
export const userGithub = "https://github.com/AndrewGY"
