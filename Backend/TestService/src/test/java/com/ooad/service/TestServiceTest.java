//package com.cg.anurag.ts.service;
//import java.time.LocalDate;
//import java.util.Optional;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//@SpringBootTest
//public class TestServiceTest
//{
//	private static final LocalDate LocalDate = null;
//	@Autowired
//	TestService testService;
//
//	@Test
//    public void testgetTestDetails_Positive() throws Exception
//    {
//  	    Optional<com.cg.anurag.ts.dto.Test> test = testService.getTestDetails(1);
//  	    Assertions.assertEquals(true,test.isPresent());
//    }
//
//	@Test
//    public void testgetTestDetails_Negative() throws Exception
//    {
//  	    Optional<com.cg.anurag.ts.dto.Test> test = testService.getTestDetails(10);
//  	    Assertions.assertEquals(false,test.isPresent());
//    }
//
//	@Test
//    public void testinsertTest_Positive() throws Exception
//    {
//	  com.cg.anurag.ts.dto.Test test = new com.cg.anurag.ts.dto.Test(LocalDate,7,"French Test","30 mins",20 );
//	  com.cg.anurag.ts.dto.Test t = testService.insertTest(test);
//  	  Assertions.assertEquals(t.getTestId(), test.getTestId());
//    }
//
//    /*@Test
//    public void testinsertTest_update_Negative() throws Exception
//    {
//    	com.cg.anurag.ts.dto.Test test = new com.cg.anurag.ts.dto.Test(LocalDate,7,"French Ass.Test","30 mins",20 );
//  	    com.cg.anurag.ts.dto.Test t = testService.insertTest(test);
//    	 Assertions.assertEquals(t.getTestId(), test.getTestId());
//    }*/
//
//    @Test
//    public void testdeleteTest_Positive() throws Exception
//    {
//    	testService.deleteTest(7);
//    	Optional<com.cg.anurag.ts.dto.Test> t = testService.getTestDetails(7);
//    	Assertions.assertEquals(false,t.isPresent());
//
//    }
//
//}
