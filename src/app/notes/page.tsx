import { createClient } from "@/utils/supabase/server";

export default async function NotesPage() {
  const supabase = await createClient();
  const { data: notes, error } = await supabase.from("notes").select().order("id");

  if (error) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="mb-4 text-3xl font-semibold">Supabase Notes</h1>
        <pre className="overflow-auto rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-100">
          {JSON.stringify({ error: error.message }, null, 2)}
        </pre>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-semibold">Supabase Notes</h1>
      <pre className="overflow-auto rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-zinc-100">
        {JSON.stringify(notes, null, 2)}
      </pre>
    </main>
  );
}
