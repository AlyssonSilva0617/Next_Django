"use client";

import { useState } from "react";
import Link from "next/link";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function LoginForm() {
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
        <div className="w-full max-w-md p-5 rounded-xl shadow-lg">
            <img
                src="../images/img_group_1_1.png"
                alt="Logo"
                className="w-[80px] mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-center text-gray-800">Yay, You're Back!</h2>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <InputField label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Link href="/pages/home"><Button text="Login" type="submit" /></Link>
            </form>

            <p className="text-sm text-center text-gray-600 mt-4">
                <Link href="/pages/newfriend" className="text-blue-500 hover:underline">Oops! I’ve never been here before</Link>
            </p>
        </div>
    );
}
