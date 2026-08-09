import {
  Bell,
  Bookmark,
  CalendarDays,
  CheckCircle2,
  FileText,
  UserRound,
} from "lucide-react";

import JobCard from "../component/JobCard";
import StatCard from "../component/StatCard";
import StatusBadge from "../component/StatusBadge";

import { jobs } from "../data/Jobs";

export default function CandidateDashboard() {
  const recommendedJobs = jobs.slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            CANDIDATE DASHBOARD
          </p>

          <h1 className="mt-1 text-3xl font-black">
            Welcome back, Tobi 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Here's what's happening with your job search.
          </p>
        </div>

        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white">
          <Bell size={19} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>
      </div>

      {/* Profile completion */}
      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="font-bold text-slate-900">
              Complete your profile
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              A complete profile improves your job matching results.
            </p>
          </div>

          <div className="w-full md:w-72">
            <div className="mb-2 flex justify-between text-sm">
              <span>Profile completion</span>
              <span className="font-bold">85%</span>
            </div>

            <div className="h-2 rounded-full bg-blue-100">
              <div className="h-2 w-[85%] rounded-full bg-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Applications"
          value="12"
          description="Total applications"
          icon={<FileText size={21} />}
        />

        <StatCard
          title="Interviews"
          value="3"
          description="Upcoming interviews"
          icon={<CalendarDays size={21} />}
          color="bg-purple-50 text-purple-600"
        />

        <StatCard
          title="Saved Jobs"
          value="8"
          description="Jobs saved"
          icon={<Bookmark size={21} />}
          color="bg-amber-50 text-amber-600"
        />

        <StatCard
          title="Avg. Match"
          value="87%"
          description="Your average match"
          icon={<CheckCircle2 size={21} />}
          color="bg-emerald-50 text-emerald-600"
        />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_350px]">
        {/* Applications */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">
              Recent applications
            </h2>

            <button className="text-sm font-semibold text-blue-600">
              View all
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-slate-100 text-sm text-slate-500">
                  <th className="pb-4">Position</th>
                  <th className="pb-4">Company</th>
                  <th className="pb-4">Match</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Frontend Developer", "TechNova", "94%", "Interview"],
                  ["Cybersecurity Analyst", "SecureNet Africa", "89%", "Screening"],
                  ["Cloud Security Engineer", "CloudShield", "91%", "Applied"],
                  ["Backend Developer", "CloudWorks", "82%", "Rejected"],
                ].map((application) => (
                  <tr
                    key={application[0]}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="py-5 font-semibold">
                      {application[0]}
                    </td>

                    <td className="py-5 text-sm text-slate-500">
                      {application[1]}
                    </td>

                    <td className="py-5 font-bold text-blue-600">
                      {application[2]}
                    </td>

                    <td className="py-5">
                      <StatusBadge status={application[3]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Profile */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <UserRound size={25} />
            </div>

            <div>
              <h2 className="font-bold">
                Tobi
              </h2>

              <p className="text-sm text-slate-500">
                Frontend Developer
              </p>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-sm font-semibold">
              Skills
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Git",
                "HTML",
                "CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <button className="mt-7 w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold hover:bg-slate-50">
            Edit Profile
          </button>
        </section>
      </div>

      {/* Recommended jobs */}
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">
              Recommended for you
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Based on your skills and profile.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {recommendedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </main>
  );
}