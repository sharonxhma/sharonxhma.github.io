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
    "Veroeos": {
        title: "Veroeos",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. ",
        contribution: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum.",
        img: "placeholder",
        techStack: ["At", "Vero", "Eos", "Dolor"],
        linkLiveSite: "",
        linkGitHub: "",
        linkOthers: [],
        linkOtherTexts: [],
        linkOtherIcons: []
    }
}

const featuredKeys = ["careergram", "edsight", "happy-home"]
const allKeys = ["careergram", "edsight", "happy-home"]

const workInfo = {
    featured: featuredKeys.map(key => allWork[key]),
    all: allKeys.map(key => allWork[key])
}

export default workInfo;