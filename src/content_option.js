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
        third: "I develop tech solutions",
    },
    description: "Coding the Future, Byte by Byte. Explore my Vision of Tomorrow's AI",
    your_img_url: "https://github.com/bhavya1600/Me/blob/57ccaead32a46b2880a19f98fab63376fb2c1a62/assets/img/Me.JPEG?raw=true",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "Hi, I'm Bhavya, a versatile developer based in Canada. My work bridges the gap between technology and practical applications, combining frontend design, backend architecture, and data analytics to create comprehensive solutions. With experience ranging from developing end-to-end applications at \
    London Hydro to building automated CI/CD pipelines and crafting innovative projects with React, Node.js, and machine learning, my career showcases a broad technical foundation. I thrive on automating complex workflows and creating efficient systems - from database optimization to deployment processes. \
    Holding a Master's in Computer Science, I leverage both UI/UX principles and robust backend systems, while being committed to lifelong learning and building solutions that make a meaningful impact across all layers of modern applications."
};
const worktimeline = [{
        jobtitle: "Data Science and DevOps Engineer",
        where: "London Hydro",
        date: "May 2023-Present",
    },
    {
        jobtitle: "Machine Learning Intern",
        where: "CapmAI",
        date: "Jan - Apr 2023",
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
        value: 90,
    },
    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "React",
        value: 85,
    },
    {
        name: "Linux",
        value: 85,
    },
    {
        name: "Cloud Technologies",
        value: 80,
    },
    {
        name: "Prompt Engineering & AI Tools",
        value: 95,
    },
];

const services = [
    {
        title: "Reposage: GitHub Repository Analyzer | Python, LangChain, OpenAI, Flask, HTML, CSS Feb 2025",
        description: "Developed a full-stack tool that automatically analyzes GitHub repositories and generates detailed technical reports using Large Language Models (LLMs) via LangChain and OpenAI. Engineered a modular backend that parses repository structure, code files, and documentation, then summarizes architecture, dependencies, key modules, and contribution guidelines. Built a Flask-based web interface with input forms, markdown preview, and PDF export functionality.",
    },
    {
        title: "Directory Services Web Development - London Hydro | AWS, JavaScript, HTML, CSS Jan 2024",
        description: "Designed and implemented the Directory Services section for greenbuttonalliance.org, overcoming Novi AMS limitations by creating custom scripts hosted on AWS and embedding them via iframes. Built three distinct directories—Utilities, Third Party App Providers, and Platform Providers—by fetching data through API calls, applying business logic for content segregation, and dynamically displaying searchable, filterable, and paginated cards. Implemented dynamic search tools and filters, enabling efficient partner discovery and seamless collaboration between data custodians, third parties, and service providers.",
    },
    {
        title: "Billing Forecast System - London Hydro | Python, Sklearn, MySQL Aug 2023",
        description: "Utilized XGBoost Decision Trees (ML Model) to refine the existing Non-ML based billing forecast system, decreasing percentage error by 60%. Improved forecast accuracy and customer satisfaction for over 100,000 users.",
    },
    {
        title: "Electric Vehicle Detection using Hourly Energy Usage Data - London Hydro | Python, TensorFlow Jun 2023",
        description: "Developed a Deep Convolutional LSTM model to accurately identify and segment over 30,000 Electric Vehicle customers based on hourly electricity usage data. This segmentation enabled targeted marketing for the new Ultra Low Overnight price plan, increasing customer engagement and adoption rates.",
    },
    {
        title: "Autonomous Drone for Infrastructural Inspection - UWO | Python, C++, PyTorch, Raspberry Pi Nov 2022",
        description: "Programmed an open-source drone to autonomously navigate and inspect building infrastructures for faults using YOLOv7, achieving an 88.5% MAP score and 0.8 Seg Loss. Implemented real-time crack detection and video streaming capabilities and prototyped using Raspberry PI on board. Projected to reduce inspection times by 60% and increase human safety by 90%.",
    },
    {
        title: "Melanoma Skin Cancer Classification - SRMIST | Python, FastAI Jun 2021",
        description: "Innovated a hybrid model combining Convolutional Neural Network (CNN) with a tabular model using PyTorch and FastAI for Melanoma classification, achieving 96% accuracy and a 92% ROC score, deployed using Streamlit.",
    },
    {
        title: "Forecasting USA Elections 2020 - SRMIST | Python, Sklearn, TensorFlow, NLP Jun 2021",
        description: "Predicted President Joe Biden's victory through sentiment analysis and Natural Language Processing (NLP) techniques using Twitter data before the elections.",
    },
    {
        title: "Gastrointestinal System Anomaly Detection",
        description: "Teamed up to build and train a Vision Transformer model for 12-class anomaly detection in the gastrointestinal system using AWS. Achieved 93% accuracy and sensitivity, significantly reducing diagnosis time.",
    },
    {
        title: "Advanced Text Classification via LSTM Networks with Hierarchical Attention Mechanism",
        description: "Developed an LSTM-based text classification model with GloVe embeddings and a hierarchical attention mechanism, enhancing accuracy on the DBPedia dataset.",
    },
    {
        title: "Stellar Object Classification - ML Comparative Analysis",
        description: "Experimented with and compared various ML algorithms to determine stellar object classes.",
    },
    {
        title: "Forecasting USA Elections using Twitter Data",
        description: "Predicted Joe Biden's victory in the USA presidential elections through large-scale sentiment analysis of tweets spanning over six months.",
    },
    {
        title: "Facial Emotion Classifier",
        description: "Developed a multi-class image classifier to detect six emotion classes with 85% accuracy.",
    },
];


const dataportfolio = [
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/Github.jpg?raw=true",
        description: "RepoSage: GitHub Repository Analyzer",
        link: "https://github.com/bhavya1600/RepoSage",
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/GBA.jpg?raw=true",
        description: "GreenButton Alliance Directory Services",
        link: "https://www.greenbuttonalliance.org/directory-services",
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/drone.png?raw=true",
        description: "Autonomous Drone for Infrastructural Inspection",
        link: "https://github.com/autonomous-inspection",
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/document-classification.png?raw=true",
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
        link: "https://github.com/Rutvik1999/Stellar-Classification",
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
    YOUR_FONE: "+1 (519)697-2236",
    description: "Feel free to get in touch, drop me a message!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_b6z9qik",
    YOUR_TEMPLATE_ID: "template_u4asx6d",
    YOUR_USER_ID: "3D2pndfnSxEEGxJ6e",
};

const socialprofils = {
    github: "https://github.com/bhavya1600/",
    linkedin: "https://www.linkedin.com/in/bhavya-chhabra-1600/",
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
