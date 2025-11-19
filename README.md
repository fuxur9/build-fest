# Badger Build Fest Website

A modern Next.js website for the Badger Build Fest 2025 hackathon event.

## Quick Start (Frontend Only)

If you're only working on the frontend website, you don't need to set up Solana or blockchain tools:

```bash
cd frontend
npm install
npm run dev
```

The website will be available at `http://localhost:3000`

## Features

- **Event Information**: Display event details, schedule, and tracks
- **Project Showcase**: View past and current hackathon projects
- **Sponsor Display**: Tiered sponsor display with logos
- **Partner Organizations**: Partner organization cards
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS
- **Solana Integration** (Optional): NFT minting functionality for participation proof

## Project Structure

```
badger-hacks/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/      # Next.js App Router pages
│   │   ├── components/  # React components
│   │   └── lib/      # Utility functions
│   └── public/        # Static assets
├── smart-contract/    # (Optional) Anchor Solana program for NFT minting
│   ├── programs/     # Anchor program source code
│   └── scripts/      # Deployment and utility scripts
└── README.md         # This file
```

## Documentation

- **[SETUP.md](./SETUP.md)**: Detailed setup instructions for both frontend and smart contract development
- Frontend developers can work without the `smart-contract` folder
- Solana/blockchain features are optional and clearly marked in the documentation

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Blockchain** (Optional): Solana, Anchor framework
- **Deployment**: Vercel (frontend)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

[Add your license here]
