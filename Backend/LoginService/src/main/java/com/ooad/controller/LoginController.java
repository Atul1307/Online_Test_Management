package com.ooad.controller;

import com.ooad.dto.Login;
import com.ooad.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.core.Response;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LoginController {
    @Autowired
    LoginService loginService;

    public void setLoginService(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/login/{user_id}/{password}")
    public Response getLogin(@PathVariable String user_id, @PathVariable String password) {
        Login login = loginService.getLoginById(user_id);
        if (login != null && login.getPassword().equals(password))
            return Response.ok().entity("Login successfull").build();
        else
            return Response.status(404).entity("Invalid credentials").build();
    }

    @PostMapping(value = "/register", consumes = "application/json")
    public Response register(@RequestBody Login login) {
        if (loginService.register(login) == null) {
            return Response.notModified().entity("Registration failed").build();
        } else {
            return Response.status(201).entity("Registered successfully").build();
        }
    }
}

