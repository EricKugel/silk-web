import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
    const session = useSession();
    const router = useRouter();
    
    useEffect(() => {
        if (session?.status === "authenticated") {
            router.push("/");
        }
    });

    return <div onClick={() => signIn("google")}>Sign me in!</div>
}

export default Login;