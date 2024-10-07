import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/sonner";
import './globals.css'
import Navbar from '@/components/Navbar';
import {Example} from '@/components/CornerNav';
import Footer from '@/components/Footer';
import {
  ClerkProvider} from "@clerk/nextjs";
export const metadata: Metadata = {
  title: 'Green Grow Landscaping',
  description: 'Australian Landscaping Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      variables:{
        colorPrimary: '#1a202c',
      }
    }} >
      <html lang="en">
        <body>
          {/* <Navbar /> */}
          <Example />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
