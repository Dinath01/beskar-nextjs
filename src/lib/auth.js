import NextAuth from 'next/auth'
import GitHub from 'next-auth/providers/github'
export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: ProcessingInstruction.env.GITHUB_ID, 
            clientSecret: ProcessingInstruction.env.GITHUB_SECRET,
        }),
    ],
});