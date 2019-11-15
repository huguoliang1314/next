{"title":"分页","meta":{"title":"分页","description":"\n<p>与分页结合</p>\n","order":"11"},"codes":{"jsx":"import { Table, Pagination } from '@alifd/next';\n\nconst dataSource = (j) => {\n        const result = [];\n        for (let i = 0; i < 5; i++) {\n            result.push({\n                title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },\n                id: 100306660940 + i + j,\n                time: 2000 + j\n            });\n        }\n        return result;\n    },\n    render = (value, index, record) => {\n        return <a href=\"javascript:;\">Remove({record.id})</a>;\n    };\n\nclass App extends React.Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            dataSource: dataSource(5)\n        };\n    }\n\n    onChange = (currentPage) => {\n        this.setState({\n            loading: true\n        });\n        setTimeout(() => {\n            this.setState({\n                dataSource: dataSource(currentPage * 5),\n                loading: false\n            });\n        }, 200);\n    }\n    render() {\n        return (\n            <div>\n                <Table dataSource={this.state.dataSource}\n                    loading={this.state.loading}>\n                    <Table.Column title=\"Id1\" dataIndex=\"id\" width={140} />\n                    <Table.Column title=\"Time\" dataIndex=\"time\" width={500} />\n                    <Table.Column cell={render} width={200} />\n                </Table>\n                <Pagination onChange={this.onChange} className=\"page-demo\" />\n            </div>);\n    }\n}\nReactDOM.render(<App />, mountNode);\n","css":".page-demo {\n    margin-top:10px;\n}\n"},"body":"\n\n````jsx\nimport { Table, Pagination } from '@alifd/next';\n\nconst dataSource = (j) => {\n        const result = [];\n        for (let i = 0; i < 5; i++) {\n            result.push({\n                title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },\n                id: 100306660940 + i + j,\n                time: 2000 + j\n            });\n        }\n        return result;\n    },\n    render = (value, index, record) => {\n        return <a href=\"javascript:;\">Remove({record.id})</a>;\n    };\n\nclass App extends React.Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            dataSource: dataSource(5)\n        };\n    }\n\n    onChange = (currentPage) => {\n        this.setState({\n            loading: true\n        });\n        setTimeout(() => {\n            this.setState({\n                dataSource: dataSource(currentPage * 5),\n                loading: false\n            });\n        }, 200);\n    }\n    render() {\n        return (\n            <div>\n                <Table dataSource={this.state.dataSource}\n                    loading={this.state.loading}>\n                    <Table.Column title=\"Id1\" dataIndex=\"id\" width={140} />\n                    <Table.Column title=\"Time\" dataIndex=\"time\" width={500} />\n                    <Table.Column cell={render} width={200} />\n                </Table>\n                <Pagination onChange={this.onChange} className=\"page-demo\" />\n            </div>);\n    }\n}\nReactDOM.render(<App />, mountNode);\n````\n````css\n.page-demo {\n    margin-top:10px;\n}\n````","html":"<script>(function(){\"use strict\";\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _next = require(\"@alifd/next\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar dataSource = function dataSource(j) {\n    var result = [];\n    for (var i = 0; i < 5; i++) {\n        result.push({\n            title: { name: \"Quotation for 1PCS Nano \" + (3 + i) + \".0 controller compatible\" },\n            id: 100306660940 + i + j,\n            time: 2000 + j\n        });\n    }\n    return result;\n},\n    _render = function _render(value, index, record) {\n    return React.createElement(\n        \"a\",\n        { href: \"javascript:;\" },\n        \"Remove(\",\n        record.id,\n        \")\"\n    );\n};\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.onChange = function (currentPage) {\n            _this.setState({\n                loading: true\n            });\n            setTimeout(function () {\n                _this.setState({\n                    dataSource: dataSource(currentPage * 5),\n                    loading: false\n                });\n            }, 200);\n        };\n\n        _this.state = {\n            dataSource: dataSource(5)\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: \"render\",\n        value: function render() {\n            return React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                    _next.Table,\n                    { dataSource: this.state.dataSource,\n                        loading: this.state.loading },\n                    React.createElement(_next.Table.Column, { title: \"Id1\", dataIndex: \"id\", width: 140 }),\n                    React.createElement(_next.Table.Column, { title: \"Time\", dataIndex: \"time\", width: 500 }),\n                    React.createElement(_next.Table.Column, { cell: _render, width: 200 })\n                ),\n                React.createElement(_next.Pagination, { onChange: this.onChange, className: \"page-demo\" })\n            );\n        }\n    }]);\n\n    return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), mountNode);})()</script><div class=\"highlight\"><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@alifd/next'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">dataSource</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">j</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> result <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">5</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            result<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n                title<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">Quotation for 1PCS Nano </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span><span class=\"token number\">3</span> <span class=\"token operator\">+</span> i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">.0 controller compatible</span><span class=\"token template-punctuation string\">`</span></span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n                id<span class=\"token punctuation\">:</span> <span class=\"token number\">100306660940</span> <span class=\"token operator\">+</span> i <span class=\"token operator\">+</span> j<span class=\"token punctuation\">,</span>\n                time<span class=\"token punctuation\">:</span> <span class=\"token number\">2000</span> <span class=\"token operator\">+</span> j\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token keyword\">return</span> result<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function-variable function\">render</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">value<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> record</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Remove(</span><span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>id<span class=\"token punctuation\">}</span><span class=\"token plain-text\">)</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n\n    <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">props</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n            dataSource<span class=\"token punctuation\">:</span> <span class=\"token function\">dataSource</span><span class=\"token punctuation\">(</span><span class=\"token number\">5</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">currentPage</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n            loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n                dataSource<span class=\"token punctuation\">:</span> <span class=\"token function\">dataSource</span><span class=\"token punctuation\">(</span>currentPage <span class=\"token operator\">*</span> <span class=\"token number\">5</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n                loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">200</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Table</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">}</span></span>\n                    <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Table.Column</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Id1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>id<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">140</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Table.Column</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Time<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>time<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">500</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Table.Column</span></span> <span class=\"token attr-name\">cell</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>render<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">200</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Table</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Pagination</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>page-demo<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">App</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre></div><style type=\"text/css\">.page-demo {\n    margin-top:10px;\n}</style><div class=\"highlight\"><pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">.page-demo</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span>10px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span></code></pre></div>"}