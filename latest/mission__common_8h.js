var mission__common_8h =
[
    [ "_mission_wp", "mission__common_8h.html#struct__mission__wp", [
      [ "wp", "mission__common_8h.html#a1df0ee5352d97f507537b0340db3a8a5", null ]
    ] ],
    [ "_mission_circle", "mission__common_8h.html#struct__mission__circle", [
      [ "center", "mission__common_8h.html#ac5f56d1551eb67ea89b0e53409c7a626", null ],
      [ "radius", "mission__common_8h.html#ab7c2c6ef7dd82eef3ed253064455d7d9", null ]
    ] ],
    [ "_mission_segment", "mission__common_8h.html#struct__mission__segment", [
      [ "from", "mission__common_8h.html#a806b628e72237ab59985323404f3d369", null ],
      [ "to", "mission__common_8h.html#a510760f3d21dc907aadb9ea842773e6a", null ]
    ] ],
    [ "_mission_path", "mission__common_8h.html#struct__mission__path", [
      [ "nb", "mission__common_8h.html#af6e9e0b2e3c9c08a28fd099a261b2e65", null ],
      [ "path", "mission__common_8h.html#ad5f52550e4cea6a9c76ce33128703b12", null ],
      [ "path_idx", "mission__common_8h.html#ad5780cfe4abb38e87b2b78708a04744b", null ]
    ] ],
    [ "_mission_registered", "mission__common_8h.html#struct__mission__registered", [
      [ "cb", "mission__common_8h.html#a5010ca6bee3703ed21651700792b7ef8", null ],
      [ "type", "mission__common_8h.html#a46f875501601e8e8572a4bbd89949a4f", null ]
    ] ],
    [ "_mission_custom", "mission__common_8h.html#struct__mission__custom", [
      [ "nb", "mission__common_8h.html#a579c34ab3dadc6a01eeb6851772a0051", null ],
      [ "params", "mission__common_8h.html#a0295e7a212a14e6e40e0f134ed625e0b", null ],
      [ "reg", "mission__common_8h.html#a3b39b4382399bae0c1c801379621bfa7", null ]
    ] ],
    [ "_mission_element", "mission__common_8h.html#struct__mission__element", [
      [ "duration", "mission__common_8h.html#ae64fdc1f6779b061dc8f99dcaa7b4952", null ],
      [ "element", "mission__common_8h.html#a1714c5ecb3de791fba4c0f6c3315132f", null ],
      [ "index", "mission__common_8h.html#a9b7e63b95f8d64933fb8db3cfa26934a", null ],
      [ "type", "mission__common_8h.html#a9865f3bf50ac1182fbe6998e37799cb8", null ]
    ] ],
    [ "_mission", "mission__common_8h.html#struct__mission", [
      [ "current_idx", "mission__common_8h.html#af6b890b1a39abf10f3cea4f47d7ce4d6", null ],
      [ "element_time", "mission__common_8h.html#a7813023e235161bb33a4aac1213f7723", null ],
      [ "elements", "mission__common_8h.html#a7529739f5dc027a2ccdbd1542f25b230", null ],
      [ "insert_idx", "mission__common_8h.html#acb133196b6ba998ee1545cb615b38968", null ],
      [ "registered", "mission__common_8h.html#a693ef605edb09a0259bc2009ddbaef65", null ]
    ] ],
    [ "_mission_element.element", "mission__common_8h.html#union__mission__element_8element", [
      [ "mission_circle", "mission__common_8h.html#a6d45cd216e3c2f03b649363a933ecbd2", null ],
      [ "mission_custom", "mission__common_8h.html#a1d2275229a3fdf882989f61e4de15262", null ],
      [ "mission_path", "mission__common_8h.html#a0ce7ece7c8886957408d9d60ef9bdc11", null ],
      [ "mission_segment", "mission__common_8h.html#a245292dc991f4b77692c4562bee9bafd", null ],
      [ "mission_wp", "mission__common_8h.html#a8701bac0f729a9d45ef5006ba35d423c", null ]
    ] ],
    [ "MISSION_CUSTOM_MAX", "mission__common_8h.html#af56b90050f462e77f5d08e44024ad225", null ],
    [ "MISSION_ELEMENT_NB", "mission__common_8h.html#abbc222d733a10afc3b9ab7537d664a73", null ],
    [ "MISSION_PATH_NB", "mission__common_8h.html#aab82cfe6539e97d31e0120e16c188465", null ],
    [ "MISSION_REGISTER_NB", "mission__common_8h.html#ab209a799db035090e88a6201c01d9095", null ],
    [ "MISSION_TYPE_SIZE", "mission__common_8h.html#a03c6e0be3d00cafa6c5181342388ab10", null ],
    [ "mission_custom_cb", "mission__common_8h.html#a13c3d2c000bc063846c910cc7ac51bfd", null ],
    [ "MissionInsertMode", "mission__common_8h.html#add225f937fa97e4f76900b7f5e73872e", [
      [ "Append", "mission__common_8h.html#add225f937fa97e4f76900b7f5e73872ea71f30510b076569dd2830e348fb77a13", null ],
      [ "Prepend", "mission__common_8h.html#add225f937fa97e4f76900b7f5e73872eaff00766678e17c5de13a40452c27d802", null ],
      [ "ReplaceCurrent", "mission__common_8h.html#add225f937fa97e4f76900b7f5e73872ea1fd0704fd22b0ea1388f7d19f84f8161", null ],
      [ "ReplaceAll", "mission__common_8h.html#add225f937fa97e4f76900b7f5e73872ead55a1685be3004600647f9607d70aa70", null ],
      [ "ReplaceNexts", "mission__common_8h.html#add225f937fa97e4f76900b7f5e73872eaa7bc3623595171b0c3f13d83b9af532d", null ]
    ] ],
    [ "MissionRunFlag", "mission__common_8h.html#a704c1b8acb8d1571d6f23b6efb7977f4", [
      [ "MissionRun", "mission__common_8h.html#a704c1b8acb8d1571d6f23b6efb7977f4a846867fdd33e5035909150c2c9be9bf0", null ],
      [ "MissionInit", "mission__common_8h.html#a704c1b8acb8d1571d6f23b6efb7977f4a75ad0f0f4ad1cedcea2f4076537fc9b5", null ],
      [ "MissionUpdate", "mission__common_8h.html#a704c1b8acb8d1571d6f23b6efb7977f4ad970c0f7486cef69f90e7deb467c8ac0", null ]
    ] ],
    [ "MissionType", "mission__common_8h.html#a64f46ea1c53b7a5677d078814b7b4752", [
      [ "MissionWP", "mission__common_8h.html#a64f46ea1c53b7a5677d078814b7b4752adee6921ec8fea41804938fa1e0a7aa3f", null ],
      [ "MissionCircle", "mission__common_8h.html#a64f46ea1c53b7a5677d078814b7b4752adcf63d3c05bbffb14423b8ba96a8db9c", null ],
      [ "MissionSegment", "mission__common_8h.html#a64f46ea1c53b7a5677d078814b7b4752adf596eb62434f0e84ed2404d474dbe70", null ],
      [ "MissionPath", "mission__common_8h.html#a64f46ea1c53b7a5677d078814b7b4752aeb45aac28e0ac2391c20d5105433edd3", null ],
      [ "MissionCustom", "mission__common_8h.html#a64f46ea1c53b7a5677d078814b7b4752a2cd3753f9cd84674fcd6e205618dcce9", null ]
    ] ],
    [ "mission_get", "mission__common_8h.html#a217140c5e6527af70d60598cad1bc6ff", null ],
    [ "mission_get_from_index", "mission__common_8h.html#a7177b7dbe44718e5e2cd65e33c45257a", null ],
    [ "mission_init", "mission__common_8h.html#a19c6efe9565f7d4a03291cb165b931ff", null ],
    [ "mission_insert", "mission__common_8h.html#a31b2a2265d6533f3d4f408b82cf99f95", null ],
    [ "mission_parse_CIRCLE", "mission__common_8h.html#a6bc6421e3873d2b4d620bc33e1e90446", null ],
    [ "mission_parse_CIRCLE_LLA", "mission__common_8h.html#aff4d5f1fc008b07a4b312472ff956f8f", null ],
    [ "mission_parse_CUSTOM", "mission__common_8h.html#a1184c8f90d762c04f04627ec60c18921", null ],
    [ "mission_parse_END_MISSION", "mission__common_8h.html#a0cb632118de7a1a6671901e66131e234", null ],
    [ "mission_parse_GOTO_MISSION", "mission__common_8h.html#a9f8c4705ccecb8f0cc59fd25216bff17", null ],
    [ "mission_parse_GOTO_WP", "mission__common_8h.html#a6a886a1e7ba0bd3d1b89a15184fee2bd", null ],
    [ "mission_parse_GOTO_WP_LLA", "mission__common_8h.html#a0e05b413aea5474b477aac3c43dbec42", null ],
    [ "mission_parse_NEXT_MISSION", "mission__common_8h.html#a20c4fc881f08ea68079de459aa4ef622", null ],
    [ "mission_parse_PATH", "mission__common_8h.html#ae659d1efa52b3d715cbd35b8b4fe8bdf", null ],
    [ "mission_parse_PATH_LLA", "mission__common_8h.html#a21836256087c77243583a2e1de8c648b", null ],
    [ "mission_parse_SEGMENT", "mission__common_8h.html#a9006fa3835ff34e0797a733b8423b00d", null ],
    [ "mission_parse_SEGMENT_LLA", "mission__common_8h.html#a3f6b94a9d68ae0afc1ae4bee904db667", null ],
    [ "mission_parse_UPDATE", "mission__common_8h.html#a8ae82a35d851ba67a7d044f4950db583", null ],
    [ "mission_point_of_lla", "mission__common_8h.html#a7acc766194f30b5ae4c48a0b2addbb9f", null ],
    [ "mission_register", "mission__common_8h.html#ac357198f4e5126c4c698d1ab2c8330c3", null ],
    [ "mission_run", "mission__common_8h.html#a30b803cd44fe2ee518d935dccbcc2de7", null ],
    [ "mission_status_report", "mission__common_8h.html#a3539ca9cd9417f5d2bfda2fdaf6973fa", null ],
    [ "mission", "mission__common_8h.html#a06160041db75e80665ebf0f22f13cc98", null ]
];