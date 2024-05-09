package com.vunh.service;

import com.vunh.entity.Student;
import com.vunh.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public Student findById(int id) {
        Optional<Student> student = this.studentRepository.findById(id);
        return student.orElseGet(Student::new);
    }

    public Student saveOrUpdate(Student student) {
        return this.studentRepository.save(student);
    }

    public void deleteById(int id) {
        this.studentRepository.deleteById(id);
    }
}
