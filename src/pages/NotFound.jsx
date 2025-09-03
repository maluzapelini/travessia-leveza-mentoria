import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center container-custom">
        <h1 className="text-h1 text-bordeaux mb-4">404</h1>
        <p className="text-lead text-gray-600 mb-6">Oops! Página não encontrada</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-bordeaux hover:text-bordeaux-700 font-medium link-underline"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default NotFound;