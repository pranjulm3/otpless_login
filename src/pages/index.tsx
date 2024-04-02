// pages/login.tsx
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

const Login: React.FC = () => {
  const router = useRouter();
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://otpless.com/v2/auth.js";
    script.type = "text/javascript";
    script.async = true;
    script.dataset.appid = "4YCBNCHPKPCZDQUL8XGT";
    script.id = "otpless-sdk";
    scriptRef.current = script;

    document.body.appendChild(script);

    const handleOtpless = (otplessUser: any) => {
      try {
        if (otplessUser) {
          router.push({
            pathname: "/user",
            query: { name: otplessUser.identities[0].name || "Guest" },
          });
        }
      } catch (error) {
        console.error("Error in otpless callback:", error);
      }
    };

    (window as any).otpless = handleOtpless;

    return () => {
      // Cleanup function to remove the script when component unmounts
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, [router]);

  return (
    <div className="grid grid-cols-12">
      <Header />
      <div className="col-span-4 col-start-5 ">
        <div className="py-5"></div>
        <h1 className="text-3xl text-center">Login Here</h1>
        <div id="otpless-login-page"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
