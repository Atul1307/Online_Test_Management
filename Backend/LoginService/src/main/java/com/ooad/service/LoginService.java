package com.ooad.service;
import com.ooad.dao.LoginDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ooad.dto.Login;
@Service
public class LoginService
{
	@Autowired
  LoginDAO ldao;
	public void setLdao(LoginDAO ldao)
	{
		this.ldao = ldao;
	}

	@Transactional(readOnly = true)
	public Login getLoginById(String user_id)
	{
		return ldao.findById(user_id).get();
	}

	@Transactional
	public Login register(Login login)
	{
		return ldao.save(login);
	}


}

