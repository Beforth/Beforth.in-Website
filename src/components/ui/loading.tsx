import { motion } from 'framer-motion';

export function Loading() {
  const logoSrc = "/images/befu.png";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50/50 to-purple-50/30">
      {/* Simple centered content */}
      <div className="flex flex-col items-center">
        {/* Bird logo with gentle pulse */}
        <motion.img
          src={logoSrc}
          alt="Beforth"
          className="w-20 h-20 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Simple loading dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
