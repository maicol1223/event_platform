import ProfessionalForm from "@/components/shared/ProfessionalForm";

const CreateProfessional = () => {
  return (
    <>
      <section className="bg-primary-50 py-5 md:py-10">
        <h3 className="wrapper text-center sm:text-left">Crear Profesional</h3>
      </section>

      <div className="wrapper my-8">
        <ProfessionalForm type="Create" />
      </div>
    </>
  );
};

export default CreateProfessional;
