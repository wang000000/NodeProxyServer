

var Config = {

    protocal: 'https',//目标服务请求协议
    proxyTransferUrl:'wenet.autoai.com',//目标服务的域名
    port: 8089,//本地服务的端口

}

//pages文件目录为页面的存放地址，页面放入后可以本地打开这可以正常使用

//*******使用步骤******* */
//1.配置中转代理服务
//2.启动中转代理服务,在NodeProxyServer文件目录下cmd窗口输入node main.js
//3.浏览器输入框内输入http://localhost:8089/pages/yourhtml.html可以追加参数&param

module.exports = Config;