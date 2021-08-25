package com.ooad.dao;
import com.ooad.dto.Login;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoginDAO extends MongoRepository<Login,String> {
}
