"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
      // Set the image source after hydration (client side only)
      setImageSrc("https://s3-alpha-sig.figma.com/img/fa04/8834/feb921cb079f2f3d87d11cff6a71497f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pm~NqHaSLkHi5efTFHAQ6JFOtXQmTv8VSqffnt9aI6cg8KkpVs~Y~NER~3vi9pLWfARI~843RdWhXSjC1JjC6ZO1tRjwAaV14ZXCAwUwD-zMPRDCzNIjFLvuXy8zTDSz06GSPd~BQBZ1kVInJ7KvbRi1-uxvP55LaotSmXiTVrVKvGSoYYiOHqQwnCRg0ZkLs4KOuxQuRKLulHcrwb4Uj5yss24l3Y1mcGegh8tLH6yw8dpgevfoHfM7~eWrltEYU6SLWoy2cClOFlJ9RnHLOHW9Ik1NbmquQLIAlvwmjusjR21wpbkZFPPK56PufA7v12v9pQfIiCkAPz5pSGIlcg__");
    }, []);
  
    if (!imageSrc) return null; // Avoid rendering until client-side data is ready

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all field");
            return;
        }
        setError(""); // Clear errors if form is valid
    };

    return (
        <div className="w-full max-w-md p-5 rounded-xl shadow-lg">
            <img
                src={imageSrc}
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
