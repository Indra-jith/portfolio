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
    "failure-aware-vision": {
        title: "Failure Aware Vision",
        date: "Feb 2026",
        readTime: "6 min read",
        prevProject: undefined,
        nextProject: "intentra",
        content: (
            <>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <p>A <strong>real-time ML perception engine</strong> that continuously scores frame-level anomalies — blur, brightness, entropy, and freeze detection — at <strong>30Hz using OpenCV</strong>, modeling reliability as a continuous confidence score with asymmetric temporal decay.</p>
                    <p>Deployed as a cloud-hosted <strong>FastAPI + WebSocket</strong> application on Render, with live telemetry streaming, interactive corruption injection, and CSV diagnostics export.</p>
                </section>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🚀 Key Contributions</h2>
                <ul className="list-disc space-y-4 ml-6 text-lg text-cfgray">
                    <li>
                        <strong>Real-Time Anomaly Scoring</strong> — Engineered frame-level anomaly scoring (blur, brightness, entropy, freeze detection) at <strong>30Hz</strong> using OpenCV, with a continuous confidence score model and asymmetric temporal decay.
                    </li>
                    <li>
                        <strong>Trust-Based Safety State Machine</strong> — Designed a bounded ML-influence architecture with deterministic policy gating, achieving <strong>zero false-safe resumptions</strong> across 5 corruption types in simulation validation.
                    </li>
                    <li>
                        <strong>Production Deployment</strong> — Refactored from a ROS prototype to a <strong>FastAPI + WebSocket</strong> architecture with live telemetry streaming, cloud-hosted on Render with interactive corruption injection and CSV diagnostics export.
                    </li>
                </ul>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🛠️ Tech Stack</h2>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li><strong>FastAPI</strong> — High-performance async Python web framework</li>
                    <li><strong>ROS</strong> — Robot Operating System (original prototype)</li>
                    <li><strong>OpenCV</strong> — Real-time frame processing at 30Hz</li>
                    <li><strong>WebSockets</strong> — Live telemetry streaming to the frontend</li>
                    <li><strong>Python</strong> — Core ML logic and confidence scoring</li>
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
        date: "Feb 2025",
        readTime: "8 min read",
        prevProject: "failure-aware-vision",
        nextProject: "gesture-control",
        content: (
            <>
                <section className="flex flex-col gap-5 text-lg text-cfgray">
                    <p>Transform vague ideas into <strong>perfect AI prompts</strong> — Free forever! Intentra is a production-ready prompt optimization platform that automatically refines user prompts through <strong>multi-stage AI optimization</strong> and executes them to generate high-quality outputs.</p>
                    <p>Built on <strong>zero-cost infrastructure</strong> using Cloudflare Workers and free LLM APIs (Gemini & Groq), making it completely free to use.</p>
                </section>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🎯 How It Works</h2>
                <ol className="list-decimal space-y-2 ml-6 text-lg text-cfgray">
                    <li><strong>Enter your prompt</strong> — Type any vague or rough idea</li>
                    <li><strong>AI refinement</strong> — Intentra enhances it with context, structure & clarity</li>
                    <li><strong>Side-by-side comparison</strong> — Review original vs refined prompt</li>
                    <li><strong>Generate output</strong> — Execute the refined prompt for superior results</li>
                </ol>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🛠️ Tech Stack</h2>
                <h3 className="pt-4 pb-3 text-2xl font-semibold">Frontend</h3>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li><strong>React 19 + TypeScript</strong> — Type-safe UI development</li>
                    <li><strong>Vite 7</strong> — Blazing-fast builds</li>
                    <li><strong>Tailwind CSS 4</strong> — Utility-first styling</li>
                    <li><strong>Framer Motion + GSAP</strong> — Premium animations</li>
                    <li><strong>Three.js</strong> — WebGL lightning background</li>
                </ul>

                <h3 className="pt-6 pb-3 text-2xl font-semibold">Backend</h3>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li><strong>Cloudflare Workers</strong> — Serverless edge functions</li>
                    <li><strong>Hono.js</strong> — Ultrafast web framework</li>
                    <li><strong>Cloudflare D1</strong> — SQLite at the edge</li>
                    <li><strong>Cloudflare KV</strong> — Caching and rate limiting</li>
                </ul>

                <h3 className="pt-6 pb-3 text-2xl font-semibold">LLM APIs</h3>
                <ul className="list-disc space-y-2 ml-6 text-lg text-cfgray">
                    <li><strong>Gemini 2.0 Flash</strong> — Primary AI model</li>
                    <li><strong>Groq (Llama 3.3 70B)</strong> — Automatic fallback for reliability</li>
                </ul>

                <h2 className="pt-8 pb-5 text-3xl font-semibold">🚀 Features</h2>
                <ul className="list-disc space-y-3 ml-6 text-lg text-cfgray">
                    <li><strong>Multi-LLM Refinement</strong> — Automatically switches between AI models</li>
                    <li><strong>Zero-Cost Infrastructure</strong> — Runs on Cloudflare's free tier</li>
                    <li><strong>Real-time Preview</strong> — Side-by-side prompt comparison</li>
                    <li><strong>Premium UI</strong> — Beautiful WebGL backgrounds and animations</li>
                    <li><strong>Open Source</strong> — MIT licensed, contributions welcome!</li>
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
