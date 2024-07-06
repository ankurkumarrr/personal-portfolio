// linkType
// 1 == github
// 2 == pdf
// none == chain-link

export const projectsData = [
    {
        id: 1,
        title: 'Yellow.ai',
        category: 'Electrical',
        shortDesc: 'This is a brief description of the Yellow.ai project.',
        fullDesc: 'This is a detailed case study of the Yellow.ai project, including its objectives, methodology, and outcomes.',
        linkType: 1,
        link: 'https://github.com/ankurkumarrr/yellowai'
    },
    {
        id: 2,
        title: 'Hellow.ai',
        category: 'Dev',
        shortDesc: 'This is a brief description of the Hellow.ai project this is a long desc sdfjhsadklhjf ksjahdfjklsahdf jksadhflkjs hadfkj as sdajhfkljsdhs.',
        fullDesc: `
                    This is a detailed case study of Yellow.ai project.
                    <ul>
                        <li>Conducted comprehensive market analysis</li>
                        <li>Developed a prototype using cutting-edge AI technology</li>
                        <li>Tested and validated the prototype in real-world scenarios</li>
                    </ul>
                    Conclusion and future work discussed the potential improvements and scaling strategies.
                    `,
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
