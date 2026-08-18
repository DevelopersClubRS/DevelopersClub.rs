# DevelopersClub.rs Website

This is the official source code for the [Developers Club](https://developersclub.rs) website.  
The website is built using [Astro](https://astro.build/) and statically deployed to [Cloudflare Pages](https://pages.cloudflare.com/).

## 🧱 Tech Stack

- **Framework**: [Astro](https://astro.build/) (static output)
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages (Static Export to [developersclub.rs](https://developersclub.rs))

## 🚀 Getting Started

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/DevelopersClubRS/DevelopersClub.rs.git
cd DevelopersClub.rs

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open http://localhost:3000 in your browser to see the result.

To preview the production build locally, run `npm run build` followed by `npm run preview`.

## 🔄 Deployment

The site is automatically deployed via **Cloudflare Pages**.  
Any push to the `main` branch will trigger a new deployment.

Cloudflare Pages settings:

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js**: 22.12 or newer

## ✍️ Contributing

This repository is maintained by the Developers Club team.  
If you'd like to contribute, feel free to open an issue or pull request.

## 📄 License

MIT License © [Developers Club](https://developersclub.rs)
