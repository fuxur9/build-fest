# Setup Guide

This guide will help you set up the Badger Build Fest project on your local machine.

## Prerequisites

- Node.js 18+ and npm/yarn
- (Optional) Rust and Cargo (only needed for Solana smart contract development)
- (Optional) Solana CLI tools (only needed for Solana smart contract development)
- (Optional) Anchor framework (only needed for Solana smart contract development)

## Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. (Optional) If you're working with the Solana NFT minting feature, create a `.env.local` file in the `frontend` directory with the following variables:

```env
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
PROGRAM_ID=your_program_id_here
CONFIG_PDA=your_config_pda_here
EVENT_WALLET_SECRET=your_base58_encoded_secret_key
METADATA_URI=your_metadata_uri
NFT_NAME=Your NFT Name
NFT_SYMBOL=SYMBOL
```

**Note**: If you're only working on the frontend website (without NFT minting), you can skip the `.env.local` setup. The website will work without these Solana-related environment variables.

4. Run the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Smart Contract Setup (Optional - Solana/Anchor)

**This section is only needed if you're working on the Solana smart contract for NFT minting. Frontend developers can skip this entirely.**

1. Navigate to the smart-contract directory:

```bash
cd smart-contract
```

2. Install Anchor (if not already installed):

```bash
cargo install --git https://github.com/coral-xyz/anchor anchor-cli --locked
```

3. Build the Anchor program:

```bash
anchor build
```

4. Deploy to devnet:

```bash
anchor deploy
```

5. Update the program ID in your frontend `.env.local` file

## Environment Variables (Optional - Only for Solana NFT Feature)

**These environment variables are only needed if you're working on the NFT minting feature. Frontend-only developers can skip this section.**

### Frontend (.env.local)

- `NEXT_PUBLIC_SOLANA_RPC_URL`: Solana RPC endpoint (use devnet for development)
- `PROGRAM_ID`: Your deployed Anchor program ID
- `CONFIG_PDA`: The Config PDA address for your program
- `EVENT_WALLET_SECRET`: Base58-encoded secret key of the event wallet (used as fee payer)
- `METADATA_URI`: URI pointing to your NFT metadata JSON
- `NFT_NAME`: Display name for the NFT
- `NFT_SYMBOL`: Symbol for the NFT

**Important**: Never commit `.env.local` or any files containing private keys to version control!

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
└── README.md         # Project overview
```

**Note**: The `smart-contract` folder is only needed for Solana/blockchain development. Frontend developers can ignore it.

## Troubleshooting

### Common Issues

1. **Module not found errors**: Run `npm install` in the frontend directory
2. **Frontend not loading**: Make sure you're in the `frontend` directory and have run `npm install`
3. **TypeScript errors**: Run `npm install` to ensure all type definitions are installed

### Solana/Blockchain Issues (Optional)

These issues only apply if you're working with the Solana smart contract:

1. **Anchor build errors**: Ensure Rust and Anchor are properly installed
2. **Wallet connection issues**: Check that `NEXT_PUBLIC_SOLANA_RPC_URL` is set correctly
3. **Transaction failures**: Verify your `EVENT_WALLET_SECRET` has sufficient SOL on devnet

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

[Add your license here]
