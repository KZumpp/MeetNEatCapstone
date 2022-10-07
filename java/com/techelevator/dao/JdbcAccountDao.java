package com.techelevator.dao;

import com.techelevator.model.Account;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcAccountDao implements AccountDao {
    private final JdbcTemplate jdbcTemplate;
    public JdbcAccountDao(JdbcTemplate jdbcTemplate) {this.jdbcTemplate = jdbcTemplate;}

    @Override
    public List<Account> findAllAccounts() {
        List<Account> accounts = new ArrayList<>();
        String sql = "SELECT * FROM user";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            Account account = mapRowToAccount(results);
            accounts.add(account);
        }
        return accounts;
    }

    private Account mapRowToAccount(SqlRowSet rs) {
        Account account = new Account();
        account.setUserId(rs.getInt("user_id"));
        account.setUserEmail(rs.getString("username"));
        account.setUserArea(rs.getString("user_area"));
        return account;
    }
}
