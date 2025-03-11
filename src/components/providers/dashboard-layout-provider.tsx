'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import React from 'react';

import { AppSidebar } from '../nav/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';

const queryClient = new QueryClient();
const DashBoardLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          <div className="flex w-full">
            <AppSidebar />
            <SidebarTrigger />
            <LayoutWrapper>{children}</LayoutWrapper>
          </div>
        </SidebarProvider>
      </QueryClientProvider>
    </>
  );
};

export default DashBoardLayoutProvider;

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <motion.div
        className="flex-1"
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            y: 50,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
          },
          pageExit: {
            opacity: 0,
            y: -50,
          },
        }}
        transition={{
          type: 'tween',
          ease: 'easeInOut',
          duration: 0.5,
        }}
      >
        <main>{children}</main>
      </motion.div>
    </>
  );
};
