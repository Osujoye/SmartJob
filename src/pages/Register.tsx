import { BriefcaseBusiness } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState<"candidate" | "recruiter">(
    "candidate"
  );

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (role === "candidate") {
      navigate("/candidate/dashboard");
    } else {
      navigate("/recruiter/dashboard");
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-slate-50 px-6 py-12">

      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-12">

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2"
          >
            <div className="rounded-xl bg-blue-600 p-2 text-white">
              <BriefcaseBusiness size={22} />
            </div>

            <span className="text-xl font-bold">
              Smart<span className="text-blue-600">Jobs</span>
            </span>
          </Link>

          <h1 className="mt-8 text-3xl font-black">
            Create your account
          </h1>

          <p className="mt-2 text-slate-500">
            Join TalentMatch and discover smarter opportunities.
          </p>
        </div>

        {/* Role selector */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setRole("candidate")}
            className={`rounded-xl border p-4 text-left transition ${
              role === "candidate"
                ? "border-blue-600 bg-blue-50"
                : "border-slate-200"
            }`}
          >
            <p className="font-bold">
              I'm looking for a job
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Find opportunities
            </p>
          </button>

          <button
            type="button"
            onClick={() => setRole("recruiter")}
            className={`rounded-xl border p-4 text-left transition ${
              role === "recruiter"
                ? "border-blue-600 bg-blue-50"
                : "border-slate-200"
            }`}
          >
            <p className="font-bold">
              I'm hiring
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Find talented people
            </p>
          </button>
        </div>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold">
                First name
              </label>

              <input
                required
                placeholder="Joe"
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Last name
              </label>

              <input
                required
                placeholder="Chris"
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email address
            </label>

            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          {role === "recruiter" && (
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Company name
              </label>

              <input
                required
                placeholder="Your company"
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Password
            </label>

            <input
              type="password"
              required
              minLength={8}
              placeholder="At least 8 characters"
              className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <label className="flex gap-3 text-sm text-slate-500">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4"
            />

            <span>
              I agree to the{" "}
              <button
                type="button"
                className="font-semibold text-blue-600"
              >
                Terms of Service
              </button>{" "}
              and Privacy Policy.
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3.5 font-bold text-white hover:bg-blue-700"
          >
            Create account
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-blue-600"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}