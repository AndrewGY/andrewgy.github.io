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
        endTime:"Dec 2022",
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
    {
        id:4,
        company:"FAO - United Nations",
        startTime:"Jan. 2025",
        endTime:"Present",
        role:"Data Scientist",
        responsibilities:[
            {
                id:0,
                description:"Implemented ML models for land use classification and change detection using satellite imagery",
            },
            {
                id:1,
                description:"Developed ETL pipelines and data workflows to process cadastral records, land titles and geospatial data for the project",
            },
            {
                id:2,
                description:"Development work on next-generation lease management system for public use, enabling streamlined property administration",
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
        projectName:"Doctrina",
        description:"Educational Technology Provider operating in the Caribbean to thousands of students. Providing Managed Learning Management Hosting services as well as innovative solutions for low connectivity areas.",
        url:"https://doctrinaedu.com",
        github:"",
        img:"project-img-2.png",
        tech:[
            {
                id:0,
                techName:"PHP"
            },
            {
                id:1,
                techName:"Typescript"
            },
            {
                id:2,
                techName:"Moodle"
            },
            {
                id:3,
                techName:"Java"
            }
        ]
    },
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
    // {
    //     id: 1,
    //     projectName: "CareerForge",
    //     description: "AI-powered Career Assistant with resume generation and optimization, cover letter assistance, interview preparation and automated job scraping among other features.",
    //     url: "https://careerforges.com",
    //     github: "",
    //     tech: [
    //         {
    //             id: 0,
    //             techName: "Next.JS"
    //         },
    //         {
    //             id: 1,
    //             techName: "React"
    //         },
    //         {
    //             id: 2,
    //             techName: "Docker"
    //         },
    //         {
    //             id: 3,
    //             techName: "Playwright"
    //         },
    //     ]
    // },
    {
        id: 1,
        projectName: "Custom LMS Integration",
        description: "Microservice facilitating integration of the Moodle Learning Management System with a Student Record System for a technical institute based in Guyana.",
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
        projectName: "Lane Detection Model for Autonomous Vehicles",
        description: "Development work on a specialized CNN architecture for robust lane detection in adverse weather conditions for a US-based startup. Details limited by NDA.",
        url: "",
        github: "",
        img: "project-img-2.png",
        tech: [
            {
                id: 0,
                techName: "PyTorch"
            },
            {
                id: 1,
                techName: "OpenCV"
            },
            {
                id: 2,
                techName: "TensorRT"
            },
            {
                id: 3,
                techName: "CUDA"
            },
        ]
    },    {
        id: 3,
        projectName: "Minerva",
        description: "An AI-powered Health, Safety, Security and Environment (HSSE) monitoring system that uses a YOLO-based computer vision model to analyze video feeds in real-time for safety violations, automatically reporting incidents for further investigation.",
        url: "",
        github: "",
        tech: [
            {
                id: 0,
                techName: "YOLO"
            },
            {
                id: 1,
                techName: "OpenCV"
            },
            {
                id: 2,
                techName: "Next.js"
            },
            {
                id: 3,
                techName: "Flask"
            }
        ]
    },
    {
        id: 4,
        projectName: "HarvestBox",
        description: "An AI-powered meal planning application that provides personalized recipe recommendations based on users' dietary preferences, nutritional goals, and ingredient availability. Similar to HelloFresh but with intelligent customization.",
        url: "",
        github: "",
        tech: [
            {
                id: 0,
                techName: "Angular"
            },
            {
                id: 1,
                techName: "Flask"
            },
            {
                id: 2,
                techName: "MongoDB"
            },
            {
                id: 3,
                techName: "OpenAI API"
            }
        ]
    },
    ]


export const awards = [
    {
        id:0,
        awardName:"Office of the Prime Minister x SBM Offshore Innovation Challenge 2025 (Guyana)",
        rank:"Winner",
        description:"HSSE System for SBM Offshore"
    },
    {
        id:1,
        awardName:"Guyana Innovation Prize",
        rank:"Winner",
        description:"Winner of the 2022/2023 Guyana Innovation Prize Award from the Guyana Economic Development Trust for work with AI in Medicine."
    },
    {
        id:2,
        awardName:"Office of the Prime Minister Innovation Challenge 2022 (Guyana)",
        rank:"Winner",
        description:"Environmental Simulation Model"
    },
    {
        id:3,
        awardName:"Office of the Prime Minister Innovation Challenge 2020 (Guyana)",
        rank:"Runner Up",
        description:"Learning Management System for National Schools"
    },
    {
        id:4,
        awardName:"Dean's List / Honor's Roll",
        rank:"",
        description:"2018-2020"
    },
    {
        id:5,
        awardName:"Guyana Innovation Prize",
        rank:"Fellow",
        description:"Selected as a fellow by the Guyana Economic Development Trust for the 2022 Guyana Innovation Prize."
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
        name:"Edinburgh Business School",
        degree:"MSc Digital Leadership",
        startingFrom:"2023",
        endingAt:"2025"
    },
]


export const userEmail = "andrew.gy592@gmail.com"
export const userLinkedin = "https://linkedin.com/in/andrew-garnett-gy/"
export const userGithub = "https://github.com/AndrewGY"
