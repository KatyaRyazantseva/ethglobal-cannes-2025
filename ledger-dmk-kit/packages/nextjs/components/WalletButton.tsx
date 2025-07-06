import React, { useEffect } from "react";
import { useDmk } from "~~/providers/DeviceManagementKitProvider";
import { type DiscoveredDevice } from "@ledgerhq/device-management-kit";
import { useDeviceSessionsContext } from "~~/providers/DeviceSessionsProvider";
import { useIsFocused, useNavigation } from "@react-navigation/native";

export const WalletButton = () => {
  const dmk = useDmk();
  const [devices, setDevices] = React.useState<DiscoveredDevice[]>([]);
  const [isScanningDevices, setIsScanningDevices] = React.useState(false);
  const {
    state: { selectedId: deviceSessionId },
    dispatch,
  } = useDeviceSessionsContext();
  const { navigate } = useNavigation();

  const isFocused = useIsFocused();

  useEffect(() => {
    setDevices([]);
  }, [deviceSessionId]);

  useEffect(() => {
    if (isScanningDevices && isFocused) {
      const subscription = dmk.listenToAvailableDevices({}).subscribe({
        next: dvcs => {
          setDevices(dvcs);
        },
        error: err => {
          console.log("[dmk.listenToAvailableDevices] error", err);
        },
      });

      return () => {
        subscription.unsubscribe();
        setDevices([]);
      };
    } else {
      dmk.stopDiscovering();
      setDevices([]);
      return () => {};
    }
  }, [dmk, isScanningDevices, isFocused]);

  const startScanning = () => {
    setIsScanningDevices(true);
  };

  const stopScanning = () => {
    setIsScanningDevices(false);
  };

  const onConnect = async (device: DiscoveredDevice) => {
    setIsScanningDevices(false);
    try {
      await dmk.connect({ device });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    () => {
      const blockExplorerAddressLink = "";
        const handleLedgerConnect = () => {
          const ledgerConnector = "dmkledger";
          dmk.connect({ connector: ledgerConnector });
        
                return (
                  <>
                    {(() => {
                      if (!deviceSessionId) {
                        return (
                          <button className="btn btn-primary btn-sm" onClick={handleLedgerConnect} type="button">
                            Connect Ledger
                          </button>
                        );
                      }
        
                      if (chain.unsupported || chain.id !== targetNetwork.id) {
                        return <WrongNetworkDropdown />;
                      }
        
                      return (
                        <>
                          <div className="flex flex-col items-center mr-1">
                            <Balance address={account.address as Address} className="min-h-0 h-auto" />
                            <span className="text-xs" style={{ color: networkColor }}>
                              {chain.name}
                            </span>
                          </div>
                          <AddressInfoDropdown
                            address={account.address as Address}
                            displayName={account.displayName}
                            ensAvatar={account.ensAvatar}
                            blockExplorerAddressLink={blockExplorerAddressLink}
                          />
                          <AddressQRCodeModal address={account.address as Address} modalId="qrcode-modal" />
                        </>
                      );
                    })()}
                  </>
                );
              }}
    );
};