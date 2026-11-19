
const express = require('express');
const app = express();

app.use(express.json());

// Initial enrollment records
let enrollments = [
    {
        id: 601,
        studentName: "Aarav Gupta",
        courseCode: "CS301",
        courseName: "Data Structures",
        semester: 3,
        attendance: 82
    },
    {
        id: 602,
        studentName: "Meera Joshi",
        courseCode: "CS305",
        courseName: "Database Systems",
        semester: 3,
        attendance: 74
    },
    {
        id: 603,
        studentName: "Kabir Khan",
        courseCode: "CS310",
        courseName: "Computer Networks",
        semester: 3,
        attendance: 91
    }
];

// Generate unique ID
let nextId = 604;


// 1. GET ALL ENROLLMENTS
app.get('/api/enrollments', (req, res) => {
    res.status(200).json(enrollments);
});


// 2. POST NEW ENROLLMENT
app.post('/api/enrollments', (req, res) => {

    const {
        studentName,
        courseCode,
        courseName,
        semester,
        attendance
    } = req.body;

    // Validation
    if (
        typeof studentName !== 'string' || !studentName.trim() ||
        typeof courseCode !== 'string' || !courseCode.trim() ||
        typeof courseName !== 'string' || !courseName.trim() ||
        !Number.isInteger(semester) || semester <= 0 ||
        typeof attendance !== 'number' ||
        attendance < 0 || attendance > 100
    ) {
        return res.status(400).json({
            message: "Invalid input"
        });
    }

    const newEnrollment = {
        id: nextId++,
        studentName,
        courseCode,
        courseName,
        semester,
        attendance
    };

    enrollments.push(newEnrollment);

    res.status(201).json(newEnrollment);
});


// 3. FILTER BY SEMESTER
app.get('/api/enrollments/filter', (req, res) => {

    const semester = Number(req.query.semester);

    const filtered = enrollments.filter(
        e => e.semester === semester
    );

    res.status(200).json(filtered);
});


// 4. GET LOW ATTENDANCE
app.get('/api/enrollments/low-attendance', (req, res) => {

    const lowAttendance = enrollments.filter(
        e => e.attendance < 75
    );

    res.status(200).json(lowAttendance);
});


// 5. GET ENROLLMENT BY ID
app.get('/api/enrollments/:id', (req, res) => {

    const id = Number(req.params.id);

    const enrollment = enrollments.find(
        e => e.id === id
    );

    if (!enrollment) {
        return res.status(404).json({
            message: "Enrollment not found"
        });
    }

    res.status(200).json(enrollment);
});


// 6. PUT - UPDATE ENROLLMENT
app.put('/api/enrollments/:id', (req, res) => {

    const id = Number(req.params.id);

    const index = enrollments.findIndex(
        e => e.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Enrollment not found"
        });
    }

    const {
        studentName,
        courseCode,
        courseName,
        semester,
        attendance
    } = req.body;

    // Validation
    if (
        typeof studentName !== 'string' || !studentName.trim() ||
        typeof courseCode !== 'string' || !courseCode.trim() ||
        typeof courseName !== 'string' || !courseName.trim() ||
        !Number.isInteger(semester) || semester <= 0 ||
        typeof attendance !== 'number' ||
        attendance < 0 || attendance > 100
    ) {
        return res.status(400).json({
            message: "Invalid input"
        });
    }

    enrollments[index] = {
        id,
        studentName,
        courseCode,
        courseName,
        semester,
        attendance
    };

    res.status(200).json(enrollments[index]);
});


// 7. DELETE ENROLLMENT
app.delete('/api/enrollments/:id', (req, res) => {

    const id = Number(req.params.id);

    const index = enrollments.findIndex(
        e => e.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Enrollment not found"
        });
    }

    enrollments.splice(index, 1);

    res.status(200).json({
        message: "Enrollment deleted successfully"
    });
});


// START SERVER
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
