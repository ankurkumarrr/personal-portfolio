// linkType
// 1 == github
// 2 == pdf
// none == chain-link

export const projectsData = [
    {
        id: 1,
        title: 'Parkinsons Detector - DL',
        category: 'Dev',
        shortDesc: `Used TensorFlow to classify healthy and Parkinson's patients based on the Archimedes Spiral and Wave test dataset, achieving 73% accuracy.`,
        fullDesc: `<ul>
                        <li>Implemented a Conv2D Binary Classification Network using Tensorflow.</li>
                        <li>Used the standard Archimedes Spiral and Wave test based dataset to classify between healthy and non healthy patients.</li>
                        <li>Trained model achieved an accuracy of appoximately 0.73 on test data.</li>
                    </ul>
                    <strong>Tech Used : </strong>Pyhton, numPy, pandas, Tensorflow, Deep Learning
                    `,
        linkType: 1 ,
        link: 'https://github.com/ankurkumarrr/Parkinson-Detector'
    },
    {
        id: 2,
        title: 'SeedChain - Web3 kickstarter',
        category: 'Dev',
        shortDesc: ` A decentralized crowdfunding platform on Ethereum, enabling campaign creation, funding, and voting. Empower community-driven projects with blockchain technology.`,
        fullDesc: `<ul>
                        <li>Developed a decentralized crowdfunding platform on Ethereum blockchain.</li>
                        <li>Implemented smart contracts for campaign creation, funding, and voting functionalities.</li>
                        <li>Utilized Next.js for frontend development and Truffle Suite for Ethereum smart contract deployment and testing.</li>
                    </ul>
                    <strong>Tech Used : </strong>Solidity, Next.js, truffle, web3, Smart Contracts, Javascript, Html, Css
                        `,
        linkType: 1,
        link: 'https://github.com/ankurkumarrr/SeedChain'
    },
    {
        id: 3,
        title: 'Hardware Design of SHA256 Hash Processor in Verilog',
        category: 'Electrical',
        shortDesc: `Implemented SHA256 algorithm in Verilog HDL for optimized FPGA performance, targeting Artix 7 integration for digital signatures and HSM functionality.`,
        fullDesc: `<ul>
                        <li>Designed and implemented SHA256 hashing algorithm in Verilog-2001 HDL for FPGA deployment.</li>
                        <li>Designed modular Verilog code for easy integration and iterative clock-driven operation.</li>
                        <li>Observed 25.2ns initialization delay, validating performance optimizations for FPGA deployment.</li>
                    </ul>
                    <strong>Tech Used : </strong>Python, Verilog
                        `,
        linkType: 2,
        link: 'https://drive.google.com/file/d/1V1pWQsSsmC1VtKmaVHPRh-P6P1aa5hMa/view'
    },
    {
        id: 4,
        title: '64-bit 3 Operand Carry Save Adder',
        category: 'Electrical',
        shortDesc: `Implemented a 64-bit 3-Operand Carry Save Adder (CSA) in Cadence Virtuoso, optimized for various operational modes—low power, high performance, and balanced approaches—supported by parametric analysis and Python scripts for data cleaning and graph plotting.`,
        fullDesc: `<ul>
                        <li>Developed a 64-bit Carry Save Adder in Cadence Virtuoso, enhancing cryptographic hardware efficiency.</li>
                        <li>Analyzed delay times and dynamic power across different operational modes—low power, high performance, and balanced approaches.</li>
                        <li>Conducted parametric analysis on delay times and dynamic power across different operational modes using Python scripts for data management and visualization.</li>
                    </ul>
                    <strong>Tech Used : </strong>Cadence Virtuoso, Python
                        `,
        linkType: 2,
        link: 'https://drive.google.com/file/d/1MJLqQMXg0Zba-QvQEeDzNjpBc9e5LVUC/view'
    },
    {
        id: 5,
        title: 'Coherer Effect in Communication Systems',
        category: 'Electrical',
        shortDesc: `Investigated the Coherer Effect in early wireless communication by replicating its functionality with electrodes and metal filings. Demonstrated detection of electromagnetic stimuli and explored implications for noise rejection in communication systems.`,
        fullDesc: `<ul>
                        <li>Successfully replicated the Coherer Effect using electrodes and metal filings, achieving consistent LED activation in response to electromagnetic stimuli.</li>
                        <li>Conducted 10+ trials to demonstrate the system's repeatability, achieving an average voltage spike of 2.5V and a response time of 0.5 seconds.</li>
                        <li>Analyzed data using oscilloscope readings, documenting a 90% reduction in system resistance post-stimulus, showcasing effective noise rejection capabilities.</li>
                    </ul>
                    <strong>Hardware Setup : </strong>glass container, electrodes, aluminium balls (simulating metal filings), a battery, an LED, a lighter, and an oscilloscope.
                        `,
        linkType: 2,
        link: 'https://drive.google.com/file/d/1dQzCaImz-5XVSqvCbgM1J-dUAwpGdRRW/view'
    },
    {
        id: 6,
        title: 'TATA Steel’s TomorrowLAB',
        category: 'CaseStudies',
        shortDesc: `An Ideathon. Researched and an developed an early stage startup upon a set of 11 themes.`,
        fullDesc: `<ul>
                        <li>Implemented a sustainable marketing solution offering extremely affordable water packed in plant-based cartons with embedded seeds for landfill methane absorption.</li>
                        <li>Designed packaging as ad-space, enabling advertisers to cover production costs, ensuring water remains affordable at 75% less than competitors.</li>
                        <li>Demonstrated significant environmental impact with 93% renewable energy use in packaging production, contributing to carbon-negative outcomes.</li>
                    </ul>
                    <strong>Tech Used : </strong>Figma, MS Office
                        `,
        linkType: 2,
        link: 'https://drive.google.com/file/d/1YKMFSO9Sg3RXtXFXDY50BeBtjVGFM9KI/view'
    },
    {
        id: 7,
        title: 'Yellow.Ai Productathon',
        category: 'CaseStudies',
        shortDesc: `Orchestrated a Product Requirements Document (PRD) for integrating humanized bots into VR gaming, optimizing interaction and market impact through detailed survey analysis and phased development.`,
        fullDesc: `<ul>
                        <li>Developed a comprehensive Product Requirements Document (PRD) on integrating humanized bots into VR gaming, emphasizing market growth and enhancing user interaction.</li>
                        <li>Conducted a detailed survey and analysis to gauge customer satisfaction and optimize product features, resulting in a projected revenue growth model using logistic growth.</li>
                        <li>Managed a phased product development approach, integrating text-to-text, speech-to-speech, and virtual reality capabilities, enhancing immersion and user engagement in gaming environments.</li>
                    </ul>
                    <strong>Tech Used : </strong>Figma, MS Office
                        `,
        linkType: 2,
        link: 'https://drive.google.com/file/d/1M6YKoScfRpmibxjmi-TteGpz22oD21a7/view'
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
