const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@navigation': path.resolve(__dirname, 'src/navigation/index'),
      '@components': path.resolve(__dirname, 'src/components/index'),
      '@contexts': path.resolve(__dirname, 'src/contexts/index'),
      '@services': path.resolve(__dirname, 'src/services/index'),
      '@pages': path.resolve(__dirname, 'src/pages/index'),
      '@utilities': path.resolve(__dirname, 'src/utilities'),
    },
  },
  devServer: {
    allowedHosts: ['localhost'],
  },
};
