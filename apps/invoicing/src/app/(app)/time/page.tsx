import { TimeLogger } from '@/components/time/TimeLogger';

export default function TimePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Time Tracking</h1>
        <p className="text-sm text-slate-500 mt-1">Log your daily contracting hours and build fortnight aggregates.</p>
      </div>
      <TimeLogger />
    </div>
  );
}
