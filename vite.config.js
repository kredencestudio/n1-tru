import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    {
      name: 'n1-cms-api-plugin',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.method === 'POST' && req.url === '/api/save-content') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const parsed = JSON.parse(body);
                const filePath = path.resolve(import.meta.dirname, 'public/site-data.json');
                fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2), 'utf-8');
                try {
                  const rootPath = path.resolve(import.meta.dirname, 'site-data.json');
                  fs.writeFileSync(rootPath, JSON.stringify(parsed, null, 2), 'utf-8');
                } catch(e) {}
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Saved successfully to disk!' }));
              } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
            return;
          }
          if (req.method === 'POST' && req.url === '/api/upload-image') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const { filename, data } = JSON.parse(body);
                const matches = data ? data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/) : null;
                let buffer;
                let ext = '.png';
                if (matches && matches.length === 3) {
                  const mime = matches[1];
                  ext = mime.split('/')[1] ? '.' + mime.split('/')[1].replace('jpeg', 'jpg') : '.png';
                  buffer = Buffer.from(matches[2], 'base64');
                } else if (data) {
                  buffer = Buffer.from(data, 'base64');
                } else {
                  throw new Error('No image data provided');
                }
                const uploadsDir = path.resolve(import.meta.dirname, 'public/uploads');
                if (!fs.existsSync(uploadsDir)) {
                  fs.mkdirSync(uploadsDir, { recursive: true });
                }
                const base = path.basename(filename || 'gear', path.extname(filename || ''));
                const safeName = base.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
                const fileExt = path.extname(filename || '') || ext;
                const finalFilename = `${Date.now()}-${safeName}${fileExt}`;
                const destPath = path.join(uploadsDir, finalFilename);
                fs.writeFileSync(destPath, buffer);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, url: `/uploads/${finalFilename}` }));
              } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
            return;
          }
          if (req.method === 'GET' && req.url === '/api/get-content') {
            try {
              const filePath = path.resolve(import.meta.dirname, 'public/site-data.json');
              if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf-8');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(content);
                return;
              }
            } catch (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: err.message }));
              return;
            }
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, 'index.html'),
        admin: path.resolve(import.meta.dirname, 'admin.html')
      }
    }
  }
});
