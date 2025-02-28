import React, { useState } from "react";

interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ label, type, value, onChange }: InputFieldProps) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="relative w-full">
            <div className="relative">
                <input
                    type={type === "password" && !isVisible ? "password" : "text"}
                    value={value}
                    onChange={onChange}
                    className="w-full p-2 border rounded"
                    placeholder={label}
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setIsVisible(!isVisible)}
                        className="absolute right-3 top-2 text-gray-600 bg-transparent border-none hover:bg-transparent"
                    >
                        {isVisible ? "👁️" : "🙈"}
                    </button>
                )}
            </div>
        </div>
    );
}
