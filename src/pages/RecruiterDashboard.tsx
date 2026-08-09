import {
  BriefcaseBusiness,
  CalendarDays,
  Plus,
  Search,
  Users,
  UserCheck,
} from "lucide-react";

import StatCard from "../component/StatCard";
import StatusBadge from "../component/StatusBadge";

const applicants = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    match: 96,
    status: "Shortlisted",
  },
  {
    name: "Sarah Smith",
    role: "Frontend Developer",
    match: 91,
    status: "Interview",
  },
  {
    name: "Michael James",
    role: "Frontend Developer",
    match: 84,
    status: "Reviewing",
  },
  {
    name: "David Williams",
    role: "Frontend Developer",
    match: 72,
    status: "Reviewing",
  },
  {
    name: "Grace Johnson",
    role: "Frontend Developer",
    match: 89,
    status: "Shortlisted",
  },
];

export default function RecruiterDashboard() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            RECRUITER DASHBOARD
          </p>

          <h1 className="mt-1 text-3xl font-black">
            Good afternoon, Hiring Team
          </h1>

          <p className="mt-2 text-slate-500">
            Find and manage your best candidates.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700">
          <Plus size={18} />
          Post a Job
        </button>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Jobs"
          value="8"
          description="Currently hiring"
          icon={<BriefcaseBusiness size={21} />}
        />

        <StatCard
          title="Applicants"
          value="248"
          description="Total candidates"
          icon={<Users size={21} />}
          color="bg-purple-50 text-purple-600"
        />

        <StatCard
          title="Shortlisted"
          value="42"
          description="Potential matches"
          icon={<UserCheck size={21} />}
          color="bg-emerald-50 text-emerald-600"
        />

        <StatCard
          title="Interviews"
          value="15"
          description="This month"
          icon={<CalendarDays size={21} />}
          color="bg-amber-50 text-amber-600"
        />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_330px]">
        {/* Applicant table */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold">
                Top candidates
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Ranked by job compatibility.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3">
              <Search
                size={17}
                className="text-slate-400"
              />

              <input
                placeholder="Search candidates..."
                className="w-full py-2.5 text-sm outline-none"
              />
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead>
                <tr className="border-b border-slate-100 text-sm text-slate-500">
                  <th className="pb-4">Candidate</th>
                  <th className="pb-4">Position</th>
                  <th className="pb-4">Match</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {applicants.map((applicant) => (
                  <tr
                    key={applicant.name}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-600">
                          {applicant.name.charAt(0)}
                        </div>

                        <span className="font-semibold">
                          {applicant.name}
                        </span>
                      </div>
                    </td>

                    <td className="py-5 text-sm text-slate-500">
                      {applicant.role}
                    </td>

                    <td className="py-5">
                      <span
                        className={`font-bold ${
                          applicant.match >= 90
                            ? "text-emerald-600"
                            : applicant.match >= 80
                            ? "text-blue-600"
                            : "text-orange-600"
                        }`}
                      >
                        {applicant.match}%
                      </span>
                    </td>

                    <td className="py-5">
                      <StatusBadge
                        status={applicant.status}
                      />
                    </td>

                    <td className="py-5">
                      <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Active jobs */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">
              Active jobs
            </h2>

            <button className="text-sm font-semibold text-blue-600">
              View all
            </button>
          </div>

          <div className="mt-6 space-y-5">
            {[
              ["Frontend Developer", "84 applicants"],
              ["Cybersecurity Analyst", "61 applicants"],
              ["Backend Developer", "43 applicants"],
              ["Cloud Engineer", "32 applicants"],
            ].map(([title, applicants]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-100 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                    <BriefcaseBusiness size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold">
                      {title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {applicants}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold hover:bg-slate-50">
            Manage Jobs
          </button>
        </section>
      </div>
    </main>
  );
}