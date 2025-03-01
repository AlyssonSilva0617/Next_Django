"use client";

import { useState } from "react";
import Link from "next/link";
import InputField from "./InputField";
import Button from "./Button";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        setError(""); // Clear errors if form is valid
    };

    return (
        <div className="w-full max-w-md p-5 rounded-xl shadow-lg w-[500px]">
            <img
                src="https://s3-alpha-sig.figma.com/img/4cb9/853c/35adef68099d34b3c252f364ca101c2f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p0j8CST1Xa3Ucx0ITyr8gF4046b3thpO39IK~kSdTPUsEqNxRNIsKo0WIrwmwRQ13GDlowXou4ggbp2aA1ZlXBHqiEfejnJMpkMiV8Jc1P3C0Y9YrFNY6dfI6sBUwxTt13JUZN31XgGErXF0ZptecaP2kq2mYHVu6NWYPcugk~yINmRdVWq~SYhX2sDMZLfK8j1g9~x670z0d~WQMtJXystBMjv7lUSp1iPG~SYB~nM9e8s2j0Fm5n9zqLKswhIx4nCEzrXQKVc1geijEfccQDqT7mLPChxlVYBNevhbfEWcMv1n26nuFtxsEiDuRFt2Xe-NXvaOOZB7UFOTrJc7wg__"
                alt="Logo"
                className="w-[100px] mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-center text-gray-800">Yay, New Friend!</h2>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <InputField label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Link href="/pages/home"><Button text="Sign Up" type="submit" /></Link>
            </form>

            <p className="text-sm text-center text-gray-600 mt-4">
                <Link href="/pages/login" className="text-blue-500 hover:underline">We’re already friends!</Link>
            </p>
        </div>
    );
}
export default LoginForm