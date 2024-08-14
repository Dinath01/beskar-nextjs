"use server";

import { signOut } from "next-auth/react";
import { signIn } from "./auth";

export const sayHello = async () => {
    
    console.log("hello");
}

export const handleGithubLogin = async () => {
    
    await signIn("github");
  }

export const handleLogOut = async () => {
   
    await signOut();
  }