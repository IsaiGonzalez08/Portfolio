"use client";

import { use } from "react";
import SingleProject from "@/features/projects/ui/SingleProject";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function SingleProjectPage({ params }: PageProps) {
  const { id } = use(params);
  return <SingleProject id={id} />;
}
