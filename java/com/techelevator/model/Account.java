package com.techelevator.model;

public class Account {
    private int userId;
    private String userEmail;
    private String userArea;

    public Account() {}

    public Account(int userId, String userEmail, String userArea) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userArea = userArea;
    }

    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public String getUserEmail() {
        return userEmail;
    }
    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
    public String getUserArea() {
        return userArea;
    }
    public void setUserArea(String userArea) {
        this.userArea = userArea;
    }
}
