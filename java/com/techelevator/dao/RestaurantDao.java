package com.techelevator.dao;

import com.techelevator.model.Restaurant;
import com.techelevator.model.RestaurantInviteDTO;

import java.util.List;

public interface RestaurantDao {
    Restaurant getRestaurantById(int restaurantId);

    Restaurant getRestaurantByName(String restaurantName);

    List<RestaurantInviteDTO> getAllFavorites();

    Restaurant getFavoriteDetails();

    List<Restaurant> getAllRestaurantsByArea(String cityOrZip);

    List<Restaurant> getAllRestaurantsByInviteId(int inviteId);

    List<Restaurant> getFinalistsByInviteId(int inviteId);

    void thumbsUp(int restaurantId, int inviteId);
}
