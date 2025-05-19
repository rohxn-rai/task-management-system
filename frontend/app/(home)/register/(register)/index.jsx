import SignupComponent from "@/components/home/Signup";

const RegisterPage = () => {
  return (
    <div className="conatiner m-auto flex flex-row p-3 items-center max-w-lg min-w-80 w-[calc(100vw-20px)] md:w-lg">
      <div className="flex justify-center border p-4 rounded-md shadow-xs w-full">
        <SignupComponent />
      </div>
    </div>
  );
};

export default RegisterPage;
