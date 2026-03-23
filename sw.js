// 这是一个极其简单的 Service Worker，告诉浏览器我们支持离线功能
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});
self.addEventListener('fetch', (e) => {
    // 暂时不做复杂的缓存拦截，直接放行所有网络请求
});
