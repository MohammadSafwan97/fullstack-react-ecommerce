ai-chatbot-backend/
│── main.py
│── requirements.txt
│── README.md
│── .env
│── data/
│     └── products.json
│── core/
│     ├── config.py
│     ├── retrieval.py
│     └── chatbot.py
│── vector_store/   (auto generated)


# Reusable AI Chatbot Backend (FastAPI + LangChain)

This backend provides an AI-powered assistant for ANY project:
e-commerce, FAQ bot, support assistant, product recommendation system, etc.

It is fully reusable:
- Swap your data file in `/data/`
- Configure settings in `/core/config.py`
- Connect ANY frontend (React, Vue, Next.js, Flutter, etc.)
- Runs on local or cloud (Render, Railway, AWS, etc.)

---

## 🚀 Features
- Embedding-based semantic search
- LangChain Retrieval-Augmented Generation (RAG)
- Product-aware AI assistant
- Fully configurable backend
- Plug-and-play API endpoint: `/api/assistant`

---

## 📦 Installation

```bash
pip install -r requirements.txt
