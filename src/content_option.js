const logotext = "Hello!";
const meta = {
    title: "Bhavya Chhabra",
    description: "Bhavya Chhabra: data, cloud and AI engineer in London, ON. I build GenAI and multi-agent systems, ML models and GCP data platforms.",
};

const introdata = {
    title: "I’m Bhavya Chhabra",
    animated: {
        first: "I build AI agents",
        second: "I engineer cloud data platforms",
        third: "I ship ML to production",
    },
    description: "Data & Cloud Engineer at London Hydro and Founding Engineer at Helprr. MSc in Computer Science (AI) from Western University.",
    your_img_url: "https://github.com/bhavya1600/Me/blob/57ccaead32a46b2880a19f98fab63376fb2c1a62/assets/img/Me.JPEG?raw=true",
};

const resumeUrl = `${process.env.PUBLIC_URL}/Bhavya_s_Resume.pdf`;

const dataabout = {
    title: "a bit about my self",
    aboutme: "Hi, I'm Bhavya, a data, cloud and AI engineer based in London, Ontario. At London Hydro I'm on the engineering team behind a multi-client GCP platform that serves 10+ Ontario utilities. There I build ETL pipelines on BigQuery, Dataflow and Cloud SQL, train Document AI models that read 45 invoice types, deploy forecasting models for 100,000+ customers, and develop ULTRA, a cross-platform app for field crews. " +
        "I'm also a founding engineer at Helprr, a Canadian services marketplace, where I build core product features and privacy-first identity verification. " +
        "Outside work I build generative AI systems: multi-agent trading research, RAG assistants for healthcare, and LoRA-powered content pipelines. I hold an MSc in Computer Science with an AI specialization from Western University (3.9/4.0).",
};

const worktimeline = [{
        jobtitle: "Business Systems Analyst II, Data & Cloud Engineering",
        where: "London Hydro",
        date: "May 2023 – Present",
        highlights: [
            "Building data and cloud services for a multi-client platform serving 10+ Ontario utilities on GCP",
            "Custom Document AI models that extract fields from 45 invoice types, checked against billing data",
            "ETL pipelines across BigQuery, Dataflow and Cloud SQL that tripled operational efficiency",
            "XGBoost billing forecast that cut forecast error by 60% for 100,000+ customers",
        ],
    },
    {
        jobtitle: "Founding Engineer (Casual)",
        where: "Helprr",
        date: "Nov 2025 – Present",
        highlights: [
            "Core product features for a two-sided Canadian services marketplace",
            "Account-status rules and identity verification designed around Canadian privacy law",
        ],
    },
    {
        jobtitle: "Machine Learning Engineer",
        where: "CapmAI",
        date: "Jan 2023 – May 2023",
        highlights: [
            "Vision Transformer for GI polyp detection (87% accuracy, 91% sensitivity)",
            "Mentored ML interns across a distributed remote team",
        ],
    },
    {
        jobtitle: "Data Science Intern",
        where: "Intellipoint Consulting Inc.",
        date: "May 2022 – Aug 2022",
        highlights: [
            "Market-basket models that raised predictive accuracy by 10% across 30+ retail outlets",
        ],
    },
];

const skillgroups = [{
        name: "Generative AI",
        items: ["LLMs", "RAG", "Agentic Workflows", "Multi-Agent Systems (CrewAI)", "LangChain", "Prompt Engineering", "OpenAI API", "Document AI", "LlamaParse", "LoRA Fine-Tuning"],
    },
    {
        name: "Machine Learning",
        items: ["Vertex AI", "TensorFlow", "PyTorch", "XGBoost", "LSTM", "Vision Transformers", "Time Series Forecasting"],
    },
    {
        name: "Languages",
        items: ["Python", "SQL", "JavaScript", "TypeScript", "Java", "C++", "Bash"],
    },
    {
        name: "Full-Stack",
        items: ["React", "Angular", "Ionic", "Node.js", "Flask", "REST APIs", "HTML/CSS"],
    },
    {
        name: "Cloud & DevOps",
        items: ["GCP (BigQuery, Cloud Run, Cloud Batch, Dataflow, Cloud SQL, GCS, Pub/Sub)", "AWS (Lambda, S3, EC2)", "Docker", "GitHub Actions", "CI/CD", "RunPod Serverless", "Nagios XI"],
    },
    {
        name: "Data & Automation",
        items: ["MySQL", "Firestore", "MongoDB", "Dataform", "ETL/ELT Pipelines", "Looker Studio", "n8n"],
    },
    {
        name: "Practices",
        items: ["Agile Scrum", "Secure Coding", "Privacy-by-Design"],
    },
];

