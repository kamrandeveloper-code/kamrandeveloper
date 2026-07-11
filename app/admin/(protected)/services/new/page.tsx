import ServiceForm from "../ServiceForm";
import { createService } from "@/lib/actions/services";

export default function NewServicePage() {
  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">New Service</h1>
      <ServiceForm action={createService} />
    </div>
  );
}
