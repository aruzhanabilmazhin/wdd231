document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { id: "WDD230", name: "Web Frontend Development", completed: true, credits: 3 },
        { id: "WDD231", name: "Advanced CSS Techniques", completed: false, credits: 3 },
        { id: "CSE110", name: "Introduction to Programming", completed: true, credits: 3 },
        { id: "CSE111", name: "Object-Oriented Programming", completed: false, credits: 3 }
    ];

    const courseContainer = document.querySelector("#course-list");
    const allButton = document.querySelector("#all");
    const wddButton = document.querySelector("#wdd");
    const cseButton = document.querySelector("#cse");
    const creditTotal = document.querySelector("#credit-total");

    function displayCourses(filter = "all") {
        courseContainer.innerHTML = "";
        let filteredCourses = courses;
        if (filter === "WDD") filteredCourses = courses.filter(course => course.id.startsWith("WDD"));
        if (filter === "CSE") filteredCourses = courses.filter(course => course.id.startsWith("CSE"));
        
        let totalCredits = 0;
        filteredCourses.forEach(course => {
            const courseElement = document.createElement("div");
            courseElement.classList.add("course");
            if (course.completed) {
                courseElement.classList.add("completed");
            }
            courseElement.textContent = `${course.id}: ${course.name} (${course.credits} credits)`;
            courseContainer.appendChild(courseElement);
            totalCredits += course.credits;
        });
        creditTotal.textContent = `Total Credits: ${totalCredits}`;
    }

    allButton.addEventListener("click", () => displayCourses("all"));
    wddButton.addEventListener("click", () => displayCourses("WDD"));
    cseButton.addEventListener("click", () => displayCourses("CSE"));

    displayCourses(); // Initial display
});
