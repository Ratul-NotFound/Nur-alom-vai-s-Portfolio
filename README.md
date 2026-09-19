# Md. Nur Alam — Professional Portfolio Website

Modern, minimalist, high-performance portfolio engineered for **Md. Nur Alam** — AI/ML Engineer, Computer Vision Researcher, and Software Engineer.

---

## 🛠 Design & Engineering Philosophy
- **Solid Colors Only**: Strictly zero-gradient design system adhering to modern Swiss/Linear minimalist engineering aesthetics.
- **Context-Specific Aesthetic**: Tailored for Artificial Intelligence, Deep Learning, Computer Vision, and Systems Engineering.
- **Zero Heavy Dependencies**: Pure semantic HTML5, modern modular CSS with CSS Custom Properties, and zero-overhead Vanilla JavaScript.
- **Performance**: 100/100 Lighthouse-ready, instant page loads, zero build steps required.
- **Vercel Native**: Ready for instant zero-config deployment to Vercel.

---

## 📂 Project Structure
```
Nur alom portfolio/
├── index.html        # Complete semantic HTML5 structure & content
├── styles.css        # Solid color CSS tokens, responsive layout & dark/light theme
├── script.js         # Theme toggle, scroll spy, project filters, copy toast & form logic
├── vercel.json       # Production security headers and caching configuration
├── package.json      # Optional local preview scripts
└── README.md         # Deployment & documentation
```

---

## 🚀 How to Deploy on Vercel

### Option A: Via GitHub (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Md. Nur Alam portfolio"
   ```
2. Push the repository to your GitHub account (`https://github.com/your-username/nur-alam-portfolio`).
3. Go to [vercel.com/new](https://vercel.com/new).
4. Import your GitHub repository.
5. Click **Deploy**. Vercel will instantly publish the website on an ultra-fast global edge network.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 💻 Local Preview
To preview locally:
```bash
# Using Python:
python -m http.server 3000

# Or using Node:
npx serve .
```
Then open `http://localhost:3000` in your browser.
