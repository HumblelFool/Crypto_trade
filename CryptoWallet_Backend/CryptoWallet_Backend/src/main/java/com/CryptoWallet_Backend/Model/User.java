package com.CryptoWallet_Backend.Model;

import com.CryptoWallet_Backend.Domain.USER_ROLE;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Long id;

    private  String fullName;
    private  String email;

    @JsonProperty
    private String password;

    @Embedded
    private  TwofactorAuth twofactorAuth =new TwofactorAuth();

    private USER_ROLE role=USER_ROLE.ROLE_CUSTOMER;
}
