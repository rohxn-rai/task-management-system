"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa6";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupComponent = () => {
  const [signup, setSignup] = useState(initialState);
  const [canSignup, setCanSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const isLoading = true;

  const handleChange = (e) => {
    setSignup((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const isNameValid =
      /^[a-zA-Z ]*$/.test(signup.name) && signup.name.trim() !== "";
    const isEmailValid = /\S+@\S+\.\S+/.test(signup.email);
    const isPasswordValid = signup.password.length > 7;
    const isConfirmPassword = signup.password === signup.confirmPassword;
    setCanSignup(
      isEmailValid && isPasswordValid && isConfirmPassword && isNameValid
    );
  }, [signup]);

  return (
    <>
      <div className="flex flex-col gap-3">
        <form className="flex flex-col text-center gap-4">
          <h1 className="text-2xl font-bold mb-2">Signup</h1>
          <div className="flex flex-col peer text-left gap-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-1">
              Name
            </label>
            <Input
              name="name"
              value={signup.name}
              onChange={handleChange}
              className="min-w-[260px] sm:w-[450px]"
              placeholder="Enter your Name..."
            />
          </div>
          <div className="flex flex-col peer text-left gap-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-1">
              Email
            </label>
            <Input
              name="email"
              value={signup.email}
              onChange={handleChange}
              className="min-w-[260px] sm:w-[450px]"
              placeholder="Enter your Email..."
            />
          </div>
          <div className="flex flex-col peer text-left gap-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-1">
              Password
            </label>
            <div className="relative inline">
              <Input
                name="password"
                value={signup.password}
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                className="min-w-[260px] sm:w-[450px]"
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
          <div className="flex flex-col peer text-left gap-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-1">
              Confirm Password
            </label>
            <div className="relative inline">
              <Input
                name="confirmPassword"
                value={signup.confirmPassword}
                type={showConfirmPassword ? "text" : "password"}
                onChange={handleChange}
                className="min-w-[260px] sm:w-[450px]"
                placeholder="Confirm your Password..."
              />
              <Button
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-1 my-auto"
                variant="blank"
                size="icon"
                type="button"
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </div>
          </div>
          <Button
            className="w-full"
            variant="default"
            size="sm"
            disabled={isLoading || !canSignup}
          >
            <Link href="/dashboard" className="flex flex-row gap-2">
              {isLoading ? (
                <>
                  <FaSpinner className="w-3 h-3 mt-0.5 text-background animate-spin" />
                  <span>Loading ...</span>
                </>
              ) : (
                "Signup"
              )}
            </Link>
          </Button>
        </form>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline underline-offset-4">
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignupComponent;
