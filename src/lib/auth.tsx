import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ComponentType, FunctionComponent } from "react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { NextPageContext, NextPage } from "next";

// Higher order component
function withAuth<T extends {}>(Component: ComponentType<T>) {
  return async function wrapped(props: T) {
    const session = await getServerSession(options);
    if (!session) {
      return redirect("/api/auth/signin?callbackUrl=/");
    }

    return <Component {...props} />;
  };
}

export default withAuth;
