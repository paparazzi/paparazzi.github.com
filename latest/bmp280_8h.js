var bmp280_8h =
[
    [ "bmp280_i2c_t", "bmp280_8h.html#structbmp280__i2c__t", [
      [ "p", "bmp280_8h.html#aecef448b5a19895640777a131898c14c", null ],
      [ "slave_addr", "bmp280_8h.html#a148083a23958ac79f575ec4547ef36c6", null ],
      [ "trans", "bmp280_8h.html#acdece4c49105325229cc025d01db9437", null ]
    ] ],
    [ "bmp280_spi_t", "bmp280_8h.html#structbmp280__spi__t", [
      [ "p", "bmp280_8h.html#aec46497970fe5cc9da6e043653a70e1e", null ],
      [ "rx_buf", "bmp280_8h.html#a8caf2d1048a20d8b853859f85837583d", null ],
      [ "slave_idx", "bmp280_8h.html#a42d0f5f9eb5a61377b446ac706e7b15f", null ],
      [ "trans", "bmp280_8h.html#ab6f8e5e2e1f8a03dd8719a56114ccec3", null ],
      [ "tx_buf", "bmp280_8h.html#aa9937123ebbe21eb990d6f29e43bb5a4", null ]
    ] ],
    [ "bmp280_reg_calib_data_t", "bmp280_8h.html#structbmp280__reg__calib__data__t", [
      [ "dig_p1", "bmp280_8h.html#aed7dacf831643493cf5029434086e512", null ],
      [ "dig_p2", "bmp280_8h.html#ae011c75f158d4e17a740fe5076009112", null ],
      [ "dig_p3", "bmp280_8h.html#a9ed709e62ff364ca56892ac97ddea3bf", null ],
      [ "dig_p4", "bmp280_8h.html#a0602120cc2cb32fa0008cfa0c95996cd", null ],
      [ "dig_p5", "bmp280_8h.html#abfae39bf4bfb6ce66cb62621bbca09bb", null ],
      [ "dig_p6", "bmp280_8h.html#a7f77f1ac335a966dc6fb187013a2a059", null ],
      [ "dig_p7", "bmp280_8h.html#a19030d18e9faadc38ca1811ae1984f3c", null ],
      [ "dig_p8", "bmp280_8h.html#ab2cc075c7bf77991094b1889e28a0b5c", null ],
      [ "dig_p9", "bmp280_8h.html#a6bf10abafd1dcb4c8f1aaac0862d81d4", null ],
      [ "dig_t1", "bmp280_8h.html#abc08da4adfd5011b580de1990849500c", null ],
      [ "dig_t2", "bmp280_8h.html#a39c0cedc6db691ced8f40cd4ac1de73c", null ],
      [ "dig_t3", "bmp280_8h.html#a40a6756136aa24403ac39d4d1009bc98", null ],
      [ "t_fine", "bmp280_8h.html#a0a1deb900a381b458d74f5fba596bfff", null ]
    ] ],
    [ "bmp280_t", "bmp280_8h.html#structbmp280__t", [
      [ "bus", "bmp280_8h.html#a85a7b0daf113bd3018736d301989c144", null ],
      [ "calib", "bmp280_8h.html#a18e619639a653b13b547a3f4d35c3309", null ],
      [ "config_idx", "bmp280_8h.html#a4adda9ac071bf57de8242b1090a40f7b", null ],
      [ "data_available", "bmp280_8h.html#a2f4e88c299895f1e9b850cafabc58776", null ],
      [ "device", "bmp280_8h.html#a9a059f9e574a6ddcdcafb5f8ce160563", null ],
      [ "initialized", "bmp280_8h.html#afafd33da73b8426c599a35365559702c", null ],
      [ "pressure", "bmp280_8h.html#ac415dc331b1aea31caf066ef16d62492", null ],
      [ "raw_pressure", "bmp280_8h.html#afec3ee21bcee3911bea9d0491a55eac0", null ],
      [ "raw_temperature", "bmp280_8h.html#a68c3818266588d3f92607394b75a4234", null ],
      [ "rx_buffer", "bmp280_8h.html#aee09099cfa50977c3e119b53611ce02f", null ],
      [ "rx_length", "bmp280_8h.html#ac13aca13dae6413de30022554d8b763c", null ],
      [ "status", "bmp280_8h.html#a287a6f3816316fbe32b818134b4b703b", null ],
      [ "temperature", "bmp280_8h.html#a5df2cba905ff5041a6723d925cb2007c", null ],
      [ "tx_buffer", "bmp280_8h.html#a5b636d5add6b63ddfaf73356a05131a9", null ]
    ] ],
    [ "bmp280_t.__unnamed320__", "bmp280_8h.html#unionbmp280__t_8____unnamed320____", [
      [ "i2c", "bmp280_8h.html#aab36abef0cdebd2f84424ad4d17e286b", null ],
      [ "spi", "bmp280_8h.html#a0b0760e072413088ea8460c3b4f43dbe", null ]
    ] ],
    [ "bmp280_bus_t", "bmp280_8h.html#a6d8263ba2b6961ffb4cad5a9fe32cb51", [
      [ "BMP280_SPI", "bmp280_8h.html#a6d8263ba2b6961ffb4cad5a9fe32cb51a7345b4e49641b526294b90fa435c7549", null ],
      [ "BMP280_I2C", "bmp280_8h.html#a6d8263ba2b6961ffb4cad5a9fe32cb51a09dea0b9b91cf7a263881038a6077464", null ]
    ] ],
    [ "bmp280_status_t", "bmp280_8h.html#a6e1ca14b0a3292d9f3955fe82d8ceef4", [
      [ "BMP280_STATUS_UNINIT", "bmp280_8h.html#a6e1ca14b0a3292d9f3955fe82d8ceef4a80877d3b7c7024970d2304e33cd344a3", null ],
      [ "BMP280_STATUS_IDLE", "bmp280_8h.html#a6e1ca14b0a3292d9f3955fe82d8ceef4a901a72fd00243172f76d1fdffc742ecd", null ],
      [ "BMP280_STATUS_GET_CALIB", "bmp280_8h.html#a6e1ca14b0a3292d9f3955fe82d8ceef4a530fb563928463f3ab417ada171a2986", null ],
      [ "BMP280_STATUS_CONFIGURE", "bmp280_8h.html#a6e1ca14b0a3292d9f3955fe82d8ceef4ac837fb6d26b67ae3b98dabb2d4d1bce0", null ],
      [ "BMP280_STATUS_READ_STATUS_REG", "bmp280_8h.html#a6e1ca14b0a3292d9f3955fe82d8ceef4a4cd22c1c42fc85c12cb390326ea17704", null ],
      [ "BMP280_STATUS_READ_DATA_REGS", "bmp280_8h.html#a6e1ca14b0a3292d9f3955fe82d8ceef4a02d11bde0b8ca80e2916c7cd542cbc20", null ]
    ] ],
    [ "bmp_device_t", "bmp280_8h.html#ab1f8d07ef6c7ead9cb731e2225e8e38e", [
      [ "BMP_UNKOWN", "bmp280_8h.html#ab1f8d07ef6c7ead9cb731e2225e8e38ea63213773775614eb111ce1fe451d2774", null ],
      [ "BMP_280", "bmp280_8h.html#ab1f8d07ef6c7ead9cb731e2225e8e38ea7cd14d68193258bc6df03dbf69f4852d", null ]
    ] ],
    [ "bmp280_event", "bmp280_8h.html#ac04ebdd7d32728cbc5efbab523e7e644", null ],
    [ "bmp280_init", "bmp280_8h.html#a1cfc1a5c4fa2d195848230ee351f0a56", null ],
    [ "bmp280_periodic", "bmp280_8h.html#a0459b6fef7f674495485cdc10ae45dbf", null ],
    [ "bmp280_read_eeprom_calib", "bmp280_8h.html#a3dd9b934ff556d3d2b773947f1c6d614", null ]
];