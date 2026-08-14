import { Link, useNavigate } from "react-router-dom";
import { BriefcaseBusiness, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();

  const users = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  const loggedInUser = users.find(
    (user: { email: string; password: string }) =>
      user.email === email.toLowerCase().trim() &&
      user.password === password
  );

  if (!loggedInUser) {
    alert("Invalid email or password.");
    return;
  }

  // Save currently logged-in user
  localStorage.setItem(
    "user",
    JSON.stringify(loggedInUser)
  );

  // Send user to the correct dashboard
  if (loggedInUser.role === "candidate") {
    window.location.href = "/candidate/dashboard";
  } else {
    window.location.href = "/recruiter/dashboard";
  }
};

  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-slate-50 px-6 py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl md:grid-cols-2">

        {/* Left side */}
        <div className="hidden bg-slate-950 p-12 text-white md:block">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-xl bg-blue-600 p-2">
              <BriefcaseBusiness size={22} />
            </div>

            <span className="text-xl font-bold">
              Smart<span className="text-blue-600">Jobs</span>
            </span>
          </Link>

          <div className="mt-20">
            <h1 className="text-4xl font-black leading-tight">
              Welcome back to smarter recruitment.
            </h1>

            <p className="mt-6 leading-7 text-slate-400">
              Sign in to discover opportunities matched to your
              skills, experience and career goals.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">
              Your profile is currently
            </p>

            <p className="mt-2 text-3xl font-black">
              85% complete
            </p>

            <div className="mt-4 h-2 rounded-full bg-slate-800">
              <div className="h-2 w-[85%] rounded-full bg-blue-600" />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="p-8 md:p-12">
          <div className="mx-auto max-w-md">

            <div className="md:hidden">
              <Link
                to="/"
                className="flex items-center gap-2"
              >
                <div className="rounded-xl bg-blue-600 p-2 text-white">
                  <BriefcaseBusiness size={20} />
                </div>

                <span className="text-xl font-bold">
                  Talent<span className="text-blue-600">
                    Match
                  </span>
                </span>
              </Link>
            </div>

            <div className="mt-8 md:mt-0">
              <h2 className="text-3xl font-black text-slate-900">
                Sign in
              </h2>

              <p className="mt-2 text-slate-500">
                Welcome back. Please enter your details.
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              className="mt-8 space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm font-semibold text-blue-600"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 pr-12 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300"
                />

                Remember me
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3.5 font-bold text-white transition hover:bg-blue-700"
              >
                Sign in
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-sm text-slate-400">
                OR
              </span>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <button className="w-full rounded-xl border border-slate-200 py-3.5 font-semibold text-slate-700 hover:bg-slate-50">
              Continue with Google
            </button>

            <p className="mt-7 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-blue-600"
              >
                Create account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}