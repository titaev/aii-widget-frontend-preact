const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./src/index-module.tsx'], // Укажите точку входа, например index.tsx
    outfile: `./module/aii-cx-widget-module-${process.env.NAME_POSTFIX}.js`, // Укажите выходной файл
    bundle: true, // Упаковка всех зависимостей в один файл
    minify: true, // Минификация (можно включить, если нужно)
    sourcemap: true, // Включить карты исходников
    loader: {
      '.tsx': 'tsx', // Поддержка TSX
      '.ts': 'ts', // Поддержка TS
    },
    define: {
      'process.env.REACT_APP_BE_API_URL': JSON.stringify(process.env.REACT_APP_BE_API_URL),
      'process.env.REACT_APP_FORM_SOCKET_URL': JSON.stringify(
        process.env.REACT_APP_FORM_SOCKET_URL,
      ),
      'process.env.APP_URL': JSON.stringify(process.env.APP_URL),
    },
    format: 'esm',
    target: 'esnext', // Целевая версия JS, например, ESNext для современных фич
  })
  .then(() => {
    console.log('Build complete');
  })
  .catch(() => process.exit(1));
