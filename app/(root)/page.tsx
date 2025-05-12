import SearchBar from "@/components/SearchBar";

export default function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query: string = searchParams.query || "";

  return (
    <>
      <main className="blue-container overflow-x-hidden">
        <h1 className="heading font-work-sans">
          Pitch Your Startup, <br />
          Connect with Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed on Virtual
          Competitions.
        </p>

        <SearchBar initialQuery={query} />
      </main>
    </>
  );
}
