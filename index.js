const {Kernel} = require('@tarojs/service');

const kernel = new Kernel({
    appPath: '.'
});
kernel.optsPlugins = [
    '@tarojs/plugin-platform-weapp',
]