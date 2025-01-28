URL Shortener
This project is a URL shortening service built with Node.js, Express, and SQLite.

Requirements
Node.js (v14 or higher)
npm (Node Package Manager)
Installation
Clone the repository:

bash
git clone https://github.com/MariaCarmen12/url-shortener-backend-.git
cd url-shortener-backend
Install the dependencies:

bash
npm install
Ensure that SQLite is installed in your development environment. The SQLite database will be created automatically when you start the application for the first time.

Running the Application
Start the development server:

bash
npm run dev
The application will be available at http://localhost:3000.

Usage
Create a Short URL
Send a POST request to http://localhost:3000/api/shorten with the request body in JSON format:

JSON
{
  "longUrl": "https://example.com",
  "customAlias": "my-custom-alias"
}
Example with curl:
bash
curl -X POST http://localhost:3000/api/shorten -H "Content-Type: application/json" -d '{"longUrl": "https://example.com", "customAlias": "my-custom-alias"}'
You should receive a response like this:

JSON
{
  "shortUrl": "http://localhost:3000/my-custom-alias"
}
Redirect a Short URL
Access http://localhost:3000/my-custom-alias in your browser or use curl:

bash
curl -I http://localhost:3000/my-custom-alias
You should be redirected to https://example.com.

Error Handling
If you encounter any issues, check the server logs for more details. Here are some common errors and how to handle them:

Invalid URL:

JSON
{
  "message": "Invalid URL"
}
Alias already in use:

JSON
{
  "message": "Alias already in use"
}
URL not found:

JSON
{
  "message": "URL not found"
}
Project Structure
Code
/src
  /models
    - urlModel.ts
  /services
    - urlService.ts
  /routes
    - urlRoutes.ts
  - database.ts
  - index.ts
- package.json
This README.md provides clear instructions on how to install, configure, and use the URL shortening service. If you need more details or specific adjustments, feel free to let me know.