"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa6";

const initialStateLogin = {
  email: "",
  password: "",
};

const LoginComponoent = () => {
  const [login, setLogin] = useState(initialStateLogin);
  const [canLogin, setCanLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = true;

  const handleChange = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const isEmailValid = /\S+@\S+\.\S+/.test(login.email);
    const isPasswordValid = login.password.length > 7;
    setCanLogin(isEmailValid && isPasswordValid);
  }, [login]);

  return (
    <>
      <div className="flex flex-col gap-3 w-full">
        <form className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-center mb-2">Log in</h1>
          <div className="flex flex-col peer gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-1"
            >
              Email
            </label>
            <Input
              name="email"
              id="email"
              value={login.email}
              type="email"
              onChange={handleChange}
              className="w-full"
              placeholder="Enter your Email..."
            />
          </div>
          <div className="flex flex-col peer gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-1"
            >
              Password
            </label>
            <div className="relative inline">
              <Input
                name="password"
                id="password"
                value={login.password}
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                className="w-full"
                placeholder="Enter your Password..."
              />
              <Button
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-1 my-auto"
                variant="blank"
                size="icon"
                type="button"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </div>
          </div>
          <Button
            className="w-full"
            variant="default"
            size="sm"
            disabled={isLoading || !canLogin}
          >
            <Link href="/dashboard" className="flex flex-row gap-2">
              {isLoading ? (
                <>
                  <FaSpinner className="w-3 h-3 mt-0.5 text-background animate-spin" />
                  <span>Loading ...</span>
                </>
              ) : (
                "Login"
              )}
            </Link>
          </Button>
        </form>
        <div className="text-center text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginComponoent;
