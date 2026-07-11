import { guides } from "@/data/guides";
import ExploreCard from "../components/ExploreCrad";

export default function ExplorePage() {
  return (
    <div className="container mx-auto gap-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {guides.map((guide) => (
        <ExploreCard  key={guide.id} guide={guide} />
      ))}
    </div>
  );
}
