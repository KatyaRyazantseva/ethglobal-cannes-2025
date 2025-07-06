# 🌈 Ledger DMK Integration with RainbowKit

This project demonstrates a cutting-edge integration of the Ledger Device Management Kit (DMK) into a Next.js application using `wagmi` and `RainbowKit`.  LedgerJS Transport libraries will soon be deprecated. For any new project, it is recommended to use the new Device Management Kit. The main goal is to move beyond standard `wagmi` Ledger connectors and implement a truly custom wallet connection that leverages DMK's low-level device interaction capabilities for enhanced control and future extensibility.

## ✨ Project Description

In the evolving landscape of Web3, seamless and secure wallet integration is paramount. While RainbowKit and wagmi offer excellent out-of-the-box solutions, deep hardware wallet integration often requires custom implementations. This hackathon project tackles this challenge by building a custom Ledger wallet connector that directly interacts with Ledger devices via WebHID, orchestrated by the powerful Ledger Device Management Kit.

This project serves as a proof-of-concept for advanced hardware wallet control within a dApp, laying the groundwork for features like:

* Real-time device status monitoring (locked, busy, app open).

* Seamless integration with the app.

* More granular control over the connection flow.

## 🚀 Features

* **Custom Ledger Wallet Connector:** A DMK integration handles direct WebHID communication with Ledger devices.

* **Ledger Device Management Kit (DMK) Integration:** Utilizes DMK for:

  * Device discovery (`dmk.startDiscovering()`).

  * Establishing device sessions (`dmk.connect()`).

  * Sending basic commands (e.g., `OpenAppCommand` for Ethereum).

* **RainbowKit UI Integration:** Seamlessly integrates the custom Ledger wallet into RainbowKit's beautiful and user-friendly wallet connection modal.

* **Next.js & pnpm:** Built on a modern Next.js stack with `pnpm` for efficient dependency management.

* **Custom Connect Button:** Demonstrates how to create a custom `RainbowKit` connect button for tailored UI/UX.
