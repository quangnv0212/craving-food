'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { AppSidebar } from '../nav/app-sidebar';

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
          <AppSidebar />
          <SidebarTrigger />
          <div className={cn('layout-padding page-min-height px-6 pt-6')}>
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
