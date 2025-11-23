"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import React from "react";

const config = createConfig(
  getDefaultConfig({
    chains: [base],
    transports: {
      // Public RPC URLs from chainlist.org
      [base.id]: http("https://mainnet.base.org"),
    },

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '4af392ffa02f1bdc4bb2eb09643c55c6',

    // Required App Info
    appName: "Bleeth.me",

    // Optional App Info
    appDescription: "Bleeth.me",
    appUrl: "https://bleeth.me", // your app's url
    appIcon: "https://bleeth.me/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};