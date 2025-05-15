import SignupComponent from "@/components/home/Signup";

const RegisterPage = () => {
  return (
    <div className="flex justify-center px-5 pt-8 pb-12 min-h-[calc(100vh-182px)] sm:min-h-[calc(100vh-166px)] items-center">
      <div className="flex justify-center border p-4 rounded-lg shadow-xs">
        <SignupComponent />
      </div>
    </div>
  );
};

export default RegisterPage;
