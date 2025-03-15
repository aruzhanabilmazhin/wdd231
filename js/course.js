document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { id: "WDD230", name: "Web Frontend Development", completed: true, credits: 3 },
        { id: "WDD231", name: "Web Frontend Development I", completed: false, credits: 3 },
        { id: "CSE110", name: "Introduction to Programming", completed: true, credits: 3 },
        { id: "CSE111", name: "Programming with Functions", completed: true, credits: 3 }
    ];

    const courseContainer = document.querySelector("#course-list");
    const creditTotal = document.querySelector("#total-credits");

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
        creditTotal.textContent = totalCredits;
    }

    document.querySelector("button[onclick='filterCourses(\"all\")']").addEventListener("click", () => displayCourses("all"));
    document.querySelector("button[onclick='filterCourses(\"WDD\")']").addEventListener("click", () => displayCourses("WDD"));
    document.querySelector("button[onclick='filterCourses(\"CSE\")']").addEventListener("click", () => displayCourses("CSE"));

    displayCourses(); // Initial display
});
