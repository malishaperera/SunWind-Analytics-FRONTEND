// import { SignUp } from '@clerk/react-router'

import {SignUp} from "@clerk/clerk-react";

export default function SignUpPage() {
    return (
        <main className="flex justify-center items-center h-screen">
            <SignUp />
        </main>
    )
}