import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

import JobCard from "../component/JobCard";
import { jobs } from "../data/Jobs";

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [category, setCategory] = useState("All Categories");
  const [type, setType] = useState("All Types");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchMatch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(search.toLowerCase())
        );

      const locationMatch =
        location === "All Locations" ||
        job.location === location;

      const categoryMatch =
        category === "All Categories" ||
        job.category === category;

      const typeMatch =
        type === "All Types" || job.type === type;

      return (
        searchMatch &&
        locationMatch &&
        categoryMatch &&
        typeMatch
      );
    });
  }, [search, location, category, type]);

  return (
    <main>
      <section className="bg-slate-950 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-blue-400">
            FIND YOUR NEXT ROLE
          </p>

          <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">
            Explore jobs matched to you
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Search thousands of jobs and discover your compatibility
            score for every opportunity.
          </p>

          <div className="mt-8 flex max-w-3xl items-center gap-3 rounded-2xl bg-white px-5">
            <Search className="text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs, companies or skills..."
              className="w-full py-5 outline-none"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:flex-row md:items-center">
          <div className="flex items-center gap-2 font-semibold">
            <SlidersHorizontal size={18} />
            Filters
          </div>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none"
          >
            <option>All Locations</option>
            <option>Lagos, Nigeria</option>
            <option>Abuja, Nigeria</option>
            <option>Remote</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none"
          >
            <option>All Categories</option>
            <option>Engineering</option>
            <option>Cybersecurity</option>
            <option>Data</option>
            <option>Design</option>
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none"
          >
            <option>All Types</option>
            <option>Full-time</option>
            <option>Hybrid</option>
            <option>Remote</option>
          </select>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Available jobs
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredJobs.length} opportunities found
            </p>
          </div>

          <select className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm">
            <option>Best Match</option>
            <option>Newest</option>
            <option>Highest Salary</option>
          </select>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center">
            <h3 className="text-xl font-bold">
              No jobs found
            </h3>

            <p className="mt-2 text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}