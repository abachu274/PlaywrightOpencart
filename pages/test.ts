const results = [
  { test: "login", status: "passed", ms: 1200 },
  { test: "checkout", status: "failed", ms: 3400 },
  { test: "search", status: "passed", ms: 800 },
];


const byStatus = results.reduce((acc, r) => {
  acc[r.status] = (acc[r.status] ?? 0) + 1;
  return acc;                          // ← MUST return acc, classic bug to forget
}, {} as Record<string, number>);
// { passed: 2, failed: 1 }
