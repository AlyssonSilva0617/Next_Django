Used Debuging Tools
    --------   eslent module

#### Backend(Django)
# Project Name

## Getting Started

### Prerequisites

- Python 3.x
- pip (for installing Python dependencies)
- A virtual environment tool (e.g., venv)

### Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/your_username/project_name.git
    cd project_name
    ```

2. Create a virtual environment:

    ```bash
    python -m venv venv
    ```

3. Activate the virtual environment:

    - On Windows:

      ```bash
      venv\Scripts\activate
      ```

    - On macOS/Linux:

      ```bash
      source venv/bin/activate
      ```

4. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

5. Set up the database (assuming you are using SQLite):

    ```bash
    python manage.py migrate
    ```

6. Create a superuser (optional, for admin access):

    ```bash
    python manage.py createsuperuser
    ```

7. Run the server:

    ```bash
    python manage.py runserver
    ```

Your server should now be running at `http://localhost:8000/`.

---

### Notes

- If you're using a different database, update the `DATABASES` setting in `settings.py`.
- Don't forget to configure your environment variables using a `.env` file.
