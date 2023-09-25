const allWork: { [key: string]: any } = {
    "Loremipsum": {
        title: "Loremipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        contribution: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        img: "placeholder",
        techStack: ["Lorem", "Ipsum", "Dolor", "Amet"],
        linkLiveSite: "/",
        linkDevPost: "",
        linkGitHub: "/"
    },
    "Enimminima": {
        title: "Enimminima",
        description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ",
        contribution: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        img: "placeholder",
        techStack: ["Enim", "Minima", "Ut", "Ad"],
        linkLiveSite: "/",
        linkDevPost: "",
        linkGitHub: ""
    },
    "Sedperspiciatis": {
        title: "Sedperspiciatis",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        contribution: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        img: "placeholder",
        techStack: ["Sed", "Ut", "Unde", "Omnis"],
        linkLiveSite: "/",
        linkDevPost: "",
        linkGitHub: "/"
    },
    "Veroeos": {
        title: "Veroeos",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. ",
        contribution: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum.",
        img: "placeholder",
        techStack: ["At", "Vero", "Eos", "Dolor"],
        linkLiveSite: "",
        linkDevPost: "/",
        linkGitHub: "/"
    }
}

const featuredKeys = ["Enimminima", "Sedperspiciatis", "Veroeos"]
const allKeys = ["Veroeos", "Sedperspiciatis", "Loremipsum", "Enimminima"]

const workInfo = {
    featured: featuredKeys.map(key => allWork[key]),
    all: allKeys.map(key => allWork[key])
}

export default workInfo;