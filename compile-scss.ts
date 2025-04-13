import path from 'path';
import fs from 'fs';
import * as sass from 'sass';
import chokidar from 'chokidar';
import rtlcss from 'rtlcss';
import type { Plugin, ViteDevServer } from 'vite';

const compileSCSS = (): Plugin => ({
  name: 'compile-scss',
  configureServer(server: ViteDevServer) {
    const scssFiles = [
      path.resolve(__dirname, 'src/assets/scss/theme.scss'),
      path.resolve(__dirname, 'src/assets/scss/user.scss')
    ];

    const compileSCSSToCSS = async (file: string) => {
      const result = await sass.compileAsync(file, { style: 'expanded' });
      const fileName = path.basename(file, path.extname(file));

      const cssPath = path.resolve(__dirname, `public/css/${fileName}.css`);
      fs.mkdirSync(path.dirname(cssPath), { recursive: true });
      fs.writeFileSync(cssPath, result.css);

      const rtlResult = rtlcss.process(result.css, {}, [], {});
      const rtlCssPath = path.resolve(
        __dirname,
        `public/css/${fileName}.rtl.css`
      );
      fs.writeFileSync(rtlCssPath, rtlResult);
    };

    chokidar
      .watch(path.resolve(__dirname, 'src/assets/scss/**/*.scss'))
      .on('change', () => {
        compileSCSS();
        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      });

    scssFiles.map(file => {
      compileSCSSToCSS(file);
    });
  }
});

export default compileSCSS;
