package com.CryptoWallet_Backend.repository;


import com.CryptoWallet_Backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
