import  { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create script for chatbot configuration
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = 'window.chtlConfig = { chatbotId: "2287214655" };';
    
    // Append config script to the head
    document.head.appendChild(configScript);

    // Create chatbot embed script
    const embedScript = document.createElement('script');
    embedScript.async = true;
    embedScript.src = 'https://chatling.ai/js/embed.js';
    embedScript.setAttribute('data-id', '2287214655');
    embedScript.id = 'chatling-embed-script';
    
    // Append embed script to the body
    document.body.appendChild(embedScript);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(configScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  return null; // No visible UI needed for embedding
};

export default Chatbot;
