import UploadImageIcon from "@/src/components/icons/UploadImageIcon";

export default function FileUploadZone() {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700 mb-1 font-roboto">
        Foto del producto
      </label>
      <div className="mt-1 flex justify-center p-4 border-[2px] border-[#D0D5DD] border-dashed rounded-md">
        <div className="space-y-2 flex flex-col items-center justify-center">
          <div className="border border-[#EAECF0] p-2 rounded-xl">
            <UploadImageIcon />
          </div>
          <p className="text-sm text-primary font-bold">
            Arrastra y suelta tu archivo aquí
          </p>
          <p className="text-sm text-[#767676] font-medium">
            o haz clic para seleccionar un archivo
          </p>
          <button
            type="button"
            className="p-2 text-sm font-medium border border-black rounded-xl hover:bg-gray-50"
          >
            Seleccionar Archivo
          </button>
        </div>
      </div>
      <p className="pt-4 text-xs text-[#5D5D5D]">
        Formatos soportados: PDF, JPG, PNG, DOCX (máx. 10MB)
      </p>
    </>
  );
}
