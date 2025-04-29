# Crazy Lazy

**Turn your idea into an actual codebase. Instantly.**
**Project will take somemore time**

Crazy Lazy is a proof-of-concept tool that allows users to input a project idea in plain English and receive a fully functional codebase as output. It combines the power of Large Language Models (LLMs), templating systems, and zip export functionality to automate boilerplate creation for full-stack applications.

---
**Currently providing only frontend code soon releasing with backend capabilities**

## How It Works

### Step 1: Input
Users describe what they want to build (e.g., "a todo app using React and Express with MongoDB").

### Step 2: Prompt Parsing
The description is parsed by an LLM (e.g., OpenAI GPT) to:
- Understand the tech stack
- Identify required features (CRUD, auth, routes, etc.)
- Break the idea into components

### Step 3: Feature Mapping
Parsed features are mapped to reusable code templates (frontend components, backend APIs, DB models).

### Step 4: Code Generation
The selected templates are populated dynamically based on the extracted logic and stitched together into a directory.

### Step 5: Output
All the files and folders are bundled into a downloadable ZIP file (or previewed inside the app).

---

## MVP Architecture

```
[User Prompt] 
    ↓
[Prompt Handler (LLM)] 
    ↓
[Feature Extractor] 
    ↓
[Template + Code Generator] 
    ↓
[File Builder] 
    ↓
[Zip Output or Preview]
```

---

## Sample Output Structure

```
generated-project/
├── client/
│   └── App.jsx
├── server/
│   └── index.js
│   └── routes.js
├── .env
├── README.md
├── package.json
```

---

## Tech Stack

| Layer       | Tool / Framework |
|-------------|------------------|
| Frontend    | React or Astro   |
| Backend     | Node.js + Express|
| Templating  | Handlebars, EJS  |
| LLM         | OpenAI GPT API   |
| File Output | fs-extra, archiver |
| UI Framework| Tailwind CSS (optional) |

---

## MVP Goals

- Natural Language Input
- LLM-Based Interpretation
- Feature Detection & Mapping
- Dynamic Code Templating
- ZIP Output for Download

---

## Next Steps

- Real-time preview in the browser
- Deploy to GitHub or Vercel automatically
- Allow custom tech stack configuration
- Save and share generated codebases
- Add CLI + VS Code extension

---


## 👨‍💻 Author

Built with 💡 by [Rishav Bhardwaz](https://github.com/rishav-bhardwaz)

```