const education = [{
        degree: "MSc in Computer Science, Artificial Intelligence Specialization",
        where: "The University of Western Ontario",
        detail: "GPA 3.9 / 4.0",
        date: "Sep 2021 – Jan 2023",
    },
    {
        degree: "B.Tech in Computer Science Engineering",
        where: "SRM Institute of Science and Technology",
        detail: "89%",
        date: "Jul 2017 – Jun 2021",
    },
];

const certifications = [
    "GCP Associate Cloud Developer (Pursuing)",
    "DeepLearning.AI TensorFlow Developer Specialization",
    "Machine Learning, Stanford Online",
    "Certified Scrum Product Owner, Scrum Alliance",
];

const services = [
    {
        title: "FinSage: Multi-Agent AI Trading System | Python, CrewAI, OpenAI, IBKR API 2025 – 2026",
        description: "Built a multi-agent research stack that combines WorldMonitor (real-time global events filtered by current holdings) with MiroFish (LLM simulation of market reactions) to forecast price movement. Research, signal synthesis and execution run as separate agents, connected to IBKR paper trading for closed-loop validation. The project grew out of an earlier LLM stock-report generator.",
    },
    {
        title: "AI Persona Generation & Social Automation Platform | ComfyUI, LoRA, RunPod, n8n 2026",
        description: "Trained a 128-rank LoRA and served a ComfyUI workflow as a RunPod serverless endpoint. An n8n pipeline takes prompts from Telegram, structures them with an LLM, then handles generation, upscaling and auto-publishing.",
    },
    {
        title: "AI Report Analysis Assistant for Healthcare | Python, RAG, LlamaParse, OpenAI May 2025",
        description: "Built a RAG assistant that lets clinicians ask questions about medical reports in plain language. LlamaParse extracts tables and nested data from PDFs before indexing, and the prompts are tuned to keep answers grounded in the retrieved text.",
    },
    {
        title: "Reposage: GitHub Repository Analyzer | Python, LangChain, OpenAI, Node.js, Flask, JavaScript Feb 2025",
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


// Raw file URL for images hosted in a GitHub repo.
const raw = (repo, path, branch = "master") =>
    `https://raw.githubusercontent.com/${repo}/${branch}/${encodeURI(path)}`;
const ELECTIONS_REPO = "Data-Science-Community-SRM/extracting-tweets-forecasting-the-upcoming-elections-in-the-us";
const EMOTION_REPO = "Data-Science-Community-SRM/Face-Emotion-Recognition";

// Each project opens a modal. Fields:
//   description: card + modal title   year, tags: shown under the title
//   summary: paragraphs               media: [{ src, caption }] gallery
//   links: [{ label, url, type }]     type = github | live | paper | site
const dataportfolio = [
    {
        img: `${process.env.PUBLIC_URL}/img/finsage.svg`,
        title: "FinSage",
        description: "FinSage: Multi-Agent AI Trading System",
        year: "2025 – 2026",
        tags: ["Python", "CrewAI", "OpenAI", "IBKR API"],
        summary: [
            "A multi-agent research stack that forecasts price movement. Two systems feed it. WorldMonitor tracks real-time global events and filters them by the stocks currently held. MiroFish uses LLMs to simulate how the market might react to those events.",
            "Research, signal synthesis and execution run as separate agents. They connect to Interactive Brokers paper trading, so every signal is checked against a real order flow before any capital is at risk.",
            "FinSage grew out of an earlier project that used an LLM to generate stock reports.",
        ],
        media: [],
        links: [
            { label: "GitHub", url: "https://github.com/bhavya1600/FinSage", type: "github" },
            { label: "WorldMonitor (fork)", url: "https://github.com/bhavya1600/worldmonitor-copy", type: "site" },
        ],
    },
    {
        img: `${process.env.PUBLIC_URL}/img/ai-persona.svg`,
        title: "AI Persona",
        description: "AI Persona Generation & Social Automation Platform",
        year: "2026",
        tags: ["ComfyUI", "LoRA", "RunPod Serverless", "n8n"],
        summary: [
            "An end-to-end pipeline that generates and publishes content for a consistent AI persona.",
            "A 128-rank LoRA was trained for the persona. A ComfyUI workflow is served as a RunPod serverless endpoint. An n8n workflow takes prompts from Telegram, structures them with an LLM, then calls the endpoint for generation and upscaling and publishes the results automatically.",
        ],
        media: [],
        links: [
            { label: "RunPod worker (wan-remix)", url: "https://github.com/bhavya1600/wan-remix", type: "github" },
        ],
    },
    {
        img: `${process.env.PUBLIC_URL}/img/clinical-rag.svg`,
        title: "Clinical RAG",
        description: "AI Report Analysis Assistant for Healthcare",
        year: "May 2025",
        tags: ["Python", "RAG", "LlamaParse", "OpenAI"],
        summary: [
            "A retrieval-augmented assistant that lets clinicians ask questions about medical reports in plain language.",
            "Medical PDFs are full of tables and nested sections that naive text extraction breaks. LlamaParse pulls that structure out before indexing, and the prompts are tuned to keep every answer grounded in the retrieved text rather than in the model's general knowledge.",
        ],
        media: [],
        links: [],
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/Github.jpg?raw=true",
        description: "RepoSage: GitHub Repository Analyzer",
        year: "Feb 2025",
        tags: ["LangChain", "OpenAI", "Node.js", "Flask", "JavaScript"],
        summary: [
            "A full-stack tool for understanding a GitHub repository file by file. It produces a call hierarchy and a summary of the whole project, with Markdown and PDF export. It's used to speed up code review and onboarding.",
            "Analysis runs in stages. RepoSage reads the repository's metadata, file tree and README, uses an AI filter to pick the files that matter, analyses each one, builds the call hierarchy, and then writes the overall summary.",
            "It mixes two kinds of model. Reasoning models handle multi-step work like file filtering and call-hierarchy generation, and faster general models handle summarisation. Token usage is tracked so large repositories are summarised instead of hitting context limits.",
        ],
        media: [
            { src: raw("bhavya1600/RepoSage", "assets/RepoSageSS.png", "main"), caption: "RepoSage web interface" },
        ],
        links: [
            { label: "Live demo", url: "https://repo-sage-psi.vercel.app", type: "live" },
            { label: "GitHub", url: "https://github.com/bhavya1600/RepoSage", type: "github" },
            { label: "Sample report", url: "https://github.com/bhavya1600/RepoSage/blob/main/backend/analysis_results.md", type: "site" },
        ],
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/cancer.png?raw=true",
        description: "Melanoma Skin Cancer Classification using a Custom Integrated Model",
        year: "Jun 2021",
        tags: ["Python", "FastAI", "PyTorch", "DenseNet-161", "Streamlit"],
        summary: [
            "A hybrid model that classifies melanoma using both the lesion image and patient metadata, such as age, sex and other biological factors. Most models look at the image alone.",
            "A CNN (DenseNet-161) and a tabular model are trained together with FastAI, and their features are combined before the final prediction. The model reached 96% accuracy and a 0.92 ROC score, was deployed with Streamlit, and was published in IJARIIT.",
        ],
        media: [],
        links: [
            { label: "GitHub", url: "https://github.com/bhavya1600/melanoma-classification-custom-image-tabular-model", type: "github" },
            { label: "Paper (IJARIIT)", url: "https://www.ijariit.com/manuscript/melanoma-classification-using-convolutional-neural-network-model-integrated-with-tabular-model/", type: "paper" },
        ],
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/document-classification.png?raw=true",
        description: "Advanced Multi-Class Text Classification via LSTM Networks with Hierarchical Attention Mechanism",
        tags: ["Python", "LSTM", "GloVe", "Attention"],
        summary: [
            "An LSTM text classifier that uses GloVe embeddings and hierarchical attention: first over the words in each sentence, then over the sentences in each document. This lets the model weight the parts of a document that matter most for its class.",
            "It was evaluated on the DBPedia ontology dataset, where the attention mechanism improved accuracy.",
        ],
        media: [],
        links: [],
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/drone.png?raw=true",
        description: "Autonomous Drone for Infrastructural Inspection",
        year: "Nov 2022",
        tags: ["Python", "C++", "PyTorch", "YOLOv7", "ROS", "Raspberry Pi"],
        summary: [
            "An open-source drone programmed to navigate around buildings on its own and inspect them for structural faults.",
            "A YOLOv7 model detects cracks in real time (88.5% mAP, 0.8 segmentation loss) while the drone streams video. The prototype runs on a Raspberry Pi on board, with ROS for navigation and a web dashboard for monitoring missions. It's projected to cut inspection time by 60% and improve inspector safety by 90%.",
        ],
        media: [],
        links: [
            { label: "GitHub", url: "https://github.com/bhavya1600/autonomous-drone-for-infrastructural-inspection", type: "github" },
            { label: "Project org", url: "https://github.com/autonomous-inspection", type: "github" },
        ],
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/stellar.png?raw=true",
        description: "Stellar object classification - ML Comparative Analysis",
        tags: ["Python", "scikit-learn"],
        summary: [
            "A comparative study of machine learning algorithms for classifying stellar objects from survey data. Several models were trained and evaluated side by side to find the most accurate approach.",
        ],
        media: [],
        links: [
            { label: "GitHub", url: "https://github.com/Rutvik1999/Stellar-Classification", type: "github" },
        ],
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/uselections.png?raw=true",
        description: "Forecasting U.S.A Elections",
        year: "Jun 2021",
        tags: ["Python", "NLP", "Sentiment Analysis", "scikit-learn", "TensorFlow"],
        summary: [
            "This project forecast Joe Biden's victory in the 2020 US presidential election ahead of the vote, using sentiment in tweets about the candidates (Donald Trump, Joe Biden and Kanye West).",
            "Tweets were collected with the Twitter API and GetOldTweets, which works around the API's time limits. They were cleaned with regex preprocessing, scored for polarity, and fed into classification models. The geographic, hourly and word-frequency views shown here come from that analysis.",
        ],
        media: [
            { src: raw(ELECTIONS_REPO, "Graphs/Bidden_daily_sentiment.png"), caption: "Daily sentiment toward Biden" },
            { src: raw(ELECTIONS_REPO, "Graphs/Geomap_senti_Bidden.jpg"), caption: "Sentiment by location (Biden)" },
            { src: raw(ELECTIONS_REPO, "Graphs/Sentiment_trump.png"), caption: "Sentiment toward Trump" },
            { src: raw(ELECTIONS_REPO, "Graphs/Word_map_Bidden.jpeg"), caption: "Most frequent words (Biden)" },
        ],
        links: [
            { label: "GitHub", url: "https://github.com/bhavya1600/forecasting-US-elections", type: "github" },
            { label: "Original repo", url: "https://github.com/Data-Science-Community-SRM/Forecasting-US-Elections", type: "github" },
        ],
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/moodycat.png?raw=true",
        description: "Facial Emotion Classifier",
        tags: ["Python", "TensorFlow", "VGG-16", "OpenCV", "Streamlit"],
        summary: [
            "MoodyCat recognises facial emotions in real time and uses them to recommend music. It's deployed as a Streamlit app.",
            "The face-expression dataset was cleaned by hand and rebalanced. Faces are cropped with Haar cascades to 48×48 greyscale. The model uses transfer learning from VGG-16: a warm-up phase with the base frozen, then full fine-tuning with Adam. It reached 85% accuracy.",
        ],
        media: [
            { src: raw(EMOTION_REPO, "Final-Video.gif"), caption: "Real-time demo" },
            { src: raw(EMOTION_REPO, "tempsnip.png"), caption: "Model output" },
            { src: raw(EMOTION_REPO, "ezgif.com-gif-maker (2).gif"), caption: "Streamlit app" },
        ],
        links: [
            { label: "GitHub", url: "https://github.com/bhavya1600/moodycat", type: "github" },
            { label: "Original repo", url: "https://github.com/Data-Science-Community-SRM/MoodyCat", type: "github" },
        ],
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/GBA.jpg?raw=true",
        description: "GreenButton Alliance Directory Services",
        year: "Jan 2024",
        tags: ["JavaScript", "AWS", "REST APIs", "HTML/CSS"],
        summary: [
            "The Directory Services section of greenbuttonalliance.org, built while at London Hydro. The site's CMS (Novi AMS) couldn't support it natively, so custom scripts hosted on AWS are embedded in the pages.",
            "There are three directories: Utilities, Third-Party App Providers and Platform Providers. Each pulls data from APIs, applies business rules to sort entries into the right directory, and shows them as searchable, filterable, paginated cards, so data custodians, third parties and service providers can find each other.",
        ],
        media: [],
        links: [
            { label: "Live site", url: "https://www.greenbuttonalliance.org/directory-services", type: "live" },
        ],
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/terrorism.png?raw=true",
        description: "Data Analysis of World Terrorism Activities using Big Data Tools",
        tags: ["Big Data", "Data Analysis", "IEEE"],
        summary: [
            "An analysis of global terrorism activity data using big data tools. Published in IEEE Xplore.",
        ],
        media: [],
        links: [
            { label: "Paper (IEEE)", url: "https://ieeexplore.ieee.org/document/9315784", type: "paper" },
        ],
    },
    {
        img: "https://github.com/bhavya1600/Me/blob/main/assets/img/crawling.png?raw=true",
        description: "Multilingual Crawling Strategies for Information Retrieval from BRICS Academic Websites",
        tags: ["Web Crawling", "Information Retrieval", "NLP", "Springer"],
        summary: [
            "Research on crawling strategies for retrieving information from academic websites across the BRICS countries, where content is published in many languages. Published as a chapter by Springer.",
        ],
        media: [],
        links: [
            { label: "Paper (Springer)", url: "https://link.springer.com/chapter/10.1007/978-981-33-4543-0_17", type: "paper" },
        ],
    },
];

const contactConfig = {
    YOUR_EMAIL: "bchhabr2@gmail.com",
    YOUR_FONE: "+1 (519)697-2236",
    description: "Open to roles and collaborations in AI, data and cloud engineering.",
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
    skillgroups,
    education,
    certifications,
    resumeUrl,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
