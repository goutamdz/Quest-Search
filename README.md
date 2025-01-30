# Quest-Search

Quest-Search is a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows users to search questions efficiently from a large dataset of 1,00,000 records. The app uses MongoDB's aggregation framework, indexing, and modern UI libraries to deliver fast and accurate search results.

## Features

- **Efficient Search:** Utilizes MongoDB's aggregation and indexing for lightning-fast and accurate search operations.
- **Modern UI:** Built with Tailwind CSS and MUI for a responsive, sleek, and user-friendly interface.
- **Scalable Backend:** Powered by Node.js and Express.js for handling large datasets and search queries.
- **Full-Stack Functionality:** End-to-end functionality with seamless integration between the frontend and backend.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Material-UI (MUI)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with indexing and aggregation)
- **Hosting:** Vercel (for frontend) and backend hosting

## Prerequisites

Before running the project locally, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (locally or cloud-based, e.g., MongoDB Atlas)
- Git

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/goutamdz/Quest-Search.git
   cd quest-search
   ```

2. **Install Dependencies:**
   - Navigate to the frontend directory and install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Navigate to the backend directory and install dependencies:
     ```bash
     cd ../backend
     npm install
     ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the `backend` directory and add the following:
     ```env
       MONGODB_URL='Your mongodb url'
       PORT=3000
       CORS_ORIGIN='http://localhost:5173'
     ```

4. **Run the Application:**
   - Start the backend server:
     ```bash
     cd backend
     npm run dev
     ```
   - Start the frontend:
     ```bash
     cd ../frontend
     npm run dev
     ```

5. **Access the Application:**
   - Open your browser and go to `http://localhost:5173`.

## Folder Structure

```
quest-search/
├── frontend/          # React.js frontend
├── backend/          # Express.js backend
├── .gitignore       # Git ignore file
├── README.md        # Project documentation
└── package.json     # Project metadata
```

## Key Functionalities

### Search Operations
- Users can search questions using keywords.
- Results are displayed in real-time, leveraging MongoDB's aggregation pipeline for optimized queries.

### Indexing for Performance
- MongoDB indexing ensures efficient retrieval of results even with a large dataset.

### Responsive UI
- Tailwind CSS and Material-UI provide a mobile-friendly, aesthetically pleasing user experience.

## Deployment

The app is deployed on:
- **Frontend:** Vercel
- **Backend:** vercel

## Acknowledgments

- **MongoDB:** For the powerful aggregation framework.
- **React.js & Tailwind CSS:** For the smooth user interface.
- **Vercel:** For effortless deployment.

## Contact

For any questions or feedback, please feel free to reach out:
- **Email:** Goutamhzb1@gmail.com
- **Linkedin:** [Goutam Kumar](https://www.linkedin.com/in/iamgoutamkumar/)

---

**Quest-Search** - Efficiently finding the Question you need, one query at a time.
