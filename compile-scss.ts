import path from 'path';
import fs from 'fs';
import * as sass from 'sass';
import chokidar from 'chokidar';
import rtlcss from 'rtlcss';

const compileSCSS = () => ({
  name: 'compile-scss',
  configureServer(server) {
    const scssFiles = [
      path.resolve(__dirname, 'src/assets/scss/theme.scss'),
      path.resolve(__dirname, 'src/assets/scss/user.scss')
    ];

    const compileSCSSToCSS = async file => {
      // const scssPath = path.resolve(__dirname, 'src/assets/scss/theme.scss');
      const result = await sass.compileAsync(file, { style: 'expanded' });
      const fileName = path.basename(file, path.extname(file));

      // Path for LTR CSS
      const cssPath = path.resolve(__dirname, `public/css/${fileName}.css`);
      fs.mkdirSync(path.dirname(cssPath), { recursive: true });
      fs.writeFileSync(cssPath, result.css);

      // Generate RTL CSS from LTR CSS
      // const rtlResult = rtlcss.process(result.css);
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
