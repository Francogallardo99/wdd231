const nav = document.getElementById('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    nav.classList.add('visible');
});
close.addEventListener('click', () => {
    nav.classList.remove('visible');
});

let date = new Date();
let year = date.getFullYear();
let span = document.getElementById("currentyear");
if (span) {
    span.textContent = year;
    console.log("Year set:", year); 

}
let lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    }
]

const coursesContainer = document.getElementById('coursesContainer');
const allButton = document.getElementById('all');
const cseButton = document.getElementById('cse');
const wddButton = document.getElementById('wdd');
const totalCreditsDiv = document.getElementById('totalCredits');

function renderCourses(coursesToRender) {
    coursesContainer.innerHTML = ''; 
    coursesToRender.forEach(course => {
        const courseElement = document.createElement('div');
        
        const courseName = document.createElement('h4');
        courseName.textContent = `${course.subject} ${course.number} - ${course.title}`;
        
        courseName.addEventListener('click', () => {
            showCourseDetailsInDialog(course);
        });

        courseElement.appendChild(courseName);
        coursesContainer.appendChild(courseElement);
    });
}
function updateTotalCredits(currentCourses) {
  const totalCredits = currentCourses.reduce((sum, course) => sum + course.credits, 0);
  totalCreditsDiv.textContent = `Total Crédits: ${totalCredits}`;
}

function filterAndRender(subject = null) {
  let filteredCourses = courses;

  if (subject) {
    filteredCourses = courses.filter(course => course.subject === subject);
  }

  renderCourses(filteredCourses);
  updateTotalCredits(filteredCourses); 
}

allButton.addEventListener('click', () => {
  filterAndRender();
});

wddButton.addEventListener('click', () => {
  filterAndRender('WDD'); 
});

cseButton.addEventListener('click', () => {
  filterAndRender('CSE'); 
});

document.addEventListener('DOMContentLoaded', () => {
    filterAndRender();
});

const course_description = document.querySelector("#course_description");
const open_modal = document.querySelector("#open_modal");
const close_modal = document.querySelector("#close_modal");

close_modal.addEventListener("click" , () => {
    course_description.close();
});

function showCourseDetailsInDialog(course){
    const dialogCourse = document.getElementById("dialog-content")
    dialogCourse.innerHTML ="";

    const title = document.createElement("h2");
    title.textContent = `${course.subject} ${course.number} - ${course.title}`;

    const credits = document.createElement("p");
    credits.innerHTML = `Total credits: ${course.credits}`;

    const description =document.createElement("p");
    description.innerHTML = `Description of the course:<br>${course.description}`;

    const technology = document.createElement("p");
    technology.innerHTML = `Technology used: ${course.technology}`;

    dialogCourse.appendChild(title);
    dialogCourse.appendChild(credits);
    dialogCourse.appendChild(description);
    dialogCourse.appendChild(technology);
    course_description.showModal();
}