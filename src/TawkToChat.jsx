import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    // Inject Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/673cc7112480f5b4f5a08149/1id2mj7lk"; // Your updated Tawk.to URL
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TawkToChat;
