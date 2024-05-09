package com.vunh.controller;

import com.vunh.entity.Student;
import com.vunh.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AppController {
    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<Student> getAllStudents() {
        return this.studentService.findAll();
    }

    @DeleteMapping("{id}")
    public void deleteStudent(@PathVariable int id) {
        this.studentService.deleteById(id);
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return this.studentService.saveOrUpdate(student);
    }

    @PutMapping
    public Student updateStudent(@RequestBody Student student) {
        return this.studentService.saveOrUpdate(student);
    }

    @GetMapping("{id}")
    public Student getStudent(@PathVariable int id) {
        return this.studentService.findById(id);
    }
}
