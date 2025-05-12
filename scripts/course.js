const courses = [
    { name: 'WDD 231', credits: 3, completed: true },
    { name: 'CSE 111', credits: 3, completed: false },
    // Add other courses
];

function displayCourses() {
    const courseList = document.querySelector('.course-list');
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = course.completed ? 'completed' : 'incomplete';
        courseElement.innerHTML = `${course.name} - ${course.credits} credits`;
        courseList.appendChild(courseElement);
    });
}

document.addEventListener('DOMContentLoaded', displayCourses);
