
let students = [
  { id: 1, name: 'Prathamesh', course: 'MernStack', city: 'Pune' },
  { id: 2, name: 'omkar', course: 'React', city: 'Ratnagiri' }
];


const getAllStudents = (req, res) => {
  const { city } = req.query;
  if (city) {
    const filtered = students.filter(s => s.city === city);
    return res.json(filtered);
  }
  res.json(students);
};


const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.json(student);
};


const addStudent = (req, res) => {
  const { id, name, course, city } = req.body;
  if (!id || !name || !course || !city) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  students.push({ id, name, course, city });
  res.status(201).json({ message: 'Student added successfully' });
};


const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  students = students.filter(s => s.id !== id);
  res.json({ message: 'Student deleted successfully' });
};


export {
  getAllStudents,
  getStudentById,
  addStudent,
  deleteStudent
};
