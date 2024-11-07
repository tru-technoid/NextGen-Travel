import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Inject the first script for Botpress
    const botpressScript = document.createElement("script");
    botpressScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    botpressScript.async = true;

    // Once the first script is loaded, inject the second script
    botpressScript.onload = () => {
      const customScript = document.createElement("script");
      customScript.src = "https://files.bpcontent.cloud/2024/10/16/07/20241016075626-44Z8MIEC.js";
      customScript.async = true;
      document.body.appendChild(customScript);
    };

    document.body.appendChild(botpressScript);

    // Cleanup function to remove the scripts when the component is unmounted
    return () => {
      if (botpressScript) document.body.removeChild(botpressScript);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {/* Placeholder for Botpress Webchat */}
      <div id="botpress-webchat" />
    </div>
  );
};

export default Chatbot;