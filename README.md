# 🔗 URL Shortener

A simple and lightweight URL shortener built with HTML, JavaScript, Azure Functions, and deployed using Azure Static Web Apps. Automatically shortens long URLs and redirects to the original destination.

## 🚀 Features

- Shortens any valid URL
- Redirects using a unique short code
- Fully serverless using Azure Static Web Apps + Azure Functions
- GitHub-based CI/CD with automatic deployment
- Easy to extend with persistent storage (e.g., Azure Table Storage or Cosmos DB)

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Azure Functions (Node.js)
- **Hosting**: Azure Static Web Apps
- **Version Control**: Git (via GitHub)
- **CI/CD**: GitHub Actions

---

## 📁 Project Structure
<pre>url-shortener/
├── api/ # Azure Functions (serverless backend)
│ └── create.js # Endpoint to generate short URL
│ └── redirect.js # Redirect based on short code
├── public/ # Static frontend files
│ └── index.html
│ └── style.css
│ └── app.js
├── staticwebapp.config.json # Azure SWA routing configuration
├── README.md</pre>


---

## 🧪 Local Development

To run locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhijeet-Hapase/url-shortener.git
   cd url-shortener

