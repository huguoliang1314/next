{"meta":"<h2 id=\"&#x5F00;&#x53D1;&#x6307;&#x5357;\">&#x5F00;&#x53D1;&#x6307;&#x5357;<a href=\"#&#x5F00;&#x53D1;&#x6307;&#x5357;\" class=\"anchor\">#</a></h2><h3 id=\"&#x4F55;&#x65F6;&#x4F7F;&#x7528;\">&#x4F55;&#x65F6;&#x4F7F;&#x7528;<a href=\"#&#x4F55;&#x65F6;&#x4F7F;&#x7528;\" class=\"anchor\">#</a></h3><p>&#x8868;&#x5355;&#x8F93;&#x5165;&#xFF0C;&#x4E00;&#x822C;&#x914D;&#x5408;Form&#x4F7F;&#x7528;</p>\n<h2 id=\"api\">API<a href=\"#api\" class=\"anchor\">#</a></h2>","api":"<h3 id=\"input\">Input<a href=\"#input\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>&#x5F53;&#x524D;&#x503C;</td>\n<td>String/Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>&#x5C3A;&#x5BF8;<br><br><strong>&#x53EF;&#x9009;&#x503C;</strong>:<br>&apos;small&apos;(&#x5C0F;)<br>&apos;medium&apos;(&#x4E2D;)<br>&apos;large&apos;(&#x5927;)</td>\n<td>Enum</td>\n<td>&apos;medium&apos;</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>&#x521D;&#x59CB;&#x5316;&#x503C;</td>\n<td>String/Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>&#x53D1;&#x751F;&#x6539;&#x53D8;&#x7684;&#x65F6;&#x5019;&#x89E6;&#x53D1;&#x7684;&#x56DE;&#x8C03;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br>Function(value: String, e: Event) =&gt; void<br><strong>&#x53C2;&#x6570;</strong>:<br><em>value</em>: {String} &#x6570;&#x636E;<br>_e_: {Event} DOM&#x4E8B;&#x4EF6;&#x5BF9;&#x8C61;</td>\n<td>Function</td>\n<td>func.noop</td>\n</tr>\n<tr>\n<td>onKeyDown</td>\n<td>&#x952E;&#x76D8;&#x6309;&#x4E0B;&#x7684;&#x65F6;&#x5019;&#x89E6;&#x53D1;&#x7684;&#x56DE;&#x8C03;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br>Function(e: Event, opts: Object) =&gt; void<br><strong>&#x53C2;&#x6570;</strong>:<br>_e_: {Event} DOM&#x4E8B;&#x4EF6;&#x5BF9;&#x8C61;<br><em>opts</em>: {Object} &#x53EF;&#x6269;&#x5C55;&#x7684;&#x9644;&#x52A0;&#x4FE1;&#x606F;&#xFF1A;<br> - opts.overMaxLength: {Boolean} &#x5DF2;&#x8D85;&#x51FA;&#x6700;&#x5927;&#x957F;&#x5EA6;<br> - opts.beTrimed: {Boolean} &#x8F93;&#x5165;&#x7684;&#x7A7A;&#x683C;&#x88AB;&#x6E05;&#x7406;</td>\n<td>Function</td>\n<td>func.noop</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>&#x7981;&#x7528;&#x72B6;&#x6001;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>maxLength</td>\n<td>&#x6700;&#x5927;&#x957F;&#x5EA6;</td>\n<td>Number</td>\n<td>null</td>\n</tr>\n<tr>\n<td>hasLimitHint</td>\n<td>&#x662F;&#x5426;&#x5C55;&#x73B0;&#x6700;&#x5927;&#x957F;&#x5EA6;&#x6837;&#x5F0F;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>cutString</td>\n<td>&#x5F53;&#x8BBE;&#x7F6E;&#x4E86;maxLength&#x65F6;&#xFF0C;&#x662F;&#x5426;&#x622A;&#x65AD;&#x8D85;&#x51FA;&#x5B57;&#x7B26;&#x4E32;</td>\n<td>Boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>readOnly</td>\n<td>&#x53EA;&#x8BFB;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>trim</td>\n<td>onChange&#x8FD4;&#x56DE;&#x4F1A;&#x81EA;&#x52A8;&#x53BB;&#x9664;&#x5934;&#x5C3E;&#x7A7A;&#x5B57;&#x7B26;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>&#x8F93;&#x5165;&#x63D0;&#x793A;</td>\n<td>String</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onFocus</td>\n<td>&#x83B7;&#x53D6;&#x7126;&#x70B9;&#x65F6;&#x5019;&#x89E6;&#x53D1;&#x7684;&#x56DE;&#x8C03;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br>Function() =&gt; void</td>\n<td>Function</td>\n<td>func.noop</td>\n</tr>\n<tr>\n<td>onBlur</td>\n<td>&#x5931;&#x53BB;&#x7126;&#x70B9;&#x65F6;&#x5019;&#x89E6;&#x53D1;&#x7684;&#x56DE;&#x8C03;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br>Function() =&gt; void</td>\n<td>Function</td>\n<td>func.noop</td>\n</tr>\n<tr>\n<td>getValueLength</td>\n<td>&#x81EA;&#x5B9A;&#x4E49;&#x5B57;&#x7B26;&#x4E32;&#x8BA1;&#x7B97;&#x957F;&#x5EA6;&#x65B9;&#x5F0F;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br>Function(value: String) =&gt; Number<br><strong>&#x53C2;&#x6570;</strong>:<br><em>value</em>: {String} &#x6570;&#x636E;<br><strong>&#x8FD4;&#x56DE;&#x503C;</strong>:<br>{Number} &#x81EA;&#x5B9A;&#x4E49;&#x957F;&#x5EA6;<br></td>\n<td>Function</td>\n<td>func.noop</td>\n</tr>\n<tr>\n<td>htmlType</td>\n<td>&#x539F;&#x751F;type</td>\n<td>String</td>\n<td>-</td>\n</tr>\n<tr>\n<td>state</td>\n<td>&#x72B6;&#x6001;<br><br><strong>&#x53EF;&#x9009;&#x503C;</strong>:<br>&apos;error&apos;(&#x9519;&#x8BEF;)<br>&apos;loading&apos;(&#x6821;&#x9A8C;&#x4E2D;)<br>&apos;success&apos;(&#x6210;&#x529F;)</td>\n<td>Enum</td>\n<td>-</td>\n</tr>\n<tr>\n<td>label</td>\n<td>label</td>\n<td>ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>hasClear</td>\n<td>&#x662F;&#x5426;&#x51FA;&#x73B0;clear&#x6309;&#x94AE;</td>\n<td>Boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>hasBorder</td>\n<td>&#x662F;&#x5426;&#x6709;&#x8FB9;&#x6846;</td>\n<td>Boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>onPressEnter</td>\n<td>&#x6309;&#x4E0B;&#x56DE;&#x8F66;&#x7684;&#x56DE;&#x8C03;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br>Function() =&gt; void</td>\n<td>Function</td>\n<td>func.noop</td>\n</tr>\n<tr>\n<td>hint</td>\n<td>&#x6C34;&#x5370; (Icon&#x7684;type&#x7C7B;&#x578B;&#xFF0C;&#x548C;hasClear&#x5360;&#x7528;&#x4E00;&#x4E2A;&#x5730;&#x65B9;)</td>\n<td>String</td>\n<td>-</td>\n</tr>\n<tr>\n<td>innerBefore</td>\n<td>&#x6587;&#x5B57;&#x524D;&#x9644;&#x52A0;&#x5185;&#x5BB9;</td>\n<td>ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>innerAfter</td>\n<td>&#x6587;&#x5B57;&#x540E;&#x9644;&#x52A0;&#x5185;&#x5BB9;</td>\n<td>ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>addonBefore</td>\n<td>&#x8F93;&#x5165;&#x6846;&#x524D;&#x9644;&#x52A0;&#x5185;&#x5BB9;</td>\n<td>ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>addonAfter</td>\n<td>&#x8F93;&#x5165;&#x6846;&#x540E;&#x9644;&#x52A0;&#x5185;&#x5BB9;</td>\n<td>ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>addonTextBefore</td>\n<td>&#x8F93;&#x5165;&#x6846;&#x524D;&#x9644;&#x52A0;&#x6587;&#x5B57;</td>\n<td>ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>addonTextAfter</td>\n<td>&#x8F93;&#x5165;&#x6846;&#x540E;&#x9644;&#x52A0;&#x6587;&#x5B57;</td>\n<td>ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>autoComplete</td>\n<td>(&#x539F;&#x751F;input&#x652F;&#x6301;)</td>\n<td>String</td>\n<td>&apos;off&apos;</td>\n</tr>\n<tr>\n<td>autoFocus</td>\n<td>&#x81EA;&#x52A8;&#x805A;&#x7126;(&#x539F;&#x751F;input&#x652F;&#x6301;)</td>\n<td>Boolean</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"input-textarea\">Input.TextArea<a href=\"#input-textarea\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>&#x5F53;&#x524D;&#x503C;</td>\n<td>String/Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>&#x521D;&#x59CB;&#x5316;&#x503C;</td>\n<td>String/Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>&#x53D1;&#x751F;&#x6539;&#x53D8;&#x7684;&#x65F6;&#x5019;&#x89E6;&#x53D1;&#x7684;&#x56DE;&#x8C03;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br>Function(value: String, e: Event) =&gt; void<br><strong>&#x53C2;&#x6570;</strong>:<br><em>value</em>: {String} &#x6570;&#x636E;<br>_e_: {Event} DOM&#x4E8B;&#x4EF6;&#x5BF9;&#x8C61;</td>\n<td>Function</td>\n<td>func.noop</td>\n</tr>\n<tr>\n<td>onKeyDown</td>\n<td>&#x952E;&#x76D8;&#x6309;&#x4E0B;&#x7684;&#x65F6;&#x5019;&#x89E6;&#x53D1;&#x7684;&#x56DE;&#x8C03;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br>Function(e: Event, opts: Object) =&gt; void<br><strong>&#x53C2;&#x6570;</strong>:<br>_e_: {Event} DOM&#x4E8B;&#x4EF6;&#x5BF9;&#x8C61;<br><em>opts</em>: {Object} &#x53EF;&#x6269;&#x5C55;&#x7684;&#x9644;&#x52A0;&#x4FE1;&#x606F;&#xFF1A;<br> - opts.overMaxLength: {Boolean} &#x5DF2;&#x8D85;&#x51FA;&#x6700;&#x5927;&#x957F;&#x5EA6;<br> - opts.beTrimed: {Boolean} &#x8F93;&#x5165;&#x7684;&#x7A7A;&#x683C;&#x88AB;&#x6E05;&#x7406;</td>\n<td>Function</td>\n<td>func.noop</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>&#x7981;&#x7528;&#x72B6;&#x6001;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>maxLength</td>\n<td>&#x6700;&#x5927;&#x957F;&#x5EA6;</td>\n<td>Number</td>\n<td>null</td>\n</tr>\n<tr>\n<td>hasLimitHint</td>\n<td>&#x662F;&#x5426;&#x5C55;&#x73B0;&#x6700;&#x5927;&#x957F;&#x5EA6;&#x6837;&#x5F0F;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>cutString</td>\n<td>&#x5F53;&#x8BBE;&#x7F6E;&#x4E86;maxLength&#x65F6;&#xFF0C;&#x662F;&#x5426;&#x622A;&#x65AD;&#x8D85;&#x51FA;&#x5B57;&#x7B26;&#x4E32;</td>\n<td>Boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>readOnly</td>\n<td>&#x53EA;&#x8BFB;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>trim</td>\n<td>onChange&#x8FD4;&#x56DE;&#x4F1A;&#x81EA;&#x52A8;&#x53BB;&#x9664;&#x5934;&#x5C3E;&#x7A7A;&#x5B57;&#x7B26;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>&#x8F93;&#x5165;&#x63D0;&#x793A;</td>\n<td>String</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onFocus</td>\n<td>&#x83B7;&#x53D6;&#x7126;&#x70B9;&#x65F6;&#x5019;&#x89E6;&#x53D1;&#x7684;&#x56DE;&#x8C03;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br>Function() =&gt; void</td>\n<td>Function</td>\n<td>func.noop</td>\n</tr>\n<tr>\n<td>onBlur</td>\n<td>&#x5931;&#x53BB;&#x7126;&#x70B9;&#x65F6;&#x5019;&#x89E6;&#x53D1;&#x7684;&#x56DE;&#x8C03;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br>Function() =&gt; void</td>\n<td>Function</td>\n<td>func.noop</td>\n</tr>\n<tr>\n<td>getValueLength</td>\n<td>&#x81EA;&#x5B9A;&#x4E49;&#x5B57;&#x7B26;&#x4E32;&#x8BA1;&#x7B97;&#x957F;&#x5EA6;&#x65B9;&#x5F0F;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br>Function(value: String) =&gt; Number<br><strong>&#x53C2;&#x6570;</strong>:<br><em>value</em>: {String} &#x6570;&#x636E;<br><strong>&#x8FD4;&#x56DE;&#x503C;</strong>:<br>{Number} &#x81EA;&#x5B9A;&#x4E49;&#x957F;&#x5EA6;<br></td>\n<td>Function</td>\n<td>func.noop</td>\n</tr>\n<tr>\n<td>htmlType</td>\n<td>&#x539F;&#x751F;type</td>\n<td>String</td>\n<td>-</td>\n</tr>\n<tr>\n<td>state</td>\n<td>&#x72B6;&#x6001;<br><br><strong>&#x53EF;&#x9009;&#x503C;</strong>:<br>&apos;error&apos;(&#x9519;&#x8BEF;)</td>\n<td>Enum</td>\n<td>-</td>\n</tr>\n<tr>\n<td>autoHeight</td>\n<td>&#x81EA;&#x52A8;&#x9AD8;&#x5EA6; true / {minRows: 2, maxRows: 4}</td>\n<td>Boolean/Object</td>\n<td>false</td>\n</tr>\n<tr>\n<td>rows</td>\n<td>&#x591A;&#x884C;&#x6587;&#x672C;&#x6846;&#x9AD8;&#x5EA6; <br>(&#x4E0D;&#x8981;&#x76F4;&#x63A5;&#x7528;height&#x8BBE;&#x7F6E;&#x591A;&#x884C;&#x6587;&#x672C;&#x6846;&#x7684;&#x9AD8;&#x5EA6;, ie9 10&#x4F1A;&#x6709;&#x517C;&#x5BB9;&#x6027;&#x95EE;&#x9898;)</td>\n<td>Number</td>\n<td>4</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"input-group\">Input.Group<a href=\"#input-group\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>addonBefore</td>\n<td>&#x8F93;&#x5165;&#x6846;&#x524D;&#x9644;&#x52A0;&#x5185;&#x5BB9;</td>\n<td>ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>addonBeforeClassName</td>\n<td>&#x8F93;&#x5165;&#x6846;&#x524D;&#x9644;&#x52A0;&#x5185;&#x5BB9;css</td>\n<td>String</td>\n<td>-</td>\n</tr>\n<tr>\n<td>addonAfter</td>\n<td>&#x8F93;&#x5165;&#x6846;&#x540E;&#x9644;&#x52A0;&#x5185;&#x5BB9;</td>\n<td>ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>addonAfterClassName</td>\n<td>&#x8F93;&#x5165;&#x6846;&#x540E;&#x989D;&#x5916;css</td>\n<td>String</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h2 id=\"input-textarea-&#x5185;&#x90E8;&#x51FD;&#x6570;-&#x901A;&#x8FC7;refs&#x83B7;&#x53D6;\">Input/TextArea &#x5185;&#x90E8;&#x51FD;&#x6570;(&#x901A;&#x8FC7;refs&#x83B7;&#x53D6;)<a href=\"#input-textarea-&#x5185;&#x90E8;&#x51FD;&#x6570;-&#x901A;&#x8FC7;refs&#x83B7;&#x53D6;\" class=\"anchor\">#</a></h2><table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getInputNode</td>\n<td>&#x83B7;&#x53D6;&#x771F;&#x6B63;input&#x8282;&#x70B9;</td>\n<td>Function</td>\n<td></td>\n</tr>\n<tr>\n<td>focus</td>\n<td>&#x83B7;&#x53D6;&#x7126;&#x70B9;<br><br><strong>&#x7B7E;&#x540D;</strong>:<br> Function(start:Number, end: Number)<br><strong>&#x53C2;&#x6570;</strong>:<br><em>start</em>: {Number} &#x5149;&#x6807;&#x8D77;&#x59CB;&#x4F4D;&#x7F6E;<br><em>end</em>: {Number} &#x9009;&#x62E9;&#x7ED3;&#x675F;&#x4F4D;&#x7F6E;</td>\n<td>Function</td>\n</tr>\n</tbody>\n</table>\n"}