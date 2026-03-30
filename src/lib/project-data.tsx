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
    "shadow-mind": {
        title: "ShadowMind",
        date: "2026",
        readTime: "7 min read",
        prevProject: undefined,
        nextProject: "failure-aware-vision",
        content: (
            <>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <p>An <strong>Autonomous AI Investigation Agent</strong> that goes beyond standard single-pass RAG. It uses a <strong>hypothesis-driven agentic RAG pipeline</strong> to autonomously generate theories, retrieve targeted evidence, and loop until convergence.</p>
                    <p>Built with <strong>LangGraph</strong> for agent orchestration and <strong>Qdrant</strong> for high-performance vector retrieval.</p>
                </section>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🚀 Key Contributions</h2>
                <ul className="list-disc space-y-4 ml-6 text-lg text-cfgray">
                    <li>
                        <strong>Agentic RAG Pipeline</strong> — Engineered a hypothesis-driven workflow using LangGraph where the agent generates competing theories, retrieves evidence from Qdrant, scores confidence, and iterates until convergence.
                    </li>
                    <li>
                        <strong>Custom Web Ingestion</strong> — Built a pipeline using <strong>BeautifulSoup</strong> to scrape, clean, and chunk 150+ articles across 30+ topics into a semantically searchable corpus using <strong>Cohere embed-english-v3.0</strong>.
                    </li>
                    <li>
                        <strong>Structured Reasoning</strong> — Enforced fully structured LLM outputs using <strong>Pydantic v2</strong> across all 5 agent nodes, with <strong>Groq (Llama 3.3 70B)</strong> as the reasoning engine for sub-second inference.
                    </li>
                </ul>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🛠️ Tech Stack</h2>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li><strong>LangGraph</strong> — Agentic workflow orchestration</li>
                    <li><strong>Qdrant</strong> — Vector database for semantic search</li>
                    <li><strong>Cohere</strong> — High-dimensional 1024-dim embeddings</li>
                    <li><strong>FastAPI</strong> — Async backend for investigation streaming</li>
                    <li><strong>Pydantic</strong> — Structured data validation</li>
                </ul>
            </>
        )
    },
    "failure-aware-vision": {
        title: "Failure Aware Vision",
        date: "Feb 2026",
        readTime: "6 min read",
        prevProject: "shadow-mind",
        nextProject: "intentra",
        content: (
            <>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <p>A <strong>ML perception safety engine</strong> that ensures reliable autonomous navigation by detecting frame-level anomalies in real-time. It achieves <strong>zero false-safe resumptions</strong> across multiple adversarial input types.</p>
                    <p>Utilizes a trust-based safety state machine with deterministic policy gating and asymmetric temporal decay.</p>
                </section>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🚀 Key Contributions</h2>
                <ul className="list-disc space-y-4 ml-6 text-lg text-cfgray">
                    <li>
                        <strong>Real-Time Perceptual Safety</strong> — Achieved zero false-safe resumptions across 5 adversarial input types (blur, brightness, entropy, freeze, noise) via a trust-based safety state machine.
                    </li>
                    <li>
                        <strong>Anomaly Scoring at 30Hz</strong> — Sustained real-time scoring under adversarial conditions using OpenCV, with zero latency regression across 100+ simulated failure injections.
                    </li>
                    <li>
                        <strong>Edge-Compatible Architecture</strong> — Migrated ROS2 prototype to <strong>FastAPI + WebSocket</strong> architecture with live telemetry streaming and automated CSV diagnostics export.
                    </li>
                </ul>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🛠️ Tech Stack</h2>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li><strong>OpenCV</strong> — Real-time frame processing</li>
                    <li><strong>FastAPI</strong> — High-performance backend</li>
                    <li><strong>ROS2</strong> — Robotics middleware prototype</li>
                    <li><strong>WebSockets</strong> — Live telemetry streaming</li>
                </ul>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🌐 Live Demo</h2>
                <section className="flex flex-col gap-5">
                    <div className="flex flex-col h-fit items-center bg-white/5 p-8 rounded-lg">
                        <p className="text-center text-cfgray mb-4">📹 Interactive demo with live corruption injection and telemetry</p>
                        <a
                            href="https://failure-aware-vision.onrender.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-secondary/20 hover:bg-secondary/30 text-secondary rounded-lg transition-colors duration-200 font-semibold"
                        >
                            Open Live Demo →
                        </a>
                    </div>
                </section>
            </>
        )
    },
    "intentra": {
        title: "Intentra",
        date: "Nov 2025",
        readTime: "8 min read",
        prevProject: "failure-aware-vision",
        nextProject: "gesture-control",
        content: (
            <>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <p>A <strong>GenAI Prompt Optimization Platform</strong> that improves LLM output reliability by 67% through a multi-stage prompt engineering pipeline.</p>
                    <p>Features input scoring, semantic restructuring, and hallucination-risk validation before submission.</p>
                </section>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🚀 Key Contributions</h2>
                <ul className="list-disc space-y-4 ml-6 text-lg text-cfgray">
                    <li>
                        <strong>Prompt Engineering Pipeline</strong> — Enhanced output reliability by 67% using a multi-stage pipeline targeting ambiguous and adversarial inputs.
                    </li>
                    <li>
                        <strong>High-Availability Failover</strong> — Engineered quota-aware failover between <strong>Gemini 1.5</strong> and <strong>Groq Llama 3.1</strong>, achieving 99.9% uptime at sub-100ms latency.
                    </li>
                    <li>
                        <strong>Edge Deployment</strong> — Deployed on <strong>Cloudflare Workers</strong> edge with zero cold-start overhead and session-level rate limiting.
                    </li>
                </ul>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🛠️ Tech Stack</h2>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li><strong>TypeScript</strong> — Type-safe implementation</li>
                    <li><strong>Cloudflare Workers</strong> — Edge computing</li>
                    <li><strong>LLM Orchestration</strong> — Multi-model failover logic</li>
                    <li><strong>Hono.js</strong> — Fast web framework</li>
                </ul>
            </>
        )
    },
    "gesture-control": {
        title: "Gesture Control System",
        date: "Nov 2024",
        readTime: "8 min read",
        prevProject: "intentra",
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
        nextProject: undefined,
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
};
