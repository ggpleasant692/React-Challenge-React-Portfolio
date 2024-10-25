# My Portfolio

## Description

This portfolio showcases my projects as a web developer. It is built using React and Vite, providing a responsive and interactive experience for users. The portfolio includes sections for About Me, Portfolio, Resume, and Contact.

## Technologies Used

- **Frontend**:
  - React.js
  - Vite
  - HTML5
  - CSS3
  - JavaScript
  
- **Deployment**:
  - Netlify

## What I Learned

Through this project, I gained valuable experience in:
- Building single-page applications (SPAs) using React.
- Using Vite for faster development and build processes.
- Implementing responsive design principles to ensure the portfolio looks great on various devices.
- Managing state and props in React components.
- Utilizing CSS for styling and layout to create a polished user interface.

## Challenges Encountered

### 1. Blank Page After Deployment
**Challenge**: After deploying to Netlify, the application showed a blank page.
**Solution**: The issue was due to incorrect file references in the `main.jsx` file. I ensured the correct structure of my project and updated the paths accordingly. Ensuring that all assets were correctly referenced in the `src` directory resolved this issue.

### 2. Image Not Displaying in Portfolio
**Challenge**: Images in the portfolio were not showing up as expected.
**Solution**: I realized that the image paths were relative and pointed to incorrect locations. I updated the paths to use proper imports for images, which made them display correctly on the portfolio page.

### 3. Styling Adjustments
**Challenge**: The project cards appeared narrow and long, which wasn't aesthetically pleasing.
**Solution**: I adjusted the CSS by setting a `max-height` for the images and used `object-fit: cover` to maintain their aspect ratio. I also refined the layout to create a more balanced appearance.

### 4. List Bullet Spacing
**Challenge**: The bullets in the proficiency list were too far from the text.
**Solution**: I adjusted the CSS for the `<ul>` and `<li>` elements to remove default padding and margin, which brought the bullets closer to the text.

### Link to deployment
https://gpleasantportfolio.netlify.app/
