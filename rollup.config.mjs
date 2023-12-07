// rollup.config.mjs
import typescript from 'rollup-plugin-typescript2';
import screeps from "rollup-plugin-screeps";

// 获取密钥config对象
let config
// 根据指定的目标获取对应的配置项
if (!process.env.DEST) console.log("未指定目标, 代码将被编译但不会上传")
else if (!(config = require("./.secret.json")[process.env.DEST])) {
    throw new Error("无效目标，请检查 secret.json 中是否包含对应配置")
}

export default {
    input: 'src/main.ts', // 入口文件路径
    output: {
        file: 'dist/main.js', // 输出文件路径（Screeps将使用此文件）
        format: 'cjs', // CommonJS 格式
    },
    plugins: [
        typescript(), // 使用 TypeScript 插件编译代码
        screeps({
            // config对象模板
            /*
            {
                token: "",
                protocol: "https",
                hostname: "screeps.com",
                port: 443,
                path: "/",
                branch: "default"
            },
            */
            config: config,
            dryRun: false
        }
        )
    ],
};
