package com.techelevator.controller;


import com.techelevator.dao.InviteDao;
import com.techelevator.dao.RestaurantDao;
import com.techelevator.dao.UserDao;
import com.techelevator.model.Invite;
import com.techelevator.model.Restaurant;
import com.techelevator.model.RestaurantInviteDTO;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppController {

    private final UserDao userDao;
    private final InviteDao inviteDao;
    private final RestaurantDao restaurantDao;

    public AppController(UserDao userDao, InviteDao inviteDao, RestaurantDao restaurantDao) {
        this.userDao = userDao;
        this.inviteDao = inviteDao;
        this.restaurantDao = restaurantDao;
    }

    @PreAuthorize("isAuthenticated()")
    @RequestMapping(path= "/restaurants/search/{cityOrZip}", method = RequestMethod.GET)
    public List<Restaurant> getAllRestaurantsByArea(@PathVariable String cityOrZip) {

        return restaurantDao.getAllRestaurantsByArea(cityOrZip);
    }


    @PreAuthorize("isAuthenticated()")
    @RequestMapping(path= "/restaurants/{restaurantId}", method = RequestMethod.GET)
    public Restaurant getRestaurantById(@PathVariable int restaurantId) {

        return restaurantDao.getRestaurantById(restaurantId);
    }


    @PreAuthorize("isAuthenticated()")
    @RequestMapping(path = "/restaurants/all/{inviteId}", method = RequestMethod.GET)
    public List<Restaurant> getAllRestaurantsByInviteId(@PathVariable int inviteId) {
        return restaurantDao.getAllRestaurantsByInviteId(inviteId);
    }

    @PreAuthorize("permitAll()")
    @RequestMapping(path = "/invites/{inviteId}", method = RequestMethod.GET)
    public Invite getInviteByInviteId(@PathVariable int inviteId) {

        return inviteDao.getInviteByInviteId(inviteId);
    }

    @PreAuthorize("isAuthenticated()")
    @RequestMapping(path = "/finalists/{inviteId}", method = RequestMethod.GET)
    public List<Restaurant> getFinalistsByInviteId(@PathVariable int inviteId) {

        return restaurantDao.getFinalistsByInviteId(inviteId);
    }

    //maps thumbed up restaurants to favorites
    @PreAuthorize("isAuthenticated()")
    @RequestMapping(path = "/favorites", method = RequestMethod.PUT)
    public void thumbsUp(@RequestBody RestaurantInviteDTO restaurantInvite) {

        restaurantDao.thumbsUp(restaurantInvite.getInviteId(), restaurantInvite.getRestaurantId());

    }
    @PreAuthorize("permitAll()")
    @RequestMapping(path="/favorites/all", method=RequestMethod.GET)
    public List<RestaurantInviteDTO> getAllFavorites() {

    return restaurantDao.getAllFavorites();
    }
    @PreAuthorize("permitAll()")
    @RequestMapping(path="/favorites/details", method = RequestMethod.GET)
    public Restaurant getFavoriteDetails() {
        return restaurantDao.getFavoriteDetails();
    }

    // this populates the "invites" page (possibly)
   @PreAuthorize("isAuthenticated()")
    @RequestMapping(path = "/UserInvites/{senderUserId}", method = RequestMethod.GET)
    public List<Invite> getAllInvitesBySenderId(@PathVariable int senderUserId) {

        return inviteDao.getAllInvitesBySenderId(senderUserId);
    }


    // creates an invite, and inviteId is generated that can be used on thr frontend
    @PreAuthorize("isAuthenticated()")
    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(path = "/invites/create", method = RequestMethod.POST)
    public long createInvite(@RequestBody Invite invite) {

        return inviteDao.createInvite(invite).getInviteId();
    }



    @PreAuthorize("permitAll()")
    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(path = "/user", method = RequestMethod.POST)
    public long getUserId(@RequestBody String username) {

        return userDao.findIdByUsername(username);
    }












}
