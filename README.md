

# Greek Lessons Webpage

This project is a responsive, interactive landing page for online Greek lessons. It features an image overlay with lesson details, providing a smooth and user-friendly experience for visitors interested in affordable and personalized Greek language tutoring.
Table of Contents

    Demo
    Features
    Technologies Used
    Setup
    Usage
    Customization
    License

# Demo

Screenshot ![Screenshot](./img/demo.jpg) Visit the live site: Demo Link [text](https://sunnycc17.github.io/greek-lessons/)

# Features

    Interactive Image Overlay: When users hover over the main image, a text overlay appears with detailed information about the lessons.
    Responsive Design: The site is fully responsive.
    Stylish Animation: Subtle scaling effects on hover give the page a professional and engaging feel.
    Tailored Lesson Information: Key details about lesson frequency, pricing, and learning materials are provided, making it easy for visitors to understand the offering.

# Technologies Used

    HTML5: Structure and content.
    Tailwind CSS: Styling, layout, and responsiveness.
    Alpine.js: Simple interactivity.

# Setup

To set up and run the project locally:

    Clone the repository:

git clone https://github.com/yourusername/greek-lessons-website.git
cd greek-lessons-website

Install Tailwind CSS (if not already included):

    Ensure your Tailwind CSS build is included in src/output.css. Run:

        npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

        This will compile your custom Tailwind CSS file.

    Open the HTML file: Simply open index.html in your browser to view the site.

Usage

    Desktop: Hover over the main image to reveal the overlay with lesson details.
    Mobile: Tap the the image to view lesson details.
    Footer: A light signature footer gives the site a personal touch.

# Customization
Images

Replace ./img/angel.jpg with any image you prefer, or add your own by updating the src attribute.
Text Content

The text within the overlay can be modified to better describe your services, update pricing, or change the tone.
Colors and Styles

    Update colors, fonts, or styles using Tailwind classes in src/output.css.
    Feel free to adjust animation durations by changing duration-300 or any other Tailwind utility class in the HTML.

# License

This project is open source and available under the MIT License. Feel free to use, modify, and share as needed.

