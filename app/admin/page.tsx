// import JobTableComp from "@/components/JobTableComp";
// import { useSession } from "next-auth/react";

export default function Page() {
  // const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return <p>Loading...</p>; // Optional: Display a loading state while the session is being fetched
  // }

  // if (session?.user?.role === "admin") {
  //   return <p>You are an admin, welcome!</p>;
  // }

  return <div>You are not authorized to view this page!
    {/* <JobTableComp/> */}
  </div>;
}
