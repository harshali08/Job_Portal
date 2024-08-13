"use client";

import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import JobCategory from "@/components/JobCategory";
import MainPage from "@/components/MainPage";
import Navbar from "@/components/Navbar";
import { Home } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

const Page = () => {
  return (
    <div>
      <Navbar />

      <MainPage />
      <JobCategory />
      <Companies />

      <Footer />
    </div>
  );
};

export default Page;
