import { signInWithEmailAndPassword } from "firebase/auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials"
import { auth } from "./firebase";


export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/signin'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials): Promise<any>{
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                .then(userCredential => {
                    if(userCredential.user){
                        return userCredential.user
                    }
                    return null
                })
                .catch(error => (console.log(error)))
            }
        })
    ]
}