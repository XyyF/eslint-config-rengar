/**
 * created By Rengar At 2019.6.6 15:52
 */

/**
 * 一个规则的rule配置模版
 */
const ruleBasic = {
    'meta:object': {
        'type:string': [
            '规则的类型',
            'problem: (警告)表明代码将会导致一些错误，程序员应该优先解决',
            'suggestion: (建议)表明代码有更优的处理方式，但不改变也不会有错误',
            'layout: (规范)规则主要关心空格、分号、逗号和括号,以及程序外观等'
        ],
        'docs:object': {
            'description:string': '对于规则的简短描述',
            'category:string': '规则的标题',
            'recommended:boolean': '继承 extends: eslint:recommended 的规则是否启用',
            'url:string': '规则的说明文档'
        },
        'fixable:string': [
            'fix代码选项；如果命令行中带有--fix，那么如果不配置fixable，elsint将不提供fix',
            'code',
            'whitespace'
        ],
        'schema:object[]': [
            'rules的可配置选项，让eslint可以防止在rules中定义的无效、不期望选项，最终结果体现在context.option上',
            '更多请参考JSON schema',
            {'enum': ['error', 'never']},
            {
                'type:string': '该变量的类型：object、array等',
                'properties:object': {
                    'allow': {
                        des: '字段名,自定义',
                        'type:string': '同上，例如array',
                        'items': {
                            des: '数组的子元素类型',
                            'type': 'string'
                        },
                        'minItems:number': '最小的子元素个数，例如1',
                        'uniqueItems:boolean': '是否子元素是不重复的'
                    }
                },
                'additionalProperties:boolean': '是否允许额外的属性'
            },
            `example:
                rules: {
                    'no-console': [
                        'error',
                        {allow: ['warn', 'error', 'log', 'info'],},
                    ],
                }
            `
        ],
        'deprecated:boolean': '指示规则是否以已经被弃用',
        'replacedBy:array': '对于废弃的规则，指定替代的规则'
    },
    'create()': '返回一个对象'
}

/**
 *
 * @type {{}}
 */
const contentObject = {}