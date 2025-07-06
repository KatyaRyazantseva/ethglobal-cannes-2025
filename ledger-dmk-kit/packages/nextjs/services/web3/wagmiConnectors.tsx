import { Wallet, connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { rainbowkitBurnerWallet } from "burner-connector";
import * as chains from "viem/chains";
import scaffoldConfig from "~~/scaffold.config";

const { onlyLocalBurnerWallet, targetNetworks } = scaffoldConfig;

/**
 * Create a custom wallet connector for Ledger
 */
const dmkLedgerWallet = (): Wallet => ({
  id: "dmkledger", // a unique id. We use 'ledger' to keep it consistent.
  name: "DMKLedger", // The name of the wallet
  iconUrl: "https://www.ledger.com/wp-content/uploads/2021/11/Ledger_logo_white_text_black_background-1-1024x258.png", // You can use a local or remote image
  iconBackground: "#000",
  createConnector: () => {
    const connector = new CustomLedgerDMKConnector({
      chains,
      options: {
        // You can pass options to the LedgerConnector here.
        // For example, if you want to use a specific derivation path:
        derivationPath: "m/44'/60'/0'/0",
      },
    });
    return {
      connector,
    };
  },
});

const wallets = [
  metaMaskWallet,
  walletConnectWallet,
  ledgerWallet,
  coinbaseWallet,
  rainbowWallet,
  safeWallet,
  ...(!targetNetworks.some(network => network.id !== (chains.hardhat as chains.Chain).id) || !onlyLocalBurnerWallet
    ? [rainbowkitBurnerWallet]
    : []),
];

/**
 * wagmi connectors for the wagmi context
 */
export const wagmiConnectors = connectorsForWallets(
  [
    {
      groupName: "Supported Wallets",
      wallets,
    },
    {
      groupName: "Custom Wallets",
      wallets: [dmkLedgerWallet],
    },
  ],

  {
    appName: "scaffold-eth-2",
    projectId: scaffoldConfig.walletConnectProjectId,
  },
);
