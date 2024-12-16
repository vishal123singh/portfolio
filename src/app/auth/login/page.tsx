import Image from "next/image";

export default function LoginScreen() {
  return (
    <div className="p-4 flex flex-1 flex-col md:flex-row gap-2 border border-gray-600 m-4">
      {/* Form Section */}
      <div className="p-4 flex flex-1 flex-col rounded-lg border border-gray-600 self-center md:w-1/4">
        <div className="text-gray-800">
          <p>Sign in to your account</p>
        </div>
        <label htmlFor="username" className="mt-4 text-gray-600">
          Username
        </label>
        <input
          id="username"
          name="username"
          className="custom-input mb-4 rounded-sm border p-1"
          type="text"
          placeholder="Enter your username"
        />
        <label htmlFor="password" className="mt-4 text-gray-600">
          Password
        </label>
        <input
          id="password"
          name="password"
          className="custom-input mb-4 rounded-sm border p-1"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit" className="custom-button rounded-lg mt-4 mb-2">
          Sign in
        </button>

        <div className="flex flex-1 flex-row justify-between items-center text-gray-600 m-2 p-2">
          {/* Remember Me Section */}
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" id="rememberMe" />
            <label htmlFor="rememberMe" className="text-sm">
              Remember me
            </label>
          </div>

          {/* Forgot Password Section */}
          <div>
            <a
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-row justify-between items-center text-gray-600 m-2 p-2">
          {/*Login with Google Section */}
          <div className="flex items-center">
            <Image
              aria-hidden="true"
              src="/images/google.png"
              alt=""
              width={15}
              height={15}
              className="object-cover w-full h-auto"
            />
            <p style={{ fontSize: "8px" }}>Login with Google</p>
          </div>

          {/*login with Github Section */}
          <div>
            <Image
              aria-hidden="true"
              src="/images/github.png"
              alt=""
              width={15}
              height={15}
              className="object-cover w-full h-auto"
            />
            <p style={{ fontSize: "8px" }}>Login with Github</p>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="pl-20 pr-20 flex flex-1 border border-gray-600">
        <Image
          aria-hidden="true"
          src="/images/login_side_pic.jpg"
          alt=""
          width={500}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
}
