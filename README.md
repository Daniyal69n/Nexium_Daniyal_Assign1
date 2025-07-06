# Motivational Quote Generator

A beautiful web application that generates motivational quotes based on user-selected topics. Built with Next.js, TypeScript, and ShadCN UI.

## Features

- **Topic-based Quote Generation**: Enter any topic and get 3 relevant motivational quotes
- **Beautiful UI**: Modern, responsive design with ShadCN UI components
- **Local Data**: All quotes stored locally in JSON format
- **Error Handling**: Helpful error messages and suggestions
- **Loading States**: Smooth user experience with loading indicators
- **Mobile Responsive**: Works perfectly on all device sizes

## Available Topics

The app includes quotes for the following topics:
- Success
- Dreams
- Life
- Happiness
- Motivation
- Education
- Love
- Friendship
- Health

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Daniyal69n/Nexium_Daniyal_Assign1.git
cd Nexium_Daniyal_Assign1/my-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter a topic in the input field (e.g., "success", "life", "happiness")
2. Click "Get Quotes" button
3. View 3 randomly selected motivational quotes related to your topic
4. Try different topics to discover more quotes

## Project Structure

```
my-app/
├── app/
│   ├── page.tsx          # Main application page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── ui/               # ShadCN UI components
│       ├── button.tsx
│       ├── input.tsx
│       └── card.tsx
├── data/
│   └── quotes.json       # Quote database
└── public/               # Static assets
```

## Deployment

This project is deployed on Vercel. The live version can be accessed at:
[Your Vercel URL will be here after deployment]

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## Development

### Adding New Quotes

To add new quotes, edit `data/quotes.json` and follow this format:

```json
{
  "id": 28,
  "text": "Your quote text here",
  "author": "Author Name",
  "topic": "topic-name"
}
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Daniyal Ahmed Gul**
- GitHub: [@Daniyal69n](https://github.com/Daniyal69n)
- Email: dmn7146@gmail.com

---

Made with ❤️ using Next.js and ShadCN UI
