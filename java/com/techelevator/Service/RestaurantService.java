package com.techelevator.Service;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class RestaurantService {

    private final String BASE_URL = "http://localhost:8081/";
    private final String API_KEY = "4GodIGnkgwlylPRHgcq0Z8BIGeUXFGiK"; //API key from TOM TOM
    private RestTemplate restTemplate = new RestTemplate();

    public RestaurantService() {
    }




}
