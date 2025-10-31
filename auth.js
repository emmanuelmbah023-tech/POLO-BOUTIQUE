
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import TikTok from "next-auth/providers/tiktok"
 
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google,TikTok ({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
    clientId: process.env.AUTH_TIKTOK_ID,
    clientSecret: process.env.AUTH_TIKTOK_SECRET,
  })

  ],
})