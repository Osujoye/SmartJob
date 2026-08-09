import {
  ArrowLeft,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock3,
  MapPin,
  Wallet,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import Button from "../component/Button";
import MatchScore from "../component/MatchScore";
import { jobs } from "../data/Jobs";

export default function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-3xl font-bold">
          Job not found
        </h1>

        <Link
          to="/jobs"
          className="mt-6 inline-block text-blue-600"
        >
          Back to jobs
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Link
        to="/jobs"
        className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
      >
        <ArrowLeft size={16} />
        Back to jobs
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_350px]">
        <div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Building2 size={30} />
                </div>

                <div>
                  <h1 className="text-3xl font-black text-slate-900">
                    {job.title}
                  </h1>

                  <p className="mt-2 font-medium text-slate-500">
                    {job.company}
                  </p>
                </div>
              </div>

              <MatchScore score={job.match} />
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <MapPin size={17} />
                {job.location}
              </span>

              <span className="flex items-center gap-2">
                <Briefcase size={17} />
                {job.experience}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={17} />
                {job.type}
              </span>

              <span className="flex items-center gap-2">
                <Wallet size={17} />
                {job.salary}
              </span>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-bold">
              About the role
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              {job.description}
            </p>

            <h2 className="mt-10 text-2xl font-bold">
              Requirements
            </h2>

            <ul className="mt-5 space-y-4">
              {job.requirements.map((requirement) => (
                <li
                  key={requirement}
                  className="flex gap-3 text-slate-600"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-blue-600"
                    size={18}
                  />

                  {requirement}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold">
              Required skills
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside>
          <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold">
              Your compatibility
            </h2>

            <div className="mt-6 flex justify-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border-[12px] border-emerald-100">
                <div className="text-center">
                  <p className="text-3xl font-black text-emerald-600">
                    {job.match}%
                  </p>

                  <p className="text-xs text-slate-500">
                    Match
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {job.skills.slice(0, 4).map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm">
                    {skill}
                  </span>

                  <CheckCircle2
                    size={18}
                    className="text-emerald-500"
                  />
                </div>
              ))}
            </div>

            <Button className="mt-8 w-full">
              Apply for this job
            </Button>

            <button className="mt-3 w-full rounded-xl border border-slate-200 py-3 font-semibold">
              Save Job
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}