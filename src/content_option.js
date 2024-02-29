const logotext = "Hello!";
const meta = {
    title: "Bhavya Chhabra",
    description: "I’m Bhavya, aspiring data scientist with a touch of full stack dev skills (who doesn't like to be an all-rounder?)",
};

const introdata = {
    title: "I’m Bhavya Chhabra",
    animated: {
        first: "I love AI",
        second: "I create cool projects",
        third: "I develop Data Science solutions",
    },
    description: "Coding the Future, Byte by Byte. Explore my Vision of Tomorrow's AI",
    your_img_url: "https://github.com/bhavya1600/Me/blob/57ccaead32a46b2880a19f98fab63376fb2c1a62/assets/img/Me.JPEG?raw=true",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "Hi, I'm Bhavya, an aspiring data scientist based in Canada. My work bridges the gap between technology and practical applications, focusing on using advanced analytics and machine learning to solve real-world problems. With experience ranging from developing AI models at \
    London Hydro to innovative projects in anomaly detection and infrastructure inspection, my career is grounded in applying Python, AI, and cloud technologies to enhance efficiency and decision-making. Holding a Master’s in Computer Science with a specialization in AI, I am committed to \
    lifelong learning and applying my skills to make a tangible impact."
};
const worktimeline = [{
        jobtitle: "Business Systems Analyst",
        where: "London Hydro",
        date: "May 2023-Present",
    },
    {
        jobtitle: "Machine Learning Intern",
        where: "CapmAI",
        date: "Jan - Feb 2023",
    },
    {
        jobtitle: "Data Science Intern",
        where: "Intellipoint Inc.",
        date: "May - Jul 2020",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Deep Learning",
        value: 85,
    },
    {
        name: "SQL",
        value: 80,
    },
    {
        name: "Javascript",
        value: 50,
    },
    {
        name: "Cloud Technologies",
        value: 70,
    },
    {
        name: "Prompt Engineering & AI Tools",
        value: 85,
    },
];

const services = [{
        title: "Autonomous Drone for Infrastructural Inspection and Fault Detection ",
        description: "Automated an open-source drone (CrazyFlie) to fly to a specified portion of a building and survey for detecting faults or cracks using object detection and instance segmentation with YOLOv5 (mAP score: 88.5%, Seg Loss: 0.8%). Annotated and collected data manually. Deployed using Raspberry PI",
    },
    {
        title: "Gastrointestinal System Anomaly Detection",
        description: "Teamed up to build and train a Vision Transformer model for 12-class anomaly detection in the Gastrointestinal (GI) system using AWS. Achieved 93% accuracy and sensitivity, significantly reducing diagnosis time.",
    },
    {
        title: "Advanced Text Classification via LSTM Networks with Hierarchical Attention Mechanism",
        description: "Developed an LSTM-based text classification model with GloVe embeddings and a hierarchical attention mechanism, enhancing accuracy on the DBPedia dataset.",
    },
    {
        title: "Melanoma Skin Cancer Classification using a Custom Integrated Model",
        description: "Conceptualized and innovated a Custom Integrated Computer Vision model by combining a CNN with a tabular model using PyTorch, FastAI framework for improving accuracy in Melanoma classification tasks and utilized the model using StreamLit",
    },
    {
        title: "Stellar Object Classification - ML Comparative Analysis",
        description: "Experimented and compared various ML Algorithms to determine Stellar object classes.",
    },
    {
        title: "Forecasting USA Elections using Twitter Data",
        description: "Predicted Joe Biden's victory in USA Presidential elections by large scale sentiment analysis using tweets spanning over 6 months.",
    },
    {
        title: "Facial Emotion Classifier",
        description: "Developed a multi-class image classifier to detect 6 emotion classes with 85% Accuracy",
    },
];

const dataportfolio = [{
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/drone.png?raw=true",
        description: "Autonomous Drone for Infrastructural Inspection",
        link: "https://github.com/autonomous-inspection",
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/transformer.png?raw=true",
        description: "Advanced Multi-Class Text Classification via LSTM Networks with Hierarchical Attention Mechanism",
        link: "https://github.com/bhavya1600",
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/cancer.png?raw=true",
        description: "Melanoma Skin Cancer Classification using a Custom Integrated Model",
        link: "https://www.ijariit.com/manuscript/melanoma-classification-using-convolutional-neural-network-model-integrated-with-tabular-model/",
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/stellar.png?raw=true",
        description: "Stellar object classification - ML Comparative Analysis",
        link: "https://github.com/bhavya1600",
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/uselections.png?raw=true",
        description: "Forecasting U.S.A Elections",
        link: "https://github.com/Data-Science-Community-SRM/Forecasting-US-Elections",
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/moodycat.png?raw=true",
        description: "Facial Emotion Classifier",
        link: "https://github.com/Data-Science-Community-SRM/MoodyCat",
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/terrorism.png?raw=true",
        description: "Data Analysis of World Terrorism Activities using Big Data Tools",
        link: "https://ieeexplore.ieee.org/document/9315784",
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/crawling.png?raw=true",
        description: "Multilingual Crawling Strategies for Information Retrieval from BRICS Academic Websites",
        link: "https://link.springer.com/chapter/10.1007/978-981-33-4543-0_17",
    },
    
    
    
];

const contactConfig = {
    YOUR_EMAIL: "bchhabr2@gmail.com",
    YOUR_FONE: "(519)697-2236",
    description: "Feel free to get in touch, drop me a message!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_b6z9qik",
    YOUR_TEMPLATE_ID: "template_u4asx6d",
    YOUR_USER_ID: "3D2pndfnSxEEGxJ6e",
};

const socialprofils = {
    github: "https://github.com/bhavya1600/",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/bhavya-chhabra-1600/",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};