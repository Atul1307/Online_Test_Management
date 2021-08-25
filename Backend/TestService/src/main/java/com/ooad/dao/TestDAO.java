package com.ooad.dao;

import com.ooad.dto.Test;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestDAO extends MongoRepository<Test, Integer> {

}