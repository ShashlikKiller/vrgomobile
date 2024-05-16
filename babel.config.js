module.exports = function(api) {
  api.cache(true);
  const presets = ['babel-preset-expo'];

  const plugins = [
    [
      'module-resolver',
      {
        root: ['./source'],
        alias: {
          '@images': './source/assets/images',
          '@fonts': './source/assets/fonts',
          '@components': './source/components',
          '@screens': './source/screens',
          '@styles': './source/styles',
          '@navigations': './source/navigations',
          // Добавьте здесь другие алиасы при необходимости
        },
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
