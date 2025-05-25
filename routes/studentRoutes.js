
import express from 'express';
import { getAllStudents, getStudentById, addStudent, deleteStudent } from '../controllers/studentController.js';


const router = express.Router();


router.get('/', getAllStudents);


router.get('/:id', getStudentById);


router.post('/', addStudent);


router.delete('/:id', deleteStudent);

export default router;
