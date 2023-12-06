// rollup.config.mjs
import typescript from 'rollup-plugin-typescript2';
import screeps from "rollup-plugin-screeps";

export default {
    input: 'src/main.ts', // 入口文件路径
    output: {
        file: 'dist/main.js', // 输出文件路径（Screeps将使用此文件）
        format: 'cjs', // CommonJS 格式
    },
    plugins: [
        typescript(), // 使用 TypeScript 插件编译代码
        screeps({
            config: {
                token: "eda44020-11f1-4ee0-b7d3-a70f20f18a77",
                protocol: "https",
                hostname: "screeps.com",
                port: 443,
                path: "/",
                branch: "default"
            },
            dryRun: false
        }
        )
    ],
};
