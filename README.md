<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/c2d3eee0-f2e0-481a-a657-91df2dcccd6f

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. For local development with the Chat feature, also set `VITE_GEMINI_API_KEY` in [.env.local](.env.local):
   - Get your API key from: https://aistudio.google.com/app/apikeys
   - Add to .env.local: `VITE_GEMINI_API_KEY=your_api_key_here`
4. Run the app:
   `npm run dev`

## Chat with AI Feature (คุยกับแชตบอท)

The app includes a modern Gemini-powered chatbot interface. To use it:

1. Navigate to the "คุยกับแชตบอท" tab in the bottom navigation (mobile) or sidebar (desktop)
2. Type your message and click send
3. The bot will respond using Gemini 1.5 Flash model

**Features:**
- Real-time message streaming
- Auto-scroll to latest messages
- Loading indicators
- Responsive mobile design
- Orange/white theme matching the app
- Persistent conversation during session