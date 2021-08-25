package com.cg.otms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
@EnableEurekaServer
@SpringBootApplication
public class OnlineTestManagementEurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineTestManagementEurekaServerApplication.class, args);
	}

}
