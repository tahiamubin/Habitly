import GuideDetail from "@/app/components/GuideDetail";
import { guides } from "@/data/guides";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const guide = guides.find((g) => g.id === id);

  if (!guide) {
    notFound();
  }

  return <GuideDetail guide={guide} />;
};

export default Page;