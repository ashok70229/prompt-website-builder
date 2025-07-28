const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const USE_MOCK = process.env.USE_MOCK === 'true';

app.use(cors());
app.use(express.json());

app.post('/generate', async (req, res) => {
  const { prompt = '', framework = 'bootstrap' } = req.body;

  console.log(`[MOCK MODE] Prompt: ${prompt}`);
  console.log(`[MOCK MODE] Framework: ${framework}`);

  if (USE_MOCK) {
    const code = generateMockUI(prompt, framework);
    return res.json({ code });
  }

  // Real OpenAI logic (commented out for now)
  /*
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        {
          role: 'system',
          content: `You are a frontend UI code generator. Given a prompt and a framework (${framework}), respond only with the HTML or React code.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const code = completion.data.choices[0].message.content;
    return res.json({ code });
  } catch (error) {
    console.error('OpenAI Error:', error.message);
    return res.status(500).json({ error: 'Failed to generate UI' });
  }
  */
});

const styleHeader = `
<style>
  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f8f9fa;
    padding: 20px;
  }
  .custom-btn {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  .custom-btn:hover {
    background-color: #45a049;
    transform: scale(1.03);
  }
  input, textarea {
    padding: 10px;
    width: 100%;
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  .card {
    padding: 20px;
    border: 1px solid #ddd;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  .row {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
  .col {
    flex: 1;
  }
  .sidebar {
    width: 220px;
    padding: 20px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
</style>
`;

function generateMockUI(prompt, framework) {
  const p = prompt.toLowerCase();

  if (p.includes('login')) return getLoginForm(framework);
  if (p.includes('navbar') || p.includes('navigation')) return getNavbar(framework);
  if (p.includes('pricing')) return getPricingTable(framework);
  if (p.includes('form')) return getContactForm(framework);
  if (p.includes('dashboard')) return getDashboard(framework);
  if (p.includes('sidebar')) return getSidebar(framework);
  if (p.includes('profile')) return getProfileCard(framework);

  return getFallback(prompt, framework);
}

function getLoginForm(framework) {
  return `
    ${styleHeader}
    <div class="card">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button class="custom-btn">Login</button>
    </div>
  `;
}

function getNavbar(framework) {
  return `
    ${styleHeader}
    <nav class="card">
      <ul style="list-style:none; display:flex; gap:20px; padding: 0;">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  `;
}

function getPricingTable(framework) {
  return `
    ${styleHeader}
    <div class="row">
      <div class="col card">
        <h3>Basic</h3>
        <p>$0/month</p>
        <button class="custom-btn">Choose</button>
      </div>
      <div class="col card">
        <h3>Pro</h3>
        <p>$10/month</p>
        <button class="custom-btn">Choose</button>
      </div>
      <div class="col card">
        <h3>Enterprise</h3>
        <p>$99/month</p>
        <button class="custom-btn">Choose</button>
      </div>
    </div>
  `;
}

function getContactForm(framework) {
  return `
    ${styleHeader}
    <div class="card">
      <h2>Contact Us</h2>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button class="custom-btn">Send</button>
    </div>
  `;
}

function getDashboard(framework) {
  return `
    ${styleHeader}
    <div class="card">
      <h2>Dashboard</h2>
      <p>Welcome, user!</p>
      <div class="row">
        <div class="col card"><strong>📈 Sales:</strong> $1200</div>
        <div class="col card"><strong>👥 Users:</strong> 234</div>
        <div class="col card"><strong>🛒 Orders:</strong> 78</div>
      </div>
    </div>
  `;
}

function getSidebar(framework) {
  return `
    ${styleHeader}
    <div class="sidebar">
      <h3>Menu</h3>
      <ul style="list-style:none; padding:0;">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
  `;
}

function getProfileCard(framework) {
  return `
    ${styleHeader}
    <div class="card" style="max-width:300px">
      <img src="https://via.placeholder.com/150" style="width:100%; border-radius:8px;" />
      <h3>Ashok</h3>
      <p>AIML Fullstack Developer</p>
      <button class="custom-btn">Follow</button>
    </div>
  `;
}

function getFallback(prompt, framework) {
  return `
    ${styleHeader}
    <div class="card">
      <h2>No mock available for: "${prompt}"</h2>
      <p>Try prompts like: login form, navbar, contact form, pricing, dashboard, sidebar.</p>
    </div>
  `;
}

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT} | MODE: ${USE_MOCK ? 'MOCK' : 'REAL'}`);
});
