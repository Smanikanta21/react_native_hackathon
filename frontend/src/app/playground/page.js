"use client";

import { useEffect, useRef, useState } from "react";

export default function Playground() {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const vmRef = useRef(null);

  useEffect(() => {
    // Dynamically import SDK to avoid SSR issues
    if (typeof window === "undefined") {
      return;
    }

    // Import the SDK dynamically
    import("@stackblitz/sdk").then((sdk) => {
      if (containerRef.current && !vmRef.current) {
        setIsLoading(true);
        setError(null);
        
        // Create a comprehensive React Native Web environment
        sdk.default.embedProject(
          containerRef.current,
          {
          title: "React Native Web Playground",
          description: "Interactive React Native Web Environment",
          template: "node",
          files: {
            "App.jsx": `import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native-web';

function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🚀 React Native Web</Text>
        <Text style={styles.subtitle}>Live Preview Playground</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.label}>Counter Example:</Text>
        <Text style={styles.counter}>{count}</Text>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.resetButton]}
            onPress={() => setCount(0)}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.decrementButton]}
            onPress={() => setCount(count - 1)}
          >
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.info}>
        <Text style={styles.infoText}>
          ✨ Edit the code to see changes in real-time!
        </Text>
        <Text style={styles.infoText}>
          📱 This uses React Native Web for web compatibility
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#61dafb',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#282c34',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#282c34',
  },
  content: {
    padding: 40,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 16,
    color: '#333',
  },
  counter: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#61dafb',
    marginBottom: 32,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#61dafb',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#ffa726',
  },
  decrementButton: {
    backgroundColor: '#ef5350',
  },
  buttonText: {
    color: '#282c34',
    fontSize: 16,
    fontWeight: '600',
  },
  info: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default App;`,
            "index.jsx": `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);`,
            "index.html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Native Web Playground</title>
    <style>
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      #root {
        min-height: 100vh;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.jsx"></script>
  </body>
</html>`,
            "package.json": `{
  "name": "react-native-web-playground",
  "version": "1.0.0",
  "description": "React Native Web interactive playground",
  "main": "index.js",
  "scripts": {
    "start": "vite",
    "dev": "vite"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-native-web": "^0.19.10"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.0"
  }
}`,
            "vite.config.js": `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: ['.web.js', '.web.jsx', '.jsx', '.js', '.json'],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
      },
    },
    include: ['react', 'react-dom', 'react-native-web'],
  },
});`,
            ".stackblitzrc": `{
  "startCommand": "npm start"
}`,
          },
        },
        {
          openFile: "App.jsx",
          view: "default",
          height: "100%",
          hideNavigation: false,
          hideDevTools: false,
          forceEmbedLayout: true,
        }
      ).then((vm) => {
        vmRef.current = vm;
        setIsLoading(false);
        console.log("✅ React Native Web environment loaded successfully!");
      }).catch((error) => {
        console.error("❌ Error loading StackBlitz:", error);
        setError(error.message || "Failed to load StackBlitz");
        setIsLoading(false);
      });
      }
    }).catch((error) => {
      console.error("❌ Error importing StackBlitz SDK:", error);
      setError("Failed to load StackBlitz SDK");
      setIsLoading(false);
    });
  }, []);

  // Show error state
  if (error) {
    return (
      <div style={{ 
        width: "100%", 
        height: "100vh", 
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e1e1e",
        color: "#ff6b6b",
        flexDirection: "column",
        padding: "20px",
        textAlign: "center",
      }}>
        <h2>Error Loading Playground</h2>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#61dafb",
            color: "#282c34",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      width: "100%", 
      height: "100vh", 
      display: "flex", 
      flexDirection: "column",
      backgroundColor: "#1e1e1e"
    }}>
      {isLoading && (
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#61dafb",
          fontSize: "24px",
          fontWeight: "bold",
          zIndex: 1000,
        }}>
          Loading React Native Environment...
        </div>
      )}
      <div 
        ref={containerRef} 
        style={{ 
          width: "100%", 
          height: "100%",
          border: "none"
        }} 
      />
    </div>
  );
}