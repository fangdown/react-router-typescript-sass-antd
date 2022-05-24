module.exports = {
    extends: [
        'alloy',
        'alloy/typescript',
        // 使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出
        'plugin:prettier/recommended',
    ],
    env: {
        // 您的环境变量（包含多个预定义的全局变量）
        // Your environments (which contains several predefined global variables)
        browser: true,
        node: true,
        es6: true,
        // mocha: true,
        jest: true,
        // jquery: true
    },
    globals: {
        // 您的全局变量（设置为 false 表示它不允许被重新赋值）
        // Your global variables (setting to false means it's not allowed to be reassigned)
        // myGlobal: false
    },
    settings: {},
    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    rules: {
        // TODO：代表要修复，没有标记则规则保留规则"off"状态
        // 在类属性和方法上需要显式的可访问性修饰符
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        // 确保了this.props在constructor完成之前就被赋值
        '@typescript-eslint/no-useless-constructor': 'off',
        //  待定
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        // 必须使用 === 或 !==，禁止使用 == 或 !=
        eqeqeq: 'off',
        // 禁止变量申明时用逗号一次申明多个
        'max-params': 'off',
        // 强制可嵌套的块的最大深度
        'no-useless-constructor': 'off',
        // 关闭禁止不必要的布尔类型转换
        'no-extra-boolean-cast': 'off',
        // 禁止重复导入模块，可留
        // TODO
        'no-duplicate-imports': 'off',
        // 禁止使用较短的符号实现类型转换
        'no-implicit-coercion': 'off',
        // 禁止在对象中使用不必要的计算属性
        'no-useless-computed-key': 'off',
        'no-undef': 'off',
        'one-var': 'off',
        // 默认情况下，parseInt()将自动检测十进制和十六进制(通过0x前缀),可留
        // TODO
        radix: 'off',
        // 强制在注释中 // 或 /* 使用一致的空格，可留，修改很大
        // TODO
        'spaced-comment': 'off',
        // 条件判断中字面量在先而变量在第二的位置
        yoda: 'off',
        'no-unused-vars': 'error',
    },
};
