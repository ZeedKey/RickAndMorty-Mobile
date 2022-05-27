module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          'envName': 'API_URL',
          'moduleName': '@env',
          'path': '.env',
          'blocklist': null,
          'allowlist': null,
          'safe': false,
          'allowUndefined': false,
          'verbose': false
        },
      ],
      [
        'module-resolver',
        {
          'extensions': ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          'root': ['./src'],
          'alias': {
            '@ui/typography': './src/ui/typography',
            '@ui/common': './src/ui/common',
            '@ui/badges': './src/ui/badges',
            '@ui/layouts': './src/ui/layouts',
            '@ui/icons': './src/ui/icons',
            '@ui/filter': './src/ui/filter',
            '@ui/details': './src/ui/details',
            '@ui/modal': './src/ui/modal',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@models': './src/models',
            '@theme': './src/theme',
            '@schemas': './src/schemas',
            '@store': './src/store',
            'src': './src',
            'assets': './assets'
          }
        }
      ]
    ],
  };
};