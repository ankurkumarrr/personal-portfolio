import yellowai from '../../assets/yellowai.jpg';

// linkType
// 1 == github
// 2 == pdf
// none == chain-link

export const projectsData = [
    {
        id: 1,
        image: yellowai,
        title: 'Yellow.ai',
        category: 'Electrical',
        desc: 'This is a case study of Yellow.ai project.',
        linkType: 1,
        link: 'https://github.com/ankurkumarrr/yellowai'
    },
    {
        id: 2,
        image: yellowai,
        title: 'Hellow.ai',
        category: 'Dev',
        desc: 'This is a development project of Hellow.ai.',
        linkType: 2,
        link: 'https://casestudy.com/hellowai'
    },
];

export const projectsNav = [
    {
        name: "all",
    },
    {
        name: "dev",
    },
    {
        name: "electrical",
    },
    {
        name: "caseStudies",
    },
];
