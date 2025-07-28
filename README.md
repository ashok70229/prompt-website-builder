# prompt-website-builder
✏️ Description:
  “Prompt-based UI builder using React, Express, and mock/OpenAI-based code generation.”
🏷 Topics:
Ai, react, vite, express, openai, ui-generator, frontend, backend



🧠 Prompt-Based Website Builder
A full-stack application that generates frontend UI code from natural language prompts using predefined frameworks.

📌 Project Overview
Transform your ideas into code instantly! This application empowers users to:

📝 Describe UI components using plain English (e.g., "Create a login form")
🎨 Select framework from Bootstrap, Material-UI, or Ant Design
👀 Preview instantly with live code rendering
💾 Export code as ready-to-use HTML/JSX files
🔄 Dual Backend Modes
Mode	Description	Use Case
🔧 Mock Mode (Default)	Rule-based local generation	Development, testing, no API costs
🤖 OpenAI Mode (Optional)	GPT-powered dynamic generation	Advanced prompts, production use
✨ Core Features
📝 Natural Language Processing - Convert text descriptions to UI code
🧱 Multi-Framework Support - Bootstrap, Material-UI, Ant Design
⚡ Real-Time Preview - Instant visual feedback via iframe
📥 One-Click Export - Download generated HTML/CSS files
🔁 Flexible Architecture - Switch between mock and AI modes
🧠 Smart Prompt Matching - Intelligent keyword-based processing
🚀 Zero Configuration - Works offline without API keys
🏗️ Project Architecture
prompt-website-builder/ ├── backend/ # Express.js Server │ ├── index.js # Main server + mock engine │ ├── package.json # Dependencies │ └── .env # Configuration │ ├── frontend/ # React Application │ ├── src/ │ │ ├── App.jsx # Main UI logic │ │ └── components/ # Reusable components │ ├── vite.config.js # Vite configuration │ └── package.json # Dependencies │ └── README.md # Documentation

⚙️ Technology Stack
Layer	Technologies
Frontend	React (Vite), HTML5, CSS3, JavaScript ES6+
Backend	Node.js, Express.js, dotenv
AI Integration	OpenAI GPT-4 API (optional)
Development	Hot reload, CORS, Live preview
🚀 Quick Start Guide
Prerequisites
Node.js v16+
npm or yarn
Modern browser
1. Installation
Clone repository git clone cd prompt-website-builder

2. Backend Setup
cd backend npm install

Configure environment echo "USE_MOCK=true" > .env

Start server node server.js

✅ Backend running: http://localhost:3000

3. Frontend Setup
cd frontend npm install

Start development server npm run dev

✅ Frontend running: http://localhost:5173

🎯 How to Use
Basic Workflow
Enter Your Prompt Examples(Mock Mode):
"Create a login form -bootstrap "

"Build a navbar -mui"

"Dashboard UI with cards for users, sales, and orders"

"Design a contact form using Ant Design"

"Design a pricing UI using Bootstrap"

"Create a user profile card"

Select Framework
Bootstrap - Responsive, utility-first
Material-UI - Google Material Design
Ant Design - Enterprise-class components
Generate & Preview
Click "Generate" for instant results
View live preview in embedded iframe
See generated HTML/CSS code
Export Code
Click "Download" to save HTML file
Copy code for immediate use in projects
🧠 Prompt Processing Engine
Supported Components
Trigger Keywords	Generated Component	All Frameworks
login, signin	Email/password form with validation	✅
navbar, navigation	Horizontal navigation bar	✅
pricing, plans	Three-tier pricing cards	✅
contact, form	Contact form with fields	✅
dashboard, metrics	Dashboard with stat cards	✅
sidebar, menu	Vertical navigation panel	✅
profile, user	User profile card	✅
Mock Mode Examples
// Rule-based matching logic if (prompt.includes('login')) → generateLoginForm() if (prompt.includes('navbar')) → generateNavbar() if (prompt.includes('pricing')) → generatePricingCards()

🔧 Configuration Options
Mock Mode (Recommended for Development)
backend/.env USE_MOCK=true

Benefits:

✅ No API costs
✅ Instant responses
✅ Offline functionality
✅ Predictable results
OpenAI Mode (Advanced Users)
backend/.env USE_MOCK=false OPENAI_API_KEY=sk-your-openai-key-here

Setup Steps:

Uncomment OpenAI logic in backend/index.js
Add your OpenAI API key to .env
Restart backend server
Benefits:

🤖 Natural language understanding
🎨 More creative variations
📈 Handles complex prompts
🧪 Testing & Examples
Sample Usage Flow
Start Services
Terminal 1: Backend cd backend && node server.js

Terminal 2: Frontend cd frontend && npm run dev

Test Generation
Navigate to http://localhost:5173
Enter: "Build a login form"
Select: "Material-UI"
Click: "Generate"
Verify: Preview loads + code displays
Test Export
Click "Download"
Verify: HTML file downloads successfully
API Testing
Test backend endpoint curl -X POST http://localhost:3000/api/generate-ui -H "Content-Type: application/json" -d '{"prompt":"login form","framework":"bootstrap"}'

📄 License & Notes License: MIT License

Purpose: Learning, assignments, and demo projects

OpenAI: Commercial use requires proper licensing

Extensibility: Mock data structure easily expandable

🌟 Ready to generate amazing UI components? Follow the Quick
