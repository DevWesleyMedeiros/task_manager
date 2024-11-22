import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Diretório de saída da build
  build: {
    outDir: 'dist', // Pasta de saída
    rollupOptions: {
      input: {
        main: 'index.html', // Arquivo HTML principal
      },
      output: {
        entryFileNames: 'index.js', // Gera o arquivo JS principal
        chunkFileNames: 'assets/[name]-[hash].js', // Chunks com nomes únicos baseados no hash
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'style.css'; // Gera um único arquivo CSS
          }
          if (name && /\.(jpe?g|png|gif|svg|webp|ttf|woff|woff2)$/.test(name)) {
            return 'assets/[name]-[hash][extname]'; // Gera arquivos de imagem/fontes com hash
          }
          return 'assets/[name]-[hash][extname]'; // Outros assets (com hash)
        }
      }
    }
  },
  // Configurações para o servidor de desenvolvimento
  server: {
    open: true, // Abre automaticamente o navegador
    port: 3000, // Porta do servidor
  },
  preview: {
    port: 4173,  // Certifique-se de que a porta está configurada aqui também, se necessário
  },
  // Definindo configurações de alias, se necessário
  resolve: {
    alias: {
      '@scripts': path.resolve(__dirname, 'scripts'),
      '@styles': path.resolve(__dirname, 'styles'),
      '@assets': path.resolve(__dirname, 'assets'),
    },
  },
  // Plugins para TypeScript, etc
  plugins: [],
});
