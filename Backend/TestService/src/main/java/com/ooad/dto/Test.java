package com.ooad.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Document("test")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "testId")
public class Test {
    //   @Id
//   @Column(name="test_id")
    @Id
    int testId;
    //   @Column(name="test_date")
    LocalDate testDate;
    //   @Column(name="test_title")
    String testTitle;
    //   @Column(name="test_duration")
    String testDuration;
    //   @Column(name="test_total_marks")
    int testTotalMarks;
    //   @OneToMany(mappedBy="test")
    List<Question> questions;

    public Test() {
    }

    public Test(LocalDate testDate, int testId, String testTitle, String testDuration, int testTotalMarks) {
        super();
        this.testDate = testDate;
        this.testId = testId;
        this.testTitle = testTitle;
        this.testDuration = testDuration;
        this.testTotalMarks = testTotalMarks;
    }

    public LocalDate getTestDate() {
        return testDate;
    }

    public void setTestDate(LocalDate testDate) {
        this.testDate = testDate;
    }

    public int getTestId() {
        return testId;
    }

    public void setTestId(int testId) {
        this.testId = testId;
    }

    public String getTestTitle() {
        return testTitle;
    }

    public void setTestTitle(String testTitle) {
        this.testTitle = testTitle;
    }

    public String getTestDuration() {
        return testDuration;
    }

    public void setTestDuration(String testDuration) {
        this.testDuration = testDuration;
    }

    public int getTestTotalMarks() {
        return testTotalMarks;
    }

    public void setTestTotalMarks(int testTotalMarks) {
        this.testTotalMarks = testTotalMarks;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

}