# 📝 AI-Powered Full-Stack App

## 🚀 Project Overview
This project is a full-stack web application built with **Django/Django Rest Framework (DRF)** for the backend and **Next.js** for the frontend. The goal is to create a functional, high-quality, and maintainable app within **72 hours**, leveraging **AI tools** to enhance productivity.

---

## 🛠️ Tech Stack

### **Frontend:**
- **Next.js** – React framework for fast and scalable web applications.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **Redux Toolkit** – State management for handling global data.
- **TypeScript** – Ensures type safety and better development experience.

### **Backend:**
- **Django** – High-level Python web framework.
- **Django Rest Framework (DRF)** – API development framework.
- **SQLite/PostgreSQL** – Database for storing data.
- **CORS Middleware** – To enable cross-origin requests.

### **Tools Used:**
- **Postman** – API testing and documentation.
- **GitHub** – Version control and collaboration.
- **VS code** - Develop for project

---

## 📌 Features Implemented

- ✅ **CRUD Operations** – Create, read, update, and delete functionalities.
- ✅ **AI-Powered Enhancements** – Improved efficiency using AI tools.
- ✅ **Responsive UI** – Optimized for mobile and desktop users.
- ✅ **Dark Mode Support** – Improved UX.
- ✅ **Category & Notes Filtering** – Better data organization.
- ✅ **Optimized API Endpoints** – Fast and scalable backend.

---

## 🧠 AI Tools Used

| Tool | How It Helped? |
|------|--------------|
| **GitHub Copilot** | AI-assisted coding for faster development. |
| **ChatGPT (GPT-4)** | Debugging, code refactoring, and generating API documentation. |
| **Postman AI** | Auto-generating test cases and API endpoints. |
| **Figma AI Plugins** | Auto-generating UI components. |

---

#### Backend(Django)

## Getting Started

### Prerequisites

- Python 3.x
- pip (for installing Python dependencies)
- A virtual environment tool (e.g., venv)

### Setup Instructions

1. Create a virtual environment:

    ```bash
    python -m venv venv
    ```

2. Activate the virtual environment:

    - On Windows:

      ```bash
      venv\Scripts\activate
      ```

    - On macOS/Linux:

      ```bash
      source venv/bin/activate
      ```

3. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Set up the database (assuming you are using SQLite):

    ```bash
    python manage.py migrate
    ```

5. Create a superuser (optional, for admin access):

    ```bash
    python manage.py createsuperuser
    ```

6. Run the server:

    ```bash
    python manage.py runserver
    ```

Your server should now be running at `http://localhost:8000/`.

------

#### Frontend(NextJs)
## ⚙️ Setup & Installation

1. **Install Dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

2. **Run the Development Server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
3. **Build for Production:**
   ```sh
   npm run build
   npm run start
   ```

Your App should now be running at `http://localhost:3000/`.