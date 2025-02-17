# Movie Character Chatbot

## Overview
The **Movie Character Chatbot** is an AI-powered chatbot that allows users to have conversations with their favorite movie characters. It utilizes OpenAI's GPT API along with real movie dialogues stored in a database to generate realistic responses.

## Features
- **Level 1: Basic API Chatbot**
  - A REST API (`POST /chat`) that accepts `{character, user_message}` and returns responses mimicking the character's personality.
  
- **Level 2: Store & Retrieve Movie Script Data**
  - Stores real movie dialogues in a database (MongoDB).
  - Retrieves exact or similar lines before generating responses.
  
- **Level 3: Implement RAG with Vector Search**
  - Converts movie scripts into vector embeddings using Pinecone.
  - Uses similarity search to fetch relevant dialogues before AI response generation.
  
- **Level 4: Scale System to Handle High Traffic**
  - Implements Redis caching for fast retrieval.
  - Adds rate limiting (5 requests/sec per user).
  - Uses async processing for performance optimization.
  - Load testing using K6.
  
- **Level 5: Optimize for Latency & Deploy**
  - Implements WebSockets for real-time chat.
  - Deploys the chatbot on Vercel.
  - Adds monitoring tools (Prometheus + Grafana).
  - Stores user chat history in a database.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Pinecone (Vector Database)
- **Caching & Rate Limiting:** Redis, express-rate-limit
- **AI Model:** OpenAI GPT API (or Llama2)
- **WebSockets:** Socket.io
- **Monitoring:** Prometheus, Grafana
- **Load Testing:** K6

## Installation & Setup
### Prerequisites
- Node.js & npm installed
- MongoDB database set up
- Pinecone API key (for vector search)
- Redis server running (for caching & rate limiting)
- OpenAI API key (if using GPT)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/Waseb-untwale/AI-movie-character-chatbot
   cd movie-chatbot
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in `.env` file:
   ```sh
   OPENAI_API_KEY=your_openai_api_key
   MONGO_URI=your_mongodb_connection_string
   PINECONE_API_KEY=your_pinecone_api_key
   ```
4. Start the application:
   ```sh
   npm start
   ```

## API Endpoints
### 1. Chat with Character
- **Endpoint:** `POST /chat`
- **Request Body:**
  ```json
  {
    "character": "Iron Man",
    "user_message": "Hey, what's up?"
  }
  ```
- **Response:**
  ```json
  {
    "character": "Iron Man",
    "response": "Stay cool, kid. The world isn't gonna save itself."
  }
  ```

## Deployment
The chatbot is deployed on **Vercel** for production use.

## Monitoring & Performance Optimization
- **Prometheus + Grafana**: To monitor API performance.
- **Rate Limiting**: Prevents abuse (5 requests/sec per user).
- **Redis Caching**: Speeds up dialogue retrieval.
- **Load Testing with K6**: Ensures the system handles high traffic.

## Contributing
Feel free to fork this repository and submit pull requests with improvements!


