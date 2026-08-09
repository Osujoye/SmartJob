import {
  Bookmark,
  Building2,
  Clock3,
  MapPin,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { Job } from "../data/Jobs";
import MatchScore from "./MatchScore";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Building2 size={22} />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              {job.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {job.company}
            </p>
          </div>
        </div>

        <button className="text-slate-400 hover:text-blue-600">
          <Bookmark size={20} />
        </button>
      </div>

      <div className="mt-5">
        <MatchScore score={job.match} />
      </div>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
        <span className="flex items-center gap-1">
          <MapPin size={15} />
          {job.location}
        </span>

        <span className="flex items-center gap-1">
          <Clock3 size={15} />
          {job.type}
        </span>

        <span className="flex items-center gap-1">
          <Wallet size={15} />
          {job.salary}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.skills.slice(0, 4).map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          Posted {job.posted}
        </span>

        <Link
          to={`/jobs/${job.id}`}
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          View Job
        </Link>
      </div>
    </div>
  );
}