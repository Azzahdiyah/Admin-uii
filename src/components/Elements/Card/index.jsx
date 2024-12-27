import * as motion from "motion/react-client";

const Card = (props) => {
  const { title = false, desc, variant } = props;

  return (
    <motion.div
      className={`flex flex-col flex-1 mb-6 ${variant}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 },
      }} 
    >
      {title && (
        <>
          {title.length === 1 ? (
            <div className="hidden md:block md:text-lg md:text-gray-02 md:mb-4">
              {title}
            </div>
          ) : (
            <div className="text-lg text-gray-02 mb-4">{title}</div>
          )}
        </>
      )}
      <motion.div
        className="bg-white rounded-lg px-6 py-5 shadow-xl flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {desc}
      </motion.div>
    </motion.div>
  );
};

export default Card;
