package com.techelevator.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Time;
import java.sql.Date;
import java.util.List;

public class Restaurant {

    private int restaurantId;
    private String restaurantName;
    private String restaurantType;
    private String restaurantAddress;
    private String phone;
    private String imageUrl;

    @JsonProperty("open_time")
    private Time openTime;

    @JsonProperty("close_time")
    private Time closeTime;
    private boolean takeOut;
    private boolean delivery;

    public Restaurant(int restaurantId, String restaurantName, String restaurantType, String restaurantAddress, String phone, String imageUrl, Time openTime, Time closeTime, boolean takeOut, boolean delivery) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.restaurantType = restaurantType;
        this.restaurantAddress = restaurantAddress;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.openTime = openTime;
        this.closeTime = closeTime;
        this.takeOut = takeOut;
        this.delivery = delivery;
    }

    public Restaurant() {
    }

    public int getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(int restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getRestaurantType() {
        return restaurantType;
    }

    public void setRestaurantType(String restaurantType) {
        this.restaurantType = restaurantType;
    }

    public String getRestaurantAddress() {
        return restaurantAddress;
    }

    public void setRestaurantAddress(String restaurantAddress) {
        this.restaurantAddress = restaurantAddress;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Time getOpenTime() {
        return openTime;
    }

    public void setOpenTime(Time openTime) {
        this.openTime = openTime;
    }

    public Time getCloseTime() {
        return closeTime;
    }

    public void setCloseTime(Time closeTime) {
        this.closeTime = closeTime;
    }

    public boolean isTakeOut() {
        return takeOut;
    }

    public void setTakeOut(boolean takeOut) {
        this.takeOut = takeOut;
    }

    public boolean isDelivery() {
        return delivery;
    }

    public void setDelivery(boolean delivery) {
        this.delivery = delivery;
    }

    @Override
    public String toString() {
        return "Restaurant{" + "Name:'" + restaurantName + '\'' +
                ", Type:'" + restaurantType + '\'' +
                ", Address:'" + restaurantAddress + '\'' +
                ", Number:'" + phone + '\'' +
                ", image:'" + imageUrl + '\'' +
                ", Opening time:" + openTime +
                ", Closing time:" + closeTime +
                ", TakeOut:" + takeOut +
                ", Delivery:" + delivery +
                '}';
    }


}




