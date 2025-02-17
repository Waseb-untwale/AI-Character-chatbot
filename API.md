Movie Character Chatbot - API Documentation

Base URL

https://ai-character-chatbot.vercel.app/api/chat

Authentication

API requests require an API key.

Pass the API key as a header:

Authorization: Bearer YOUR_API_KEY

1. Chat with a Movie Character

Endpoint:

POST /api/chat

Description:

Sends a message to a movie character and receives a response mimicking their personality.

Request Body:

{
  "character": "Iron Man",
  "user_message": "Hey, what's up?"
}

Response:

{
  "response": "Stay cool, kid. The world isn't gonna save itself."
}

Logic:

Checks MongoDB for a matching dialogue.

If found, returns the stored dialogue.

If not found, generates a response using OpenAI's GPT-4o-mini.

Stores chat history in MongoDB.

2. Retrieve Movie Script

Endpoint:

GET /api/scripts/:title

Description:

Fetches a movie script based on the title provided.

Parameters:

title (string) - The movie title.

Example Request:

GET /api/scripts/Inception

Response:

{
  "title": "Inception",
  "writer": "Christopher Nolan",
  "subtitle": "Dreams within dreams",
  "script_link": "https://imsdb.com/scripts/Inception.html"
}



Error Responses

Status Code

Message

400

Bad Request

401

Unauthorized - Invalid API Key

403

Forbidden - Rate Limit Exceeded

404

Not Found

500

Internal Server Error

Deployment Notes

The API is deployed on Vercel.

Uses MongoDB for storing scripts and Pinecone for vector search.

Rate limiting is set at 5 requests per second per user.

Contact

For support, contact "untwalewaseb@gmail.com".

