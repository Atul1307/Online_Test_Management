//package com.cg.anurag.ts;
//import java.time.LocalDate;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.boot.web.server.LocalServerPort;
//import org.springframework.http.HttpEntity;
//import org.springframework.http.HttpMethod;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT)
//class TestServiceApplicationTests
//{
//	private static final LocalDate LocalDate = null;
//	@Autowired
//	TestRestTemplate testRestTemplate;
//	public void setTestRestTemplate(TestRestTemplate testRestTemplate)
//	{
//		this.testRestTemplate=testRestTemplate;
//	}
//
//	@LocalServerPort
//	int localServerPort;
//
//	@Test
//	public void testgetTestDetails_Positive() throws Exception
//	{
//		 String url="http://localhost:"+localServerPort+"getTestDetails/1";
//		 ResponseEntity<com.cg.anurag.ts.dto.Test> test = testRestTemplate.getForEntity(url,com.cg.anurag.ts.dto.Test.class);
//		 Assertions.assertEquals(200, test.getStatusCodeValue());
//	}
//
//	@Test
//	public void testgetTestDetails_Negative() throws Exception
//	{
//		 String url="http://localhost:"+localServerPort+"getTestDetails/11";
//		 ResponseEntity<com.cg.anurag.ts.dto.Test> question = testRestTemplate.getForEntity(url,com.cg.anurag.ts.dto.Test.class);
//		 Assertions.assertEquals(404, question.getStatusCodeValue());
//	}
//
//	@Test
//	public void testinsertTest_Positive() throws Exception
//	{
//		 String url="http://localhost:"+localServerPort+"addTest";
//		 com.cg.anurag.ts.dto.Test test = new  com.cg.anurag.ts.dto.Test(LocalDate,7,"French Test","30 mins",20 );
//		 ResponseEntity<String> response = testRestTemplate.postForEntity(url,test,String.class);
//		 Assertions.assertNotEquals(200, response.getStatusCodeValue());
//	}
//
//	@Test
//	public void testinsertTest_Negative() throws Exception
//	{
//		 String url="http://localhost:"+localServerPort+"addTest";
//		 com.cg.anurag.ts.dto.Test test = null;
//		 ResponseEntity<String> response = testRestTemplate.postForEntity(url,test,String.class);
//		 Assertions.assertNotEquals(HttpStatus.BAD_REQUEST, response.getStatusCodeValue());
//	}
//
//	@Test
//	public void testdeleteTest_Positive() throws Exception
//	{
//		 String url="http://localhost:"+localServerPort+"deleteTest/7";
//		 @SuppressWarnings("unused")
//		HttpEntity<Integer> ent = new HttpEntity<>(7);
//		  ResponseEntity<String> response = testRestTemplate.exchange(url,HttpMethod.DELETE,null,String.class);
//		 Assertions.assertEquals(200, response.getStatusCodeValue());
//	}
//
//	@Test
//	public void testdeleteTest_Negative() throws Exception
//	{
//		 String url="http://localhost:"+localServerPort+"deleteTest/7";
//		 @SuppressWarnings("unused")
//		HttpEntity<Integer> ent = new HttpEntity<>(7);
//		  ResponseEntity<String> response = testRestTemplate.exchange(url,HttpMethod.DELETE,null,String.class);
//		 Assertions.assertNotEquals(404, response.getStatusCodeValue());
//	}
//
//}
