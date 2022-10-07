package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.Restaurant;
import com.techelevator.model.RestaurantInviteDTO;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;


@Component
public class JdbcRestaurantDao implements RestaurantDao{
    private final JdbcTemplate jdbcTemplate;

    public JdbcRestaurantDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // query to generate restaurant info by restaurant's id
    @Override
    public Restaurant getRestaurantById(int restaurantId) {

        Restaurant restaurant = null;

        String sql = "SELECT r.restaurant_id, r.restaurant_name, r.restaurant_type, r.restaurant_address, " +
                "r.phone, r.img_url, r.take_out, r.delivery, ir.thumbs_up " +
                "FROM restaurant r " +
                "JOIN invite_restaurant ir ON r.restaurant_id = ir.restaurant_id " +
                "WHERE r.restaurant_id = ?";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, restaurantId);
        if (results.next()) {
            restaurant = mapRowToRestaurant(results);
        }

        return restaurant;
    }

    // query to generate restaurant by name
    @Override
    public Restaurant getRestaurantByName(String restaurantName) {

        Restaurant restaurant = null;

        String sql = "SELECT r.restaurant_id, r.restaurant_name, r.restaurant_type, r.restaurant_address, " +
                "r.phone, r.img_url, r.take_out, r.delivery " +
                "FROM restaurant r " +
                "WHERE r.restaurant_name = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, restaurantName);
        if (results.next()) {
            restaurant = mapRowToRestaurant(results);
        }

        return restaurant;
    }

    @Override
    public List<RestaurantInviteDTO> getAllFavorites() {
        List<RestaurantInviteDTO> favorites = new ArrayList<>();
        String sql = "SELECT * FROM finalist";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        if (results.next()) {
            RestaurantInviteDTO restaurantInviteDTO = mapRowToInvite(results);
            favorites.add(restaurantInviteDTO);
        }

        return favorites;
    }

    @Override
    public Restaurant getFavoriteDetails() {
        Restaurant restaurant = null;
        String sql = "SELECT r.restaurant_name, r.restaurant_address, " +
                "r.open_time, " +
                "r.close_time, " +
                "r.phone " +
                "FROM restaurant r " +
                "JOIN finalist f ON f.restaurant_id = r.restaurant_id";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        if (results.next()) {
            restaurant = mapRowToRestaurant(results);
        }

        return restaurant;
    }

    @Override
    public List<Restaurant> getAllRestaurantsByArea(String restaurantCity) {
        List<Restaurant> restaurants = new ArrayList<>();

        String sql = "SELECT * FROM restaurant WHERE " +
                "restaurant_address ILIKE ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, "%" + restaurantCity + "%");
        while (results.next()){
            Restaurant restaurant = mapRowToRestaurant(results);
            restaurants.add(restaurant);
        }

        return restaurants;
    }

    @Override
    public List<Restaurant> getAllRestaurantsByInviteId(int inviteId) {

        List<Restaurant> restaurants = new ArrayList<>();

        String sql = "SELECT r.restaurant_id, r.restaurant_name, r.restaurant_type, r.restaurant_address, " +
                "r.phone, r.img_url, r.take_out, r.delivery, ir.thumbs_up " +
                "FROM restaurant r " +
                "JOIN invite_restaurant ir ON r.restaurant_id = ir.restaurant_id " +
                "WHERE ir.invite_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, inviteId);
        while (results.next()){
            Restaurant restaurant = mapRowToRestaurant(results);
            restaurants.add(restaurant);
        }

        return restaurants;
    }


   //query to make restaurants with a true for thumbs up a invite restaurant
    @Override
    public List<Restaurant> getFinalistsByInviteId(int inviteId) {

        List<Restaurant> restaurants = new ArrayList<>();

        String sql = "SELECT r.restaurant_id, r.restaurant_name, r.restaurant_type, r.restaurant_address, " +
                "r.phone, r.img_url, r.take_out, r.delivery, ir.thumbs_up " +
                "FROM restaurant r " +
                "JOIN invite_restaurant ir ON r.restaurant_id = ir.restaurant_id " +
                "WHERE ir.invite_id = ? AND ir.thumbs_up = true";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, inviteId);
        while (results.next()){
            Restaurant restaurant = mapRowToRestaurant(results);
            restaurants.add(restaurant);
        }

        return restaurants;

    }

    //query for restaurants that didn't get liked (thumbs up)
    @Override
    public void thumbsUp(int restaurantId, int inviteId) {

        String sql = "UPDATE invite_restaurant " +
                "SET thumbs_up = true " +
                "WHERE invite_id = ? AND restaurant_id = ?";


        jdbcTemplate.update(sql, inviteId, restaurantId);

    }

    private RestaurantInviteDTO mapRowToInvite(SqlRowSet rf) {
        RestaurantInviteDTO restaurantInviteDTO = new RestaurantInviteDTO();

        restaurantInviteDTO.setRestaurantId(rf.getInt("restaurant_id"));
        restaurantInviteDTO.setThumbsUp(rf.getBoolean("thumbs_up"));

        return restaurantInviteDTO;
    }


    private Restaurant mapRowToRestaurant(SqlRowSet rs) {

        Restaurant restaurant = new Restaurant();

        restaurant.setRestaurantId(rs.getInt("restaurant_id"));
        restaurant.setRestaurantName(rs.getString("restaurant_name"));
        restaurant.setRestaurantType(rs.getString("restaurant_type"));
        restaurant.setRestaurantAddress(rs.getString("restaurant_address"));
        restaurant.setPhone(rs.getString("phone"));
        restaurant.setImageUrl(rs.getString("img_url"));
        restaurant.setOpenTime(rs.getTime("open_time"));
        restaurant.setCloseTime(rs.getTime("close_time"));
        restaurant.setTakeOut(rs.getBoolean("take_out"));
        restaurant.setDelivery(rs.getBoolean("delivery"));

        return restaurant;
    }



}
