package com.ooad.service;

import com.ooad.dao.TestDAO;
import com.ooad.dto.Test;
import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TestService {
    @Autowired
    TestDAO tdao;

    public void setTdao(TestDAO tdao) {
        this.tdao = tdao;
    }

    @Transactional
    public Test insertTest(Test test) {
        return tdao.save(test);
    }

    @Transactional(readOnly = true)
    public Optional<Test> getTestDetails(int testId) {
        return tdao.findById(testId);
    }

    @Transactional(readOnly = true)
    public List<Test> getTests() {
        return tdao.findAll();
    }

    @Transactional
    public void deleteTest(int testId) {
        List<Test> tests = tdao.findAll();
        Test test = null;
        for(Test testOld: tests){
            if(testOld.getTestId()==testId){
                test = testOld;
                break;
            }
        }
        tdao.delete(test);
    }

    @Transactional
    public boolean updateTest(Test newTest) {
       List<Test> tests =  tdao.findAll();
       Test test = null;
       for(Test testOld: tests){
           if(testOld.getTestId()==newTest.getTestId()){
               test = testOld;
               break;
           }
       }
        if (test != null) {
            tdao.delete(test);
            test.setTestDate(newTest.getTestDate());
            test.setTestTitle(newTest.getTestTitle());
            test.setTestDuration(newTest.getTestDuration());
            test.setTestTotalMarks(newTest.getTestTotalMarks());
            tdao.insert(test);
            return true;
        } else
            return false;
    }

}