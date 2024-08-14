import { signOut } from "next-auth/react";
import { signIn } from "./auth";

export const sayHello = async () => {
    "use server";
    console.log("hello");
}

export const handleGithubLogin = async () => {
    "user server";
    await signIn("github");
  }

export const handleLogOut = async () => {
    "user server";
    await signOut();
  }