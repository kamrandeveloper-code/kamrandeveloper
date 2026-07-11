import { notFound } from "next/navigation";
import ServiceForm from "../../ServiceForm";
import { updateService } from "@/lib/actions/services";
import { adminFetch } from "@/lib/admin-auth";
import type { Service } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditServicePage({ params }: Props) {
  const { id } = await params;
  const res = await adminFetch(`/api/services/${id}`);
  if (!res.ok) notFound();
  const service: Service = await res.json();

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">Edit Service</h1>
      <ServiceForm action={updateService.bind(null, service.id)} service={service} />
    </div>
  );
}
