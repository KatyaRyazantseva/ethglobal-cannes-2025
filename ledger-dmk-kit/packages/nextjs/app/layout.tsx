import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import { DmkProvider } from "~~/providers/DeviceManagementKitProvider";
import { DeviceSessionsProvider } from "~~/providers/DeviceSessionsProvider";
import { DmkConfigProvider } from "~~/providers/DmkConfig";
import { SignerEthProvider } from "~~/providers/SignerEthProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({ title: "Scaffold-ETH 2 App", description: "Built with 🏗 Scaffold-ETH 2" });

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <DmkConfigProvider>
          <DmkProvider>
            <DeviceSessionsProvider>
              <SignerEthProvider>
                <ThemeProvider enableSystem>
                  <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
                </ThemeProvider>
              </SignerEthProvider>
            </DeviceSessionsProvider>
          </DmkProvider>
        </DmkConfigProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
