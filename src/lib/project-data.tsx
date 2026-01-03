import React from "react";


export type ProjectContent = {
    title: string;
    date: string;
    readTime: string;
    content: React.ReactNode;
    prevProject?: string;
    nextProject?: string;
};

export const projectsData: Record<string, ProjectContent> = {
    "gesture-control": {
        title: "Gesture Control System",
        date: "Nov 2024",
        readTime: "8 min read",
        prevProject: undefined,
        nextProject: "bert-t5",
        content: (
            <>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <p>A multi-functional gesture recognition system that uses <strong>computer vision</strong>, <strong>hand-tracking</strong>, and <strong>AI-powered tools</strong> to control media, presentations, mouse, games, and even generate AI art — all with your hands. 🎥🖱️✋🎮🎨</p>
                    <p>The project integrates <strong>OpenCV</strong>, <strong>MediaPipe</strong>, <strong>PyQt6</strong>, <strong>PyAutoGUI</strong>, <strong>Pycaw</strong>, <strong>Pygame</strong>, and <strong>Hugging Face APIs</strong> to provide an interactive gesture-controlled experience.</p>
                </section>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🚀 Features</h2>

                <h3 className="pt-4 pb-3 text-2xl font-semibold">Movie & Presentation Mode</h3>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li>Play/Pause media with a fist ✊</li>
                    <li>Control volume with a pinch 🤏</li>
                    <li>Slide navigation with left/right index finger 👉👈</li>
                </ul>

                <h3 className="pt-6 pb-3 text-2xl font-semibold">Mouse Control Mode</h3>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li>Control the cursor with your index finger</li>
                    <li>Left click (Thumb–Index pinch)</li>
                    <li>Right click (Thumb–Middle pinch)</li>
                </ul>

                <h3 className="pt-6 pb-3 text-2xl font-semibold">Testing Modes</h3>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li><strong>Hand Detection</strong> → Visualize hand landmarks</li>
                    <li><strong>Gesture Detection</strong> → Finger counting, peace ✌️, thumbs up 👍, etc.</li>
                </ul>

                <h3 className="pt-6 pb-3 text-2xl font-semibold">Air Drawing & Games</h3>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li><strong>Air Canvas</strong> → Draw in the air, fist to clear</li>
                    <li><strong>Flappy Bird Game</strong> → Control the bird with an open palm ✋</li>
                    <li><strong>AI Air Canvas</strong> → Draw → Pinch → Convert sketch to AI-generated art</li>
                </ul>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">Demo Video</h2>
                <section className="flex flex-col gap-5">
                    {/* Video placeholder - Google Drive link: https://drive.google.com/file/d/1kEsPP-eCudheLmIQY7asan2TyT0sf-D9/view?usp=sharing */}
                    <div className="flex flex-col h-fit items-center bg-white/5 p-8 rounded-lg">
                        <p className="text-center text-cfgray mb-4">📹 Project Demo Video</p>
                        <a
                            href="https://drive.google.com/file/d/1kEsPP-eCudheLmIQY7asan2TyT0sf-D9/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-secondary/20 hover:bg-secondary/30 text-secondary rounded-lg transition-colors duration-200 font-semibold"
                        >
                            Watch Demo Video →
                        </a>
                    </div>
                </section>
            </>
        )
    },
    "bert-t5": {
        title: "Transfer Learning with BERT & T5",
        date: "Oct 2024",
        readTime: "6 min read",
        prevProject: "gesture-control",
        nextProject: "stock-portfolio",
        content: (
            <>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <p>An in-depth research project exploring <strong>Transfer Learning</strong> using state-of-the-art NLP models like <strong>BERT</strong> and <strong>T5</strong>.</p>
                </section>
                <h2 className="pt-8 pb-5 text-3xl font-semibold">Problem Statement</h2>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <p>Fine-tuning Large Language Models for specific downstream tasks often requires significant computational resources. We investigated efficient transfer learning techniques.</p>
                </section>
                <h2 className="pt-8 pb-5 text-3xl font-semibold">Tech Stack</h2>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li>Python</li>
                    <li>PyTorch / TensorFlow</li>
                    <li>Hugging Face Transformers</li>
                </ul>
            </>
        )
    },
    "stock-portfolio": {
        title: "Stock Portfolio Optimization",
        date: "Sep 2024",
        readTime: "7 min read",
        prevProject: "bert-t5",
        nextProject: "gait-analysis",
        content: (
            <>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <h1 className="text-4xl font-bold text-header mb-4">Stock Trading Bot Using Reinforcement Learning</h1>
                    <p>This project implements a stock trading bot that utilizes <strong>Reinforcement Learning (RL)</strong> to make trading decisions based on historical stock market data. The bot is trained using <strong>Deep Q-Learning (DQN)</strong> and executes trades based on market indicators.</p>
                </section>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">📂 Project Overview</h2>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <p><strong>Objective:</strong> Build a deep reinforcement learning-based trading agent to optimize stock trading strategies.</p>

                    <h3 className="pt-4 pb-2 text-2xl font-semibold text-header">Technology Stack:</h3>
                    <ul className="list-disc space-y-2 ml-6">
                        <li><strong>Python</strong> (for data processing and modeling)</li>
                        <li><strong>Flask</strong> (for web-based interaction with the trading bot)</li>
                        <li><strong>PyTorch</strong> (for implementing DQN-based reinforcement learning)</li>
                        <li><strong>Alpha Vantage API</strong> (for fetching real-time stock market data)</li>
                    </ul>

                    <h3 className="pt-6 pb-2 text-2xl font-semibold text-header">Main Components:</h3>
                    <ul className="list-disc space-y-2 ml-6">
                        <li><strong>Main_code.py:</strong> Core implementation of stock data processing, trading environment, and reinforcement learning model.</li>
                        <li><strong>app.py:</strong> Flask-based web interface to interact with the trading bot.</li>
                    </ul>
                </section>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🚀 Features</h2>
                <ul className="list-disc space-y-3 ml-6 text-lg text-cfgray">
                    <li><strong>Data Collection:</strong> Fetches real-time stock data from Alpha Vantage API.</li>
                    <li><strong>Technical Indicators:</strong> Uses RSI, MACD, Bollinger Bands, Moving Averages, and more.</li>
                    <li><strong>Reinforcement Learning:</strong> Implements Deep Q-Learning (DQN) for optimal trading decisions.</li>
                    <li><strong>Portfolio Management:</strong> Tracks account balance, holdings, and trading history.</li>
                    <li><strong>Web Interface:</strong> Allows users to select stocks and visualize trading results.</li>
                </ul>
            </>
        )
    },
    "gait-analysis": {
        title: "ML-Based Gait Analysis",
        date: "Aug 2024",
        readTime: "4 min read",
        prevProject: "stock-portfolio",
        nextProject: "fake-news",
        content: (
            <>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <p>Healthcare application using <strong>Machine Learning</strong> to analyze human gait patterns for early diagnosis of disorders.</p>
                </section>
            </>
        )
    },
    "fake-news": {
        title: "Fake News Detection System",
        date: "Jul 2024",
        readTime: "6 min read",
        prevProject: "gait-analysis",
        nextProject: undefined,
        content: (
            <>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <h1 className="text-4xl font-bold text-header mb-4">Fake News Detection</h1>
                    <p>This project focuses on detecting fake news using <strong>machine learning techniques</strong>. It leverages datasets from Kaggle and applies various models to classify news articles as either real or fake.</p>
                </section>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">📂 Project Overview</h2>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <p><strong>Objective:</strong> Build a model that can distinguish between real and fake news articles.</p>

                    <h3 className="pt-4 pb-2 text-2xl font-semibold text-header">Datasets Used:</h3>
                    <ul className="list-disc space-y-2 ml-6">
                        <li><strong>IFND Dataset</strong></li>
                        <li><strong>True.csv & Fake.csv</strong></li>
                    </ul>

                    <p className="pt-4"><strong>Implementation:</strong> The project is implemented in Jupyter Notebook and utilizes libraries such as <strong>pandas</strong>, <strong>scikit-learn</strong>, and <strong>NLTK</strong> for data preprocessing and model training.</p>
                </section>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🚀 Features</h2>
                <ul className="list-disc space-y-3 ml-6 text-lg text-cfgray">
                    <li>Data cleaning and preprocessing</li>
                    <li>Exploratory Data Analysis (EDA)</li>
                    <li>TF-IDF vectorization</li>
                    <li>Model training using various ML algorithms (Logistic Regression, SVM, Random Forest, etc.)</li>
                    <li>Performance evaluation using accuracy, precision, recall, and F1-score</li>
                </ul>
            </>
        )
    }
};
