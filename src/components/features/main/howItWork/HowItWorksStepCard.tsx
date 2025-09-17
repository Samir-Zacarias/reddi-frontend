// Definimos los props. El icono se pasará como un componente de React.
type HowItWorksStepCardProps = {
  icon: React.ElementType; // Permite pasar componentes como Search, Clock, etc.
  title: string;
  description: string;
};

const HowItWorksStepCard: React.FC<HowItWorksStepCardProps> = ({
  icon: Icon, // Renombramos a 'Icon' para usarlo como componente JSX
  title,
  description,
}) => {
  return (
    <div
      className="
        flex flex-col items-center gap-3 rounded-2xl
        bg-white p-6 text-center shadow-lg
      "
    >
      {/* Círculo del icono */}
      <div
        className="
          flex h-14 w-14 items-center 
          justify-center rounded-full
        "
      >
        <Icon className="h-7 w-7 text-teal-500" />
      </div>

      {/* Título del paso */}
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>

      {/* Descripción del paso */}
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
};

export default HowItWorksStepCard;
