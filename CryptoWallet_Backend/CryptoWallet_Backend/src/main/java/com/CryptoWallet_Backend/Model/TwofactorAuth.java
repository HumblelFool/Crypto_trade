package com.CryptoWallet_Backend.Model;


import com.CryptoWallet_Backend.Domain.VerificationType;
import lombok.Data;


@Data
public class TwofactorAuth {

    private boolean isEnabled=false;
    private VerificationType sendTo;
}
