var hal__stm32__dma_8h =
[
    [ "DMAConfig", "hal__stm32__dma_8h.html#structDMAConfig", [
      [ "circular", "hal__stm32__dma_8h.html#a624066c1d4dc1989b64a93ffe4042c86", null ],
      [ "direction", "hal__stm32__dma_8h.html#acc5f20c162f22fc17d6818a7a626dee3", null ],
      [ "dma_priority", "hal__stm32__dma_8h.html#a45e66cd81b8b5cad8741161d6facdd72", null ],
      [ "end_cb", "hal__stm32__dma_8h.html#ac24f6bd4206c68541acb512ccbab74a9", null ],
      [ "error_cb", "hal__stm32__dma_8h.html#a8133d4f34ac8f8b977500fbce56f9fb3", null ],
      [ "inc_memory_addr", "hal__stm32__dma_8h.html#ae7fe744b4555b16685be693a574b8a9e", null ],
      [ "inc_peripheral_addr", "hal__stm32__dma_8h.html#a2a12cde9404838e0534a196974be7504", null ],
      [ "irq_priority", "hal__stm32__dma_8h.html#a38aa65d9940e7f2e99146b3450a64fe1", null ],
      [ "msize", "hal__stm32__dma_8h.html#a0b4e7a953d80f9bfea313dc56f062698", null ],
      [ "psize", "hal__stm32__dma_8h.html#ad07331213b2f70500d317d6f2a86908c", null ],
      [ "stream", "hal__stm32__dma_8h.html#a853f47fc596886119b818dbc674864ea", null ]
    ] ],
    [ "DMADriver", "hal__stm32__dma_8h.html#structDMADriver", [
      [ "config", "hal__stm32__dma_8h.html#a621863ff1a5af295e0d991fac9ed1426", null ],
      [ "controller", "hal__stm32__dma_8h.html#a99f2edb78afaf70f082854b29ae50666", null ],
      [ "dmamode", "hal__stm32__dma_8h.html#aace10133f4ec76560e392cf77bccc9b6", null ],
      [ "dmastream", "hal__stm32__dma_8h.html#accbfcb0c8446563460ac414050ce6d55", null ],
      [ "mem0p", "hal__stm32__dma_8h.html#a7dc5ac969f764c9b0178d51e2c93c50b", null ],
      [ "size", "hal__stm32__dma_8h.html#a1fa9f6f14bd74a1cefc57a37d3ad2f4d", null ],
      [ "state", "hal__stm32__dma_8h.html#accc7379a4c08699bbcfe7320ca241064", null ]
    ] ],
    [ "_dma_reset_i", "hal__stm32__dma_8h.html#a2c78738b2e4c669ca336468263b36ea7", null ],
    [ "_dma_reset_s", "hal__stm32__dma_8h.html#a3560aac43b81c2486f2fc49bc21d7e8d", null ],
    [ "_dma_timeout_isr", "hal__stm32__dma_8h.html#a7800b180e982e73e2a3e8c23eb92a0ac", null ],
    [ "_dma_wakeup_isr", "hal__stm32__dma_8h.html#a34bc60ae59c531878b036c92181fdfc5", null ],
    [ "STM32_DMA_SUPPORTS_CSELR", "hal__stm32__dma_8h.html#a8f430e28139985cf70ecc9033e236474", null ],
    [ "STM32_DMA_USE_MUTUAL_EXCLUSION", "hal__stm32__dma_8h.html#adab05ea9473647d746e27e5846c0109f", null ],
    [ "STM32_DMA_USE_WAIT", "hal__stm32__dma_8h.html#a951186f351c4c543b5b79dec5a64559f", null ],
    [ "dmacallback_t", "hal__stm32__dma_8h.html#a4f600faf9e80543de2b70846c1b0ac20", null ],
    [ "DMADriver", "hal__stm32__dma_8h.html#a4f340e0c4539dbb5edca715d0f3ea1ed", null ],
    [ "dmaerrorcallback_t", "hal__stm32__dma_8h.html#a14d513f93c406203a86e1f93096f7edd", null ],
    [ "dmadirection_t", "hal__stm32__dma_8h.html#a1ea0c1960f4d9371456c693a92d3a9b6", [
      [ "DMA_DIR_P2M", "hal__stm32__dma_8h.html#a1ea0c1960f4d9371456c693a92d3a9b6aa16d0f454a3af72ebe5d131aaf368ec4", null ],
      [ "DMA_DIR_M2P", "hal__stm32__dma_8h.html#a1ea0c1960f4d9371456c693a92d3a9b6a792692a483b45e2f7e09f04527e41bb8", null ],
      [ "DMA_DIR_M2M", "hal__stm32__dma_8h.html#a1ea0c1960f4d9371456c693a92d3a9b6a84ff9d8741933b7f222e271c1c8393c7", null ]
    ] ],
    [ "dmaerrormask_t", "hal__stm32__dma_8h.html#a7d33ade9b0f16e0567045516507eb47b", [
      [ "DMA_ERR_TRANSFER_ERROR", "hal__stm32__dma_8h.html#a7d33ade9b0f16e0567045516507eb47ba6a6501443497cd46337033b71ca1b1ec", null ],
      [ "DMA_ERR_DIRECTMODE_ERROR", "hal__stm32__dma_8h.html#a7d33ade9b0f16e0567045516507eb47ba86839092843c581c0d517865cf2f6d19", null ],
      [ "DMA_ERR_FIFO_ERROR", "hal__stm32__dma_8h.html#a7d33ade9b0f16e0567045516507eb47bab0d1afae9df022cd6b5a1ea5a0186d65", null ],
      [ "DMA_ERR_FIFO_FULL", "hal__stm32__dma_8h.html#a7d33ade9b0f16e0567045516507eb47ba3e09d80941009c22b15fc0e7174e7cb0", null ],
      [ "DMA_ERR_FIFO_EMPTY", "hal__stm32__dma_8h.html#a7d33ade9b0f16e0567045516507eb47ba147793830adf14c3870a64099ce950b6", null ]
    ] ],
    [ "dmastate_t", "hal__stm32__dma_8h.html#aafa629edee3e18077e1f9fe62ccd170e", [
      [ "DMA_UNINIT", "hal__stm32__dma_8h.html#aafa629edee3e18077e1f9fe62ccd170eab564041dcfafe8d80d9fc571d9b1d436", null ],
      [ "DMA_STOP", "hal__stm32__dma_8h.html#aafa629edee3e18077e1f9fe62ccd170ea0361aca9c7e29d7ac9c9966d7eb54610", null ],
      [ "DMA_READY", "hal__stm32__dma_8h.html#aafa629edee3e18077e1f9fe62ccd170ea99ea563ca274f4ce25a8978753995e53", null ],
      [ "DMA_ACTIVE", "hal__stm32__dma_8h.html#aafa629edee3e18077e1f9fe62ccd170ea4e7927d60ccb2b24b38a077b6f58217c", null ],
      [ "DMA_COMPLETE", "hal__stm32__dma_8h.html#aafa629edee3e18077e1f9fe62ccd170eae6e79fc4e02584bc3d353ac9c9c6e864", null ],
      [ "DMA_ERROR", "hal__stm32__dma_8h.html#aafa629edee3e18077e1f9fe62ccd170ea84120fbc33c1119fb0eedb999cf7b44d", null ]
    ] ],
    [ "_dma_isr_error_code", "hal__stm32__dma_8h.html#a754932a38627dd6a86ecc88253dc6687", null ],
    [ "_dma_isr_full_code", "hal__stm32__dma_8h.html#aa5d22761474681d44a4d69141336a04c", null ],
    [ "_dma_isr_half_code", "hal__stm32__dma_8h.html#ac9cf607ddf63798249b67ed248411b12", null ],
    [ "dma_lld_start", "hal__stm32__dma_8h.html#a991ade7a6254eabbe74489fa7c8f366a", null ],
    [ "dma_lld_start_transfert", "hal__stm32__dma_8h.html#aca730123d24b378683330626bd0f7603", null ],
    [ "dma_lld_stop", "hal__stm32__dma_8h.html#a704b8cd98d0823960e5e3048ee5dfbba", null ],
    [ "dma_lld_stop_transfert", "hal__stm32__dma_8h.html#ab2d180e5adb10579b0b032987f338d33", null ],
    [ "dmaAcquireBus", "hal__stm32__dma_8h.html#aa559dd826c4b296b5f01f6e2dd2fb730", null ],
    [ "dmaGetState", "hal__stm32__dma_8h.html#a5013a1cd3b6c9bdcd2a1fac85ac4f06c", null ],
    [ "dmaObjectInit", "hal__stm32__dma_8h.html#a0eeaca4a9d0494d44986bc443aa6c80c", null ],
    [ "dmaReleaseBus", "hal__stm32__dma_8h.html#aa6857c2342fc30ddd643f028d25b908c", null ],
    [ "dmaStart", "hal__stm32__dma_8h.html#ad255236c42982a3368342bbfeee0c783", null ],
    [ "dmaStartTransfert", "hal__stm32__dma_8h.html#a2841bb25b0b954e8896a6b36174b3c30", null ],
    [ "dmaStartTransfertI", "hal__stm32__dma_8h.html#a572bb7d0ec656fb7a86d18f319b43db8", null ],
    [ "dmaStop", "hal__stm32__dma_8h.html#a3cdd7c21084a213e24ed4d59f15bedfb", null ],
    [ "dmaStopTransfert", "hal__stm32__dma_8h.html#a9219d807ef245446ffc9a430d742d976", null ],
    [ "dmaStopTransfertI", "hal__stm32__dma_8h.html#ac2bef3d2e495afefdd5fb7585e9ebf81", null ],
    [ "dmaTransfert", "hal__stm32__dma_8h.html#a9e853b87da409e18f88e33c6d4def0f9", null ],
    [ "dmaTransfertTimeout", "hal__stm32__dma_8h.html#a3de6f4d870466df970d6c01201b6fdd7", null ]
];