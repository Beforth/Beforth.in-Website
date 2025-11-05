import { motion } from "framer-motion";

export function Logo() {
  const logoSrc = "/images/befu.png"; // Always use light mode logo
  
  return (
    <motion.img 
      src={logoSrc} 
      alt="Beforth Logo" 
      className="h-12 w-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}