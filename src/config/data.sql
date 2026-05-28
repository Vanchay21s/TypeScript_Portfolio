INSERT INTO work (name, position, github, demo, framework, description)
VALUES 
('Portfolio Website', 'Front-end Development', 'https://github.com/chay/portfolio', 'https://portfolio-demo.com', 'NestJS + React', 'Personal portfolio website'),
('RESTful APIs with MongoDB', 'Back-end Development', 'https://github.com/chay/portfolio', 'https://portfolio-demo.com', 'This project is a full-stack RESTful API system built with Node.js and Express.js, designed to manage users and products through secure and well-structured endpoints.', 'It follows MVC architecture and applies the Repository Design Pattern to keep business logic, database access, and routing layers cleanly separated. The API supports full CRUD operations, uses JSON for data exchange, and is documented with Swagger UI for easy testing and integration.');

INSERT INTO technology (name, by_work)
VALUES 
('Language & Platform', 1),
('Library & Framework', 1),
('Service', 1),
('Build Tools', 1);

INSERT INTO technology_tool (name, by_technology)
VALUES
('JavaScript', 1),
('React', 2),
('Tailwind CSS', 2),
('React-router-dom', 2),
('React Icons', 2),
('Email JS', 3),
('Vite', 4),
('NPM', 4);

INSERT INTO key_feature (name, description, by_work)
VALUES
('React + Vite Setup', 'Lightning-fast development and optimized build for production', 1),
('Fully Responsive Design', 'Looks great on mobile, tablet, and desktop screens', 1),
('Core Sections', 'Home, About, Skills, Projects, and Contact', 1),
('Smooth Navigation', 'Scroll animations and multi-page routing with React Router', 1),
('Modern Frontend Technology', 'Built with React, CSS Modules / Tailwind, and interactive UI components', 1);
    