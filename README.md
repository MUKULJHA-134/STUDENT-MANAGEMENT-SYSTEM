============================================================
STUDENT MANAGEMENT SYSTEM
============================================================

PROJECT TYPE
------------
React.js Mini Project

PROJECT DESCRIPTION
-------------------
Student Management System is a simple React web application for
managing student information.

The application allows users to:
- Login to the system
- Access protected pages
- Add new students
- View the student list
- Search students
- Delete students
- Store student data in Local Storage
- Navigate between pages using React Router

TECHNOLOGIES USED
-----------------
- React.js
- JavaScript
- HTML
- CSS
- React Router DOM
- Local Storage
- Vite

REACT CONCEPTS USED
-------------------
1. Components
2. useState
3. useEffect
4. Props
5. Event Handling
6. Forms
7. Conditional Rendering
8. Array map()
9. Array filter()
10. Local Storage
11. React Router
12. Protected Routes
13. Authentication

PROJECT STRUCTURE
-----------------
src/
|
|-- components/
|   |-- Navbar.jsx
|   |-- ProtectedRoute.jsx
|
|-- pages/
|   |-- Login.jsx
|   |-- Home.jsx
|   |-- AddStudent.jsx
|   |-- Students.jsx
|
|-- App.jsx
|-- App.css
|-- main.jsx

MAIN FEATURES
--------------
1. LOGIN / AUTHENTICATION
   ----------------------
   The user must log in before accessing protected pages.

   Demo Login:
   Username: admin
   Password: 1234

2. HOME PAGE
   ----------
   Displays the welcome message and basic information about
   the Student Management System.

3. ADD STUDENT
   -----------
   Users can add a student by entering:
   - Student Name
   - Student Email
   - Course

4. VIEW STUDENTS
   --------------
   Displays all students stored in Local Storage.

5. SEARCH STUDENTS
   ----------------
   Users can search students by their name.

6. DELETE STUDENT
   ---------------
   Users can delete a student from the student list.

7. LOCAL STORAGE
   --------------
   Student information is stored in the browser's Local Storage,
   so the data remains available after refreshing the page.

8. REACT ROUTER
   ------------
   React Router is used for navigation between:
   - Home
   - Add Student
   - Students
   - Login

9. PROTECTED ROUTES
   -----------------
   ProtectedRoute checks whether the user is logged in.
   If the user is not logged in, they are redirected to Login.

INSTALLATION
------------
Step 1: Create the React project

    npm create vite@latest student-management-system -- --template react

Step 2: Open the project

    cd student-management-system

Step 3: Install dependencies

    npm install

Step 4: Install React Router

    npm install react-router-dom

Step 5: Start the development server

    npm run dev

LOGIN DETAILS
-------------
Username: admin
Password: 1234

HOW TO USE
----------
1. Start the project using:

       npm run dev

2. Open the URL shown by Vite in the browser.

3. Login using:

       Username: admin
       Password: 1234

4. Use the navigation menu.

5. Select "Add Student" to add a new student.

6. Select "Students" to view the student list.

7. Use the search box to search for a student.

8. Click "Delete" to remove a student.

9. Click "Logout" to log out of the application.
IMPORTANT NOTE
--------------
The username and password are stored in the frontend code,
so this authentication method is NOT suitable for a production
application.

For a production application, authentication should be handled
by a secure backend and database.

LEARNING OBJECTIVE
------------------
The main objective of this project is to combine the React concepts
learned so far into one small practical application.

The project demonstrates how React components, state, effects,
forms, events, routing, authentication, Local Storage, and
conditional rendering can work together.

AUTHOR
------
Mukul Jha

============================================================
END OF README
============================================================