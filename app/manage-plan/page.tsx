import SchematicComponent from "@/components/schematic/SchematicComponent";

function ManagePlanPage() {
  return (
    <div className="container mx-auto p-4 md:p-0">
      <h1 className="text-2xl font-bold mb-4 my-8">Manage Your Plan</h1>
      <div className="flex flex-col gap-2">
        <p className=" text-gray-600 mb-8">
          Manage your plan and billing information.
        </p>

        <SchematicComponent componentId="cmpn_qqrMEMA9hg" />
      </div>
    </div>
  );
}

export default ManagePlanPage;
