package com.ooad.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("question")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "questionId")
public class Question {
    //	@Id
//	@Column(name="q_id")
    @Id
    int questionId;
    /*@OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="test_id")*/
//	@ManyToOne
//	@JoinColumn(name="test_id")
    private Test test;
    //private Test testid;
//	@Column(name="q_content")
    String questionContent;
    //	@Column(name="q_option1")
    String option1;
    //	@Column(name="q_option2")
    String option2;
    //	@Column(name="q_option3")
    String option3;
    //	@Column(name="q_marks")
    int marks;
    //	@Column(name="ans_opt")
    int answerOption;

    public Question() {
    }

    public Question(int questionId, Test test, String questionContent, String option1, String option2, String option3, int marks,
                    int answerOption) {
        super();
        this.questionId = questionId;
        //this.testid=testid;
        this.test = test;
        this.questionContent = questionContent;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.marks = marks;
        this.answerOption = answerOption;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public Test getTestId() {
        return test;
    }

    public void setTestId(Test test) {
        this.test = test;
    }

    public String getQuestionContent() {
        return questionContent;
    }

    public void setQuestionContent(String questionContent) {
        this.questionContent = questionContent;
    }

    public String getOption1() {
        return option1;
    }

    public void setOption1(String option1) {
        this.option1 = option1;
    }

    public String getOption2() {
        return option2;
    }

    public void setOption2(String option2) {
        this.option2 = option2;
    }

    public String getOption3() {
        return option3;
    }

    public void setOption3(String option3) {
        this.option3 = option3;
    }

    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        this.marks = marks;
    }

    public int getAnswerOption() {
        return answerOption;
    }

    public void setAnswerOption(int answerOption) {
        this.answerOption = answerOption;
    }

}

