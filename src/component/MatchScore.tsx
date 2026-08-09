interface MatchScoreProps {
  score: number;
}

export default function MatchScore({ score }: MatchScoreProps) {
  const color =
    score >= 90
      ? "text-emerald-600 bg-emerald-50"
      : score >= 75
      ? "text-blue-600 bg-blue-50"
      : "text-orange-600 bg-orange-50";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold ${color}`}
    >
      <span>{score}%</span>
      <span>Match</span>
    </div>
  );
}