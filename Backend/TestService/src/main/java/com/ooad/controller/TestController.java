package com.ooad.controller;

import com.ooad.dto.Test;
import com.ooad.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TestController {
    @Autowired
    TestService testService;

    public void setTestService(TestService testService) {
        this.testService = testService;
    }

    @GetMapping(value = "/getTestDetails/{testId}", produces = "application/json")
    public ResponseEntity<Optional<Test>> getTestDetails(@PathVariable int testId) {
        Optional<Test> test = testService.getTestDetails(testId);
        if (test.isPresent())
            return new ResponseEntity<Optional<Test>>(test, HttpStatus.OK);
        return new ResponseEntity<Optional<Test>>(test, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/getTests")
    public List<Test> getTests() {
        return testService.getTests();
    }

    @PostMapping(value = "/addTest", consumes = "application/json")
    public ResponseEntity<String> insertTest(@RequestBody() Test test) {
        if (testService.insertTest(test) == null) {
            new ResponseEntity<String>("Insertion failed", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<String>("Insertion successful", HttpStatus.OK);
    }

    @PutMapping(value = "/updateTest", consumes = "application/json")
    public ResponseEntity<String> updateBook(@RequestBody() Test test) {
        boolean isUpdated = testService.updateTest(test);
        if (isUpdated) {
            return new ResponseEntity<String>("Update successful", HttpStatus.OK);
        } else return new ResponseEntity<>("Update failed", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/deleteTest/{testId}")
    public ResponseEntity<String> deleteTest(@PathVariable int testId) {
        testService.deleteTest(testId);
        return new ResponseEntity<String>("Deleted", HttpStatus.OK);
    }
}