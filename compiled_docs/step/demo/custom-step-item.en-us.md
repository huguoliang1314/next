{"title":"Step.Item custom step node render function","meta":{"title":"Step.Item custom step node render function","description":"\n<p><code>Step.Item</code> has three states by default, which are <code>wait</code>, <code>process</code>, <code>finish</code>.\nUsers can customize rendering by passing the itemRender property.</p>\n","order":"4"},"codes":{"jsx":"import { Step, Icon } from '@alifd/next';\n\nconst steps = ['one', 'two', 'three', 'four'];\n\nfunction itemRender(index) {\n    return <div className=\"custom-node1\"><span>{index + 1}</span></div>;\n}\n\nfunction itemRender2(index, status) {\n    return <div className=\"custom-node2\">{status === 'finish' ? <Icon type=\"success\" /> : <span>{index + 1}</span>} </div>;\n}\n\nReactDOM.render(<div className=\"fusion-demo\">\n    <div className=\"fusion-demo-item\">\n        <Step current={2} animation={false} itemRender={itemRender}>\n            {\n                steps.map(item => <Step.Item key={item} title={item} />)\n            }\n        </Step>\n    </div>\n\n    <div className=\"fusion-demo-item\">\n        <Step current={2} animation={false} itemRender={itemRender2}>\n            {\n                steps.map(item => <Step.Item key={item} title={item} />)\n            }\n        </Step>\n    </div>\n</div>, mountNode);\n","css":".fusion-demo-item {\n    margin: 15px 0;\n}\n.custom-node1 {\n    height: 100%;\n    width: 100%;\n    border-radius: 20%;\n    border: 1px dashed #3E71F1;\n    text-align: center;\n}\n.custom-node1 span {\n    font-size: 12px;\n\n    position: absolute;\n    top: 50%;\n    text-align: center;\n    width: 100%;\n    left: 0;\n    transform: translateY(-50%);\n}\n.custom-node2 {\n    height: 100%;\n    width: 100%;\n    border-radius: 20%;\n    border: 1px dashed #3E71F1;\n    text-align: center;\n    background: #3E71F1;\n    color: #fff;\n    position: relative;\n}\n\n.custom-node2 span, .custom-node2 i {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 0;\n    width: 100%;\n    text-align: center;\n}\n"},"body":"\n````jsx\nimport { Step, Icon } from '@alifd/next';\n\nconst steps = ['one', 'two', 'three', 'four'];\n\nfunction itemRender(index) {\n    return <div className=\"custom-node1\"><span>{index + 1}</span></div>;\n}\n\nfunction itemRender2(index, status) {\n    return <div className=\"custom-node2\">{status === 'finish' ? <Icon type=\"success\" /> : <span>{index + 1}</span>} </div>;\n}\n\nReactDOM.render(<div className=\"fusion-demo\">\n    <div className=\"fusion-demo-item\">\n        <Step current={2} animation={false} itemRender={itemRender}>\n            {\n                steps.map(item => <Step.Item key={item} title={item} />)\n            }\n        </Step>\n    </div>\n\n    <div className=\"fusion-demo-item\">\n        <Step current={2} animation={false} itemRender={itemRender2}>\n            {\n                steps.map(item => <Step.Item key={item} title={item} />)\n            }\n        </Step>\n    </div>\n</div>, mountNode);\n````\n\n````css\n.fusion-demo-item {\n    margin: 15px 0;\n}\n.custom-node1 {\n    height: 100%;\n    width: 100%;\n    border-radius: 20%;\n    border: 1px dashed #3E71F1;\n    text-align: center;\n}\n.custom-node1 span {\n    font-size: 12px;\n\n    position: absolute;\n    top: 50%;\n    text-align: center;\n    width: 100%;\n    left: 0;\n    transform: translateY(-50%);\n}\n.custom-node2 {\n    height: 100%;\n    width: 100%;\n    border-radius: 20%;\n    border: 1px dashed #3E71F1;\n    text-align: center;\n    background: #3E71F1;\n    color: #fff;\n    position: relative;\n}\n\n.custom-node2 span, .custom-node2 i {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 0;\n    width: 100%;\n    text-align: center;\n}\n````","html":"<script>(function(){'use strict';\n\nvar _next = require('@alifd/next');\n\nvar steps = ['one', 'two', 'three', 'four'];\n\nfunction itemRender(index) {\n    return React.createElement(\n        'div',\n        { className: 'custom-node1' },\n        React.createElement(\n            'span',\n            null,\n            index + 1\n        )\n    );\n}\n\nfunction itemRender2(index, status) {\n    return React.createElement(\n        'div',\n        { className: 'custom-node2' },\n        status === 'finish' ? React.createElement(_next.Icon, { type: 'success' }) : React.createElement(\n            'span',\n            null,\n            index + 1\n        ),\n        ' '\n    );\n}\n\nReactDOM.render(React.createElement(\n    'div',\n    { className: 'fusion-demo' },\n    React.createElement(\n        'div',\n        { className: 'fusion-demo-item' },\n        React.createElement(\n            _next.Step,\n            { current: 2, animation: false, itemRender: itemRender },\n            steps.map(function (item) {\n                return React.createElement(_next.Step.Item, { key: item, title: item });\n            })\n        )\n    ),\n    React.createElement(\n        'div',\n        { className: 'fusion-demo-item' },\n        React.createElement(\n            _next.Step,\n            { current: 2, animation: false, itemRender: itemRender2 },\n            steps.map(function (item) {\n                return React.createElement(_next.Step.Item, { key: item, title: item });\n            })\n        )\n    )\n), mountNode);})()</script><div class=\"highlight\"><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Step<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@alifd/next'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> steps <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'one'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'two'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'three'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'four'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">itemRender</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">index</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom-node1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>index <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">itemRender2</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">index<span class=\"token punctuation\">,</span> status</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom-node2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'finish'</span> <span class=\"token operator\">?</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> <span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>index <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span><span class=\"token plain-text\"> </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>fusion-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>fusion-demo-item<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Step</span></span> <span class=\"token attr-name\">current</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">animation</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">itemRender</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>itemRender<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token punctuation\">{</span>\n                steps<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Step.Item</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Step</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>fusion-demo-item<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Step</span></span> <span class=\"token attr-name\">current</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">animation</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">itemRender</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>itemRender2<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token punctuation\">{</span>\n                steps<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Step.Item</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Step</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre></div><style type=\"text/css\">.fusion-demo-item {\n    margin: 15px 0;\n}\n.custom-node1 {\n    height: 100%;\n    width: 100%;\n    border-radius: 20%;\n    border: 1px dashed #3E71F1;\n    text-align: center;\n}\n.custom-node1 span {\n    font-size: 12px;\n\n    position: absolute;\n    top: 50%;\n    text-align: center;\n    width: 100%;\n    left: 0;\n    transform: translateY(-50%);\n}\n.custom-node2 {\n    height: 100%;\n    width: 100%;\n    border-radius: 20%;\n    border: 1px dashed #3E71F1;\n    text-align: center;\n    background: #3E71F1;\n    color: #fff;\n    position: relative;\n}\n\n.custom-node2 span, .custom-node2 i {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 0;\n    width: 100%;\n    text-align: center;\n}</style><div class=\"highlight\"><pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">.fusion-demo-item</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> 15px 0<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.custom-node1</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 100%<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 100%<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> 20%<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> 1px dashed #3E71F1<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.custom-node1 span</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 12px<span class=\"token punctuation\">;</span>\n\n    <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> 50%<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 100%<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> 0<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">transform</span><span class=\"token punctuation\">:</span> <span class=\"token function\">translateY</span><span class=\"token punctuation\">(</span>-50%<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.custom-node2</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 100%<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 100%<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> 20%<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> 1px dashed #3E71F1<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> #3E71F1<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #fff<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\">.custom-node2 span, .custom-node2 i</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> 50%<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">transform</span><span class=\"token punctuation\">:</span> <span class=\"token function\">translateY</span><span class=\"token punctuation\">(</span>-50%<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> 0<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 100%<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span></code></pre></div>"}