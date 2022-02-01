var cc2500__frsky__x_8c =
[
    [ "telemetrySequenceMarkerData_s", "cc2500__frsky__x_8c.html#structtelemetrySequenceMarkerData__s", [
      [ "ackSequenceId", "cc2500__frsky__x_8c.html#a71aa9ab2038cc70a9ec57681422322a0", null ],
      [ "initRequest", "cc2500__frsky__x_8c.html#a79c980d0a55edd018efd574693ee3f77", null ],
      [ "initResponse", "cc2500__frsky__x_8c.html#abe576b8248ed97b189c94778b401ef5b", null ],
      [ "packetSequenceId", "cc2500__frsky__x_8c.html#ab43ecab9b295083b383c53eecb0be764", null ],
      [ "retransmissionRequested", "cc2500__frsky__x_8c.html#a709f7b2376d9fd6a71b20d9fb360d86e", null ],
      [ "unused", "cc2500__frsky__x_8c.html#a0e52f7be3276367a1e10530460c521e5", null ]
    ] ],
    [ "telemetrySequenceMarker_s", "cc2500__frsky__x_8c.html#uniontelemetrySequenceMarker__s", [
      [ "data", "cc2500__frsky__x_8c.html#a5bf200f2859b38c68b90d3f2a0c39ca0", null ],
      [ "raw", "cc2500__frsky__x_8c.html#a460953104b940716d790c8125e08e590", null ]
    ] ],
    [ "telemetryData_s", "cc2500__frsky__x_8c.html#structtelemetryData__s", [
      [ "data", "cc2500__frsky__x_8c.html#afa4b2a6f3ccaa84253da422580e236a8", null ],
      [ "dataLength", "cc2500__frsky__x_8c.html#a3da551f135d62325864fbb634dab717d", null ]
    ] ],
    [ "telemetryBuffer_s", "cc2500__frsky__x_8c.html#structtelemetryBuffer__s", [
      [ "data", "cc2500__frsky__x_8c.html#a1351ff0d876436e128f872642027b728", null ],
      [ "needsProcessing", "cc2500__frsky__x_8c.html#ad9f4e4137cc11a84fef8ac1c81bf83f3", null ]
    ] ],
    [ "telemetryPayload_s", "cc2500__frsky__x_8c.html#structtelemetryPayload__s", [
      [ "crc", "cc2500__frsky__x_8c.html#af053636f95daea0ae70f8acdcf21e7d2", null ],
      [ "data", "cc2500__frsky__x_8c.html#a65df59e6221610630c3bca814fbe4ebb", null ],
      [ "packetConst", "cc2500__frsky__x_8c.html#ad207b1c9252fa5f1b2be26c451cd76e3", null ],
      [ "rssiA1", "cc2500__frsky__x_8c.html#a382669dcbac08baa6c8fc401b7ccd06f", null ],
      [ "sequence", "cc2500__frsky__x_8c.html#a8db528ae00aeb196ab5ec89c1f9ce33b", null ]
    ] ],
    [ "A1_CONST_X", "cc2500__frsky__x_8c.html#a7f85379715be8146677905c2f373cd46", null ],
    [ "SEQUENCE_MARKER_REMOTE_PART", "cc2500__frsky__x_8c.html#a20b6947b8ccd8069fbc4561cee374695", null ],
    [ "TELEMETRY_DATA_SIZE", "cc2500__frsky__x_8c.html#ab42fd5e036b7a0e2fac44c82b41a0b19", null ],
    [ "TELEMETRY_FRAME_SIZE", "cc2500__frsky__x_8c.html#a3504e014b8fb8e19b38b591521f0bc36", null ],
    [ "TELEMETRY_OUT_BUFFER_SIZE", "cc2500__frsky__x_8c.html#ad3bf02b6e617fa4dccf6ce16b2b9fb4e", null ],
    [ "TELEMETRY_SEQUENCE_LENGTH", "cc2500__frsky__x_8c.html#a194ca97d52e062931b023efb4bf01a98", null ],
    [ "UNUSED", "cc2500__frsky__x_8c.html#a86d500a34c624c2cae56bc25a31b12f3", null ],
    [ "telemetryBuffer_t", "cc2500__frsky__x_8c.html#a1ec44d928d62ae038e633eae4143e13f", null ],
    [ "telemetryData_t", "cc2500__frsky__x_8c.html#a900bdd3c66aeea592f36add3e53d36b1", null ],
    [ "telemetryPayload_t", "cc2500__frsky__x_8c.html#a786e91a9fb25491c3b71efe216fac1e8", null ],
    [ "telemetrySequenceMarker_t", "cc2500__frsky__x_8c.html#afdd10484a39362be7278ee0e37ccb6fb", null ],
    [ "telemetrySequenceMarkerData_t", "cc2500__frsky__x_8c.html#a69014c25ea88e800874f22bf2f610b1f", null ],
    [ "appendSmartPortData", "cc2500__frsky__x_8c.html#aa34ed2efb7e7bcf2f58fe46dd430af16", null ],
    [ "buildTelemetryFrame", "cc2500__frsky__x_8c.html#a9a6f7720d833f05ecb33317f516f1e7c", null ],
    [ "calculateCrc", "cc2500__frsky__x_8c.html#a74b7c623e8494053e65ec2a833b6af6e", null ],
    [ "frSkyXCheckQueueEmpty", "cc2500__frsky__x_8c.html#ad99f671f88c91ae883727c744f9029bb", null ],
    [ "frSkyXHandlePacket", "cc2500__frsky__x_8c.html#a90776c7143b1e75512e9bf975aca774e", null ],
    [ "frSkyXInit", "cc2500__frsky__x_8c.html#a09aedfa0332a58b4e89a15471892e08d", null ],
    [ "frSkyXProcessFrame", "cc2500__frsky__x_8c.html#aaa0d6bdd7091f3e1afc2422c4892e19e", null ],
    [ "frSkyXSetRcData", "cc2500__frsky__x_8c.html#ad8790d5ac8de3cf13eab7f9e583dd937", null ],
    [ "frSkyXTelemetrySendByte", "cc2500__frsky__x_8c.html#a3b7e9e8865dd8c98098401d2943237f2", null ],
    [ "frSkyXTelemetryWriteFrame", "cc2500__frsky__x_8c.html#acb744d1a892e090b06d7ab78e55481d0", null ],
    [ "isValidPacket", "cc2500__frsky__x_8c.html#ab87853b69b609ffb3e401989b389335f", null ],
    [ "crcTable", "cc2500__frsky__x_8c.html#a12235859e59c2ded9d10a155b5d19f49", null ],
    [ "frame", "cc2500__frsky__x_8c.html#a2a15531abd888c17572e7aa917fdf6fe", null ],
    [ "packetLength", "cc2500__frsky__x_8c.html#a8a110ab1d56f951cbe4e39d967955f3a", null ],
    [ "remoteToProcessId", "cc2500__frsky__x_8c.html#af99b33aa0fccb95d790cf31e47e3fd66", null ],
    [ "remoteToProcessIndex", "cc2500__frsky__x_8c.html#a78e29406b6cccc6fd830f7684a55e383", null ],
    [ "responseToSend", "cc2500__frsky__x_8c.html#a4c9d6b35b5dff281156d9a276eb7bcb0", null ],
    [ "telemetryDelayUs", "cc2500__frsky__x_8c.html#a466abd2fb8fd80d85055c04092038ed7", null ],
    [ "telemetryEnabled", "cc2500__frsky__x_8c.html#a4c4ee006e76c9a8525fdcd9a0a76a1c0", null ],
    [ "telemetryOutBuffer", "cc2500__frsky__x_8c.html#a9f476795e5a652317779f60ac402e0f8", null ],
    [ "telemetryOutWriter", "cc2500__frsky__x_8c.html#acb2bea54e8cc5125289888b03a3f1ad9", null ],
    [ "telemetryRxBuffer", "cc2500__frsky__x_8c.html#a648b73651676fd471ca703ee421ad8bb", null ],
    [ "telemetryTxBuffer", "cc2500__frsky__x_8c.html#a5f12fab3d1743f496a86833fbda13f62", null ]
];