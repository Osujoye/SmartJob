import {
  ArrowRight,
  CheckCircle2,
  Search,
  Sparkles,
  Users,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";

import JobCard from "../component/JobCard";
import { jobs } from "../data/Jobs";

export default function Home() {
  const featuredJobs = jobs.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#2563eb33,_transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <Sparkles size={16} />
              100% career matching software
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white md:text-6xl">
              Find jobs that actually{" "}
              <span className="text-blue-500">match you.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              TalentMatch connects candidates with opportunities based on
              skills, experience and career goals — not just keywords.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/jobs"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white hover:bg-blue-700"
              >
                Explore Jobs
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/recruiter/dashboard"
                className="rounded-xl border border-slate-700 px-6 py-3.5 font-bold text-white hover:bg-slate-900"
              >
                I'm Hiring
              </Link>
            </div>
          </div>

          {/* Match card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-2xl bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Recommended for you
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      Frontend Developer
                    </h3>
                  </div>

                  <div className="rounded-full bg-emerald-50 px-4 py-2 font-bold text-emerald-600">
                    94%
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ["React", "Excellent"],
                    ["TypeScript", "Excellent"],
                    ["Tailwind CSS", "Excellent"],
                    ["REST APIs", "Good"],
                  ].map(([skill, level]) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium">
                        {skill}
                      </span>

                      <span className="flex items-center gap-1 text-sm text-emerald-600">
                        <CheckCircle2 size={16} />
                        {level}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white">
                  View Recommendation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          <div className="text-center">
            <p className="text-3xl font-black text-slate-900">25K+</p>
            <p className="mt-1 text-sm text-slate-500">
              Active Jobs
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black text-slate-900">12K+</p>
            <p className="mt-1 text-sm text-slate-500">
              Companies
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black text-slate-900">85K+</p>
            <p className="mt-1 text-sm text-slate-500">
              Candidates
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black text-blue-600">
              91%
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Match Accuracy
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-blue-600 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white">
            Search thousands of opportunities
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
            <div className="flex items-center gap-3 rounded-xl bg-white px-4">
              <Search className="text-slate-400" size={20} />

              <input
                placeholder="Job title or keyword"
                className="w-full py-4 outline-none"
              />
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white px-4">
              <span className="text-slate-400">📍</span>

              <input
                placeholder="Location"
                className="w-full py-4 outline-none"
              />
            </div>

            <Link
              to="/jobs"
              className="rounded-xl bg-slate-950 px-8 py-4 text-center font-bold text-white"
            >
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-600">
              HOW IT WORKS
            </p>

            <h2 className="mt-2 text-4xl font-black text-slate-900">
              Recruitment made smarter
            </h2>

            <p className="mt-4 text-slate-500">
              A smarter way for candidates and recruiters to find
              the right match.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Build your profile",
                text: "Add your skills, experience and career preferences.",
              },
              {
                icon: Search,
                title: "Discover opportunities",
                text: "Explore jobs ranked according to your compatibility.",
              },
              {
                icon: TrendingUp,
                title: "Get matched",
                text: "Our matching engine highlights your strongest opportunities.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <item.icon size={25} />
                </div>

                <div className="mt-5 text-sm font-bold text-blue-600">
                  0{index + 1}
                </div>

                <h3 className="mt-2 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured jobs */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-semibold text-blue-600">
                OPPORTUNITIES
              </p>

              <h2 className="mt-2 text-4xl font-black">
                Top matches for you
              </h2>
            </div>

            <Link
              to="/jobs"
              className="hidden items-center gap-2 font-semibold text-blue-600 md:flex"
            >
              View all
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-slate-950 px-8 py-16 text-center md:px-20">
          <BriefcaseBusiness
            className="mx-auto text-blue-500"
            size={40}
          />

          <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
            Ready to find your next opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Create your profile and let TalentMatch find opportunities
            that fit your skills.
          </p>

          <Link
            to="/jobs"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white hover:bg-blue-700"
          >
            Start Exploring
          </Link>
        </div>
      </section>
    </main>
  );
}