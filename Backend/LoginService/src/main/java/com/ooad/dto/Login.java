package com.ooad.dto;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "login")
public class Login
{
	@Id
	private String userId;
	private String userName;
	private String password;
	private int phoneNo;
	private String role;
	public Login() {}
	public Login(String userId, String userName, String password, int phoneNo, String role) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.phoneNo = phoneNo;
		this.role = role;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(int phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}
