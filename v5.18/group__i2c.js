var group__i2c =
[
    [ "i2c_transaction", "group__i2c.html#structi2c__transaction", [
      [ "buf", "group__i2c.html#a295b2671835ae06b28905433cd1096ee", null ],
      [ "len_r", "group__i2c.html#a53b3cfd6febadfef15cdd1136adb20a5", null ],
      [ "len_w", "group__i2c.html#afe675669c727a98bd998283d940b2636", null ],
      [ "slave_addr", "group__i2c.html#af0c94c610e2f7b712f06b87440849ab6", null ],
      [ "status", "group__i2c.html#ac4f80563bab524eee997c5c27ef570a4", null ],
      [ "type", "group__i2c.html#ab23c7469258089742bb0c2950599b232", null ]
    ] ],
    [ "i2c_periph", "group__i2c.html#structi2c__periph", [
      [ "errors", "group__i2c.html#a4b1270562d3320ff0151bd7856ec0c6e", null ],
      [ "idle", "group__i2c.html#ad97860ba0d06f633e2cef1efaabcc725", null ],
      [ "idx_buf", "group__i2c.html#adc23e331e23ecbdabc4510adeb43f8c2", null ],
      [ "init_struct", "group__i2c.html#a76d89c1653cd5da167ec5ce1edaf3d7c", null ],
      [ "reg_addr", "group__i2c.html#ab87b1de4062efa2a073a28748b9cec38", null ],
      [ "setbitrate", "group__i2c.html#a956812ef8aa050d1fc729b5d783cdc60", null ],
      [ "spin", "group__i2c.html#a4c6670323a9702604059336fbfc771fe", null ],
      [ "status", "group__i2c.html#af293727ce3c1ee16e7b5f51ac5e8ce85", null ],
      [ "submit", "group__i2c.html#a5f82ba47a61e90999ba4cb1c948902bc", null ],
      [ "trans", "group__i2c.html#ad3bd507a4aa9e144366dc2c8a6291240", null ],
      [ "trans_extract_idx", "group__i2c.html#a4e572be9f28f1037d7c749a223329aaf", null ],
      [ "trans_insert_idx", "group__i2c.html#a63002740b27aaaf9d847b17001302d9c", null ],
      [ "watchdog", "group__i2c.html#adb02b71a163584f08afeba429abda130", null ]
    ] ],
    [ "i2c_errors", "group__i2c.html#structi2c__errors", [
      [ "ack_fail_cnt", "group__i2c.html#a5e18e74d9bc598907010196a760261fe", null ],
      [ "arb_lost_cnt", "group__i2c.html#af759b5450d828fa43aa04b203bab42cd", null ],
      [ "er_irq_cnt", "group__i2c.html#a8cde2b0ff7f6f4c7672018c51789da1c", null ],
      [ "last_unexpected_event", "group__i2c.html#a8873e61902c73fefa2919fc1115c2596", null ],
      [ "miss_start_stop_cnt", "group__i2c.html#ad509216d6106e340e07f72e58f3f52e8", null ],
      [ "over_under_cnt", "group__i2c.html#a872cdd33256c33ad0a4ec29b5ff2ac85", null ],
      [ "pec_recep_cnt", "group__i2c.html#a05faedf401286bc8e6a4a25c949af3e3", null ],
      [ "queue_full_cnt", "group__i2c.html#ac53b074124c2d291dc57cecd1166823b", null ],
      [ "smbus_alert_cnt", "group__i2c.html#a2d907f3b03aa19fa2300a5f92ece5317", null ],
      [ "timeout_tlow_cnt", "group__i2c.html#a72a1be189ba8375641abaf09c9e51d39", null ],
      [ "unexpected_event_cnt", "group__i2c.html#a874ae9784489639f832a7b6d8b9d0993", null ],
      [ "wd_reset_cnt", "group__i2c.html#aa3b5ab98abde34151b0e46b6ab44d55e", null ]
    ] ],
    [ "I2C_BUF_LEN", "group__i2c.html#ga4757adc18b278c40ced0d79f4e104460", null ],
    [ "I2C_TRANSACTION_QUEUE_LEN", "group__i2c.html#ga1e8f7694d49989f4823aa34cffae6319", null ],
    [ "ZEROS_ERR_COUNTER", "group__i2c.html#ga0c590ace0cfbd91af9173a07cc211362", null ],
    [ "i2c_idle_fn_t", "group__i2c.html#gada60bb500eb1c9e4858ad1cc4f657d6f", null ],
    [ "i2c_setbitrate_fn_t", "group__i2c.html#gae04148aed7c71d5b66046c612c611d36", null ],
    [ "i2c_spin_fn_t", "group__i2c.html#ga4d31410b7d9628074bd8984dfc2fd10d", null ],
    [ "i2c_submit_fn_t", "group__i2c.html#ga68f08058b94010a0968ca75525c7a038", null ],
    [ "I2CStatus", "group__i2c.html#ga9bec282875cd65e00172e875ef785bec", [
      [ "I2CIdle", "group__i2c.html#gga9bec282875cd65e00172e875ef785beca9ab9b8398c146fca315edd21fc934788", null ],
      [ "I2CStartRequested", "group__i2c.html#gga9bec282875cd65e00172e875ef785becac38326f97d97d96d564d1064ff3313c1", null ],
      [ "I2CAddrWrSent", "group__i2c.html#gga9bec282875cd65e00172e875ef785beca9542ce7c59570cc67e2fc300e04a44c9", null ],
      [ "I2CAddrRdSent", "group__i2c.html#gga9bec282875cd65e00172e875ef785beca2cf1ba6e816d830423dc780397d7b890", null ],
      [ "I2CSendingByte", "group__i2c.html#gga9bec282875cd65e00172e875ef785becad5e838ff3d76d53596ede423be19c13d", null ],
      [ "I2CReadingByte", "group__i2c.html#gga9bec282875cd65e00172e875ef785becac904115143956dd682fcfecccab3596e", null ],
      [ "I2CReadingLastByte", "group__i2c.html#gga9bec282875cd65e00172e875ef785becaf0e511ed8b351bcaa8a3236ac0a8b71f", null ],
      [ "I2CStopRequested", "group__i2c.html#gga9bec282875cd65e00172e875ef785beca02e1f3f2236638eb8744e0bbdbd2eca8", null ],
      [ "I2CRestartRequested", "group__i2c.html#gga9bec282875cd65e00172e875ef785becafe8a830655f0caf0bbf6355b1a36c997", null ],
      [ "I2CComplete", "group__i2c.html#gga9bec282875cd65e00172e875ef785beca7ba21258d186209c66f9813bcd91011f", null ],
      [ "I2CFailed", "group__i2c.html#gga9bec282875cd65e00172e875ef785beca755d669413869602fb4d468ab90700f3", null ]
    ] ],
    [ "I2CTransactionStatus", "group__i2c.html#gab31a87ef6e90ddd08be846de32e8a442", [
      [ "I2CTransPending", "group__i2c.html#ggab31a87ef6e90ddd08be846de32e8a442adfa4e1bf79d0b917c2c6c473b0955cd3", null ],
      [ "I2CTransRunning", "group__i2c.html#ggab31a87ef6e90ddd08be846de32e8a442a24a67dd6fad229ed23a02353bb820a10", null ],
      [ "I2CTransSuccess", "group__i2c.html#ggab31a87ef6e90ddd08be846de32e8a442a2884da616ec2ff9183e649f8fab1073b", null ],
      [ "I2CTransFailed", "group__i2c.html#ggab31a87ef6e90ddd08be846de32e8a442a4a8906d81bf97d49da468e6c6b9f39e9", null ],
      [ "I2CTransDone", "group__i2c.html#ggab31a87ef6e90ddd08be846de32e8a442a6d2d46dfea9ba1457201928eabeccace", null ]
    ] ],
    [ "I2CTransactionType", "group__i2c.html#gae433e858ea905e29d6ac9a70bc79352e", [
      [ "I2CTransTx", "group__i2c.html#ggae433e858ea905e29d6ac9a70bc79352ea7bf029a65bd3dbb742ad3e2bb7e10c6d", null ],
      [ "I2CTransRx", "group__i2c.html#ggae433e858ea905e29d6ac9a70bc79352ea0a6a2eb5c566606a3ea9acc6734b4f91", null ],
      [ "I2CTransTxRx", "group__i2c.html#ggae433e858ea905e29d6ac9a70bc79352ea8fa3bedf5ded2c2a0a7d3d07dc776d7b", null ]
    ] ],
    [ "i2c_blocking_receive", "group__i2c.html#ga20e1122a73affcddc3adfd904799e612", null ],
    [ "i2c_blocking_transceive", "group__i2c.html#ga0666a38e1bb2dc7a6b796a404e27fef4", null ],
    [ "i2c_blocking_transmit", "group__i2c.html#gad729c07f3a162f0463cbe381f4b538d3", null ],
    [ "i2c_event", "group__i2c.html#ga05763355d0e087ba41feab61dd773fe6", null ],
    [ "i2c_idle", "group__i2c.html#ga5ca96421128d944b576fe84bfce9b0c7", null ],
    [ "i2c_init", "group__i2c.html#ga6b8ffbb119f71ec012b6a2c0a2f92279", null ],
    [ "i2c_receive", "group__i2c.html#ga9e7c3ccd9ba7415486bfb2e52eaa3964", null ],
    [ "i2c_setbitrate", "group__i2c.html#gaf94ae876d37b80660572b725fffa7b0b", null ],
    [ "i2c_submit", "group__i2c.html#ga4eed48e542a9c71b93372f5a38d7e367", null ],
    [ "i2c_transceive", "group__i2c.html#gafb731922c9fb73255aa4cc11e34bfbd6", null ],
    [ "i2c_transmit", "group__i2c.html#ga54405aa058f14a143b8b1b5380015927", null ]
];