const allWork: { [key: string]: any } = {
    "careergram": {
        title: "Careergram",
        description: "An AI-augmented career exploration platform that aims to spur new insight and decision-making for youth programs to support youths’ occupational identities.",
        contribution: "Integrated OpenAI's ChatGPT to enable personalized reflection, leveraging AI-powered natural language processing. Converted existing REST API to GraphQL for database management, streamlining data retrieval processes.",
        img: "careergram",
        techStack: ["NextJS", "GraphQL", "Prisma", "PlanetScale"],
        linkLiveSite: "https://tangramuci.vercel.app/",
        linkGitHub: "",
        linkOthers: ["https://github.com/Design-and-Partnership-Lab/tangram-demo"],
        linkOtherTexts: ["Demo GitHub"],
        linkOtherIcons: ["code"]
    },
    "edsight": {
        title: "Edsight",
        description: "A data analytics platform designed to assist educators in improving their teaching pedagogy through data and reflection. It is part of a broader initiative called PMR2 to develop a system to support the implementation of instructional improvement strategies in middle-school mathematics.",
        contribution: "Built the course settings page, implementing database interactions with CRUD operations and improving the usability of course management features.",
        img: "edsight",
        techStack: ["NextJS", "Prisma", "PlanetScale"],
        linkLiveSite: "https://www.edsight.io/",
        linkGitHub: "",
        linkOthers: ["https://www.pmr2.org/"],
        linkOtherTexts: ["PMR2"],
        linkOtherIcons: ["link"]

    },
    "happy-home": {
        title: "Happy Home",
        description: "A minimalist all-in-one food, water, fitness, and period tracker to aid you in keeping track of your well-being.",
        contribution: "In 36 hours, conceptualized, designed, and developed a user-first well-being tracker. This mobile application offers seamless, real-time synchronization with a cloud database, complemented by user authentication to ensure data security.",
        img: "happy-home",
        techStack: ["Flutter", "Firebase", "Firestore", "Figma"],
        linkLiveSite: "",
        linkGitHub: "https://github.com/sharonm6/happy_home",
        linkOthers: ["https://devpost.com/software/happy-home-hti0z3"],
        linkOtherTexts: ["Devpost"],
        linkOtherIcons: ["link"]
    },
    "dag": {
        title: "Directed Acyclic Graphs",
        description: "The Human Systems Risk Board (HSRB) at NASA created directed acyclic graphs (DAGs) to communicate the causal flow of risk from spaceflight environmental hazards to health outcomes.",
        contribution: "Validated expert-drawn DAGs by generating probabilistic graphical models, populated with empirical biological data from the NASA Open Science Data Repository (OSDR). Researched the NoDAG algorithm to support the HSRB in formalizing a shared causal flow model for astronaut medical risks assessment.",
        img: "dag",
        techStack: ["R", "Python"],
        linkLiveSite: "",
        linkGitHub: "https://github.com/dag-ml/nodag",
        linkOthers: ["https://www.nasa.gov/directorates/esdmd/hhp/human-system-risk-board/", "https://osdr.nasa.gov/"],
        linkOtherTexts: ["HSRB", "OSDR"],
        linkOtherIcons: ["link", "link"]
    },
    "gan": {
        title: "GAN Augmentation",
        description: "Analyzing spaceflight radiation is challenging due to limited available data. We addressed this by augmenting emperical data with synthetic images.",
        contribution: "Trained a Generative Adversarial Network (GAN) to generate images for NASA dataset hosted on AWS. Assessed the efficacy of the GAN-generated images with a ResNet model, achieving a 78% validation accuracy. Optimized model performance through hyperparameter tuning with sweeps and benchmarked results.",
        img: "gan",
        techStack: ["Python", "Pytorch", "Wandb"],
        linkLiveSite: "",
        linkGitHub: "https://github.com/UC-Irvine-CS175/final-project-shenanigans",
        linkOthers: [],
        linkOtherTexts: [],
        linkOtherIcons: []
    }
}

const featuredKeys = ["dag", "careergram", "edsight", "gan", "happy-home"]
const allKeys = ["dag", "careergram", "edsight", "gan", "happy-home"]

const workInfo = {
    featured: featuredKeys.map(key => allWork[key]),
    all: allKeys.map(key => allWork[key])
}

export default workInfo;