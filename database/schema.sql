BEGIN TRANSACTION;

DROP TABLE IF EXISTS users, restaurant, finalist, invites,invite_restaurant;
DROP SEQUENCE IF EXISTS seq_user_id;

CREATE SEQUENCE seq_user_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;


CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE restaurant (
    restaurant_id serial NOT NULL,
    restaurant_name varchar(200) NOT NULL,
	restaurant_address varchar(200),
    open_time TIME(6) NOT NULL,
    close_time TIME(6) NOT NULL,
    phone varchar(20) NULL,
    restaurant_type varchar(50) NOT NULL,
    img_url varchar(100) NULL,
    take_out boolean,
    delivery boolean,
    CONSTRAINT PK_restaurant PRIMARY KEY (restaurant_id)
);

CREATE TABLE finalist (
	finalist_id serial NOT NULL,
    restaurant_id int NOT NULL,
    user_id int NOT NULL,
    thumbs_up boolean NULL,
    CONSTRAINT PK_finalist PRIMARY KEY (finalist_id),
	CONSTRAINT FK_finalist FOREIGN KEY (restaurant_id) REFERENCES restaurant (restaurant_id),
    CONSTRAINT FK_finalist_user_id FOREIGN KEY (user_id) REFERENCES users (user_id)
);
CREATE TABLE invites (
        invite_id serial NOT NULL,
        sender_user_id integer NOT NULL,
        closing_date date,
        closing_time time,
        unique_link varchar (200),
        CONSTRAINT pk_invite_invite_id PRIMARY KEY (invite_id)
);
CREATE TABLE invite_restaurant (
        invite_id integer,
        restaurant_id integer,
	    thumbs_up boolean NULL
);

ALTER TABLE invites
ADD FOREIGN KEY (sender_user_id)
REFERENCES users(user_id);

ALTER TABLE invite_restaurant
ADD FOREIGN KEY (invite_id)
REFERENCES invites(invite_id);

ALTER TABLE invite_restaurant
ADD FOREIGN KEY (restaurant_id)
REFERENCES restaurant(restaurant_id);


INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');


INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Poulsbohemian Coffee House', '19003 Front Street Northeast, Poulsbo, WA 98370', '07:00:00', '17:00:00',
'360-779-9199', 'café', 'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Crimson Cove Smoke Specialties & Wines of Northwest', '18928 Front Street Northeast, Poulsbo, WA 98370',
 '11:00:00', '18:00:00', '360-697-1767', 'restaurant', 'Yes', 'No');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('JJs Fish House', '18881 Front Street Northeast, Poulsbo, WA 98370', '11:00:00', '20:00:00', '360-779-6609',
'seafood', 'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Boehms Chocolates at Poulsbo', '18864 Front Street Northeast, Poulsbo, WA 98370', '09:30:00', '18:00:00','360-697-3318',
'dessert', 'Yes', 'No');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Mora Iced Creamery', '18801 Front St NE, Poulsbo, WA 98370', '12:00:00', '21:00:00', '360-215-7021', 'ice cream parlor',
 'Yes', 'No');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Dominos', '19653 7th Avenue Northeast, Poulsbo, WA 98370', '10:00:00', '22:00:00', '360-779-1020', 'pizza',
'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('SUBWAY', '19890 Viking Avenue Northwest, Poulsbo, WA 98370', '07:00:00', '20:00:00', '360-779-7660', 'fast food',
'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Ops Pizza Kitchen', '346 Himrod Street, Brooklyn, NY 11237', '17:00:00', '23:00:00', '718-386-4009', 'pizza',
'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Enlightenment Wines', '93 Scott Avenue, Brooklyn, NY 11237', '17:00:00', '02:00:00', '401-481-9205', 'microbrewery/beer garden',
'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Klom Klorm', '181 Wyckoff Avenue, Brooklyn, NY 11237', '11:30:00', '22:00:00', '718-489-9188', 'thai', 'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Jimmys Breakfast', '15 Lincoln Avenue, Seaside Heights, NJ 08751', '06:00:00', '13:00:00', '732-604-2899',
'international breakfast', 'Yes', 'No');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Luna Rosa Trattoria', '401 Boulevard, Seaside Heights, NJ 08751', '16:00:00', '01:00:00','732-793-0021', 'italian',
'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Kohrs Frozen Custard, The Original', '704 Franklin Avenue, Seaside Heights, NJ 08751', '12:00:00', '19:00:00',
'ice cream parlor', '732-793-1414', 'Yes', 'No');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Bada Bean Cawfee', '400 Boardwalk, Seaside Heights, NJ 08751', '07:00:00', '21:00:00', '732-397-2114', 'coffee shop',
'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Hooters', '5005 Belt Line Rd, Addison, TX 75240', '11:00:00', '23:00:00', '972-392-9464', 'american', 'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Jasmine Uniquely Chinese Restaurant', '4002 Belt Line Road, Addison, TX 75001', '11:30:00', '22:00:00', '972-991-6867',
'chinese', 'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Blue Mesa Grill', '14866 Montfort Dr, Dallas, TX 75254', '11:00:00', '22:00:00', '972-934-0165', 'tex-mex', 'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Landini Brothers Restaurant', '115 King Street, Alexandria, VA 22314', '11:30:00', '23:00:00', '703-836-8404', 'italian',
'Yes', 'No');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Dominoes', '817 Slaters Lane, Alexandria, VA 22314', '10:00:00', '01:00:00', '703-548-3030', 'pizza', 'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Baja Fresh Mexican Grill', '3231 Duke Street, Alexandria, VA 22314', '10:30:00', '21:00:00', '703-823-2888', 'mexican',
'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Sinbad Mediterranean Food & Bakery', '3250 Duke Street, Alexandria, VA 22314', '11:00:00', '21:30:00', '571-337-1752',
'mediterranean', 'Yes', 'No');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Beans & Brews Coffeehouse', '3255 East 3300 South, Salt Lake City, UT 84109', '5:30:00', '20:00:00', '801-484-0177',
'coffee', 'Yes', 'No');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('SUBWAY', '2911 East 3300 South, Salt Lake City, UT 84109', '9:00:00', '21:00:00', '801-487-7510', 'fast food', 'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Big Apple Pizzeria', '2939 East 3300 South, Salt Lake City, UT 84109', '11:00:00', '23:00:00', '801-485-4534', 'pizza',
'Yes', 'Yes');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Citris Grill', '2991 East 3300 South, Salt Lake City, UT 84109', '11:00:00', '20:00:00', '801-466-1202', 'grill', 'Yes', 'No');
INSERT INTO restaurant (restaurant_name, restaurant_address, open_time, close_time, phone, restaurant_type, take_out, delivery)
VALUES ('Cafe Rio', '3217 East 3300 South, Salt Lake City, UT 84109', '10:30:00', '20:00:00', '801-463-7250', 'mexican', 'Yes', 'No');

INSERT INTO finalist (restaurant_id, user_id)
VALUES ('1', '1');
INSERT INTO finalist (restaurant_id, user_id)
VALUES ('4', '1');
INSERT INTO finalist (restaurant_id, user_id)
VALUES ('5', '1');
INSERT INTO finalist (restaurant_id, user_id)
VALUES ('9', '1');
INSERT INTO finalist (restaurant_id, user_id)
VALUES ('13', '1');
INSERT INTO finalist (restaurant_id, user_id)
VALUES ('14', '1');
INSERT INTO finalist (restaurant_id, user_id)
VALUES ('15', '1');


COMMIT;



