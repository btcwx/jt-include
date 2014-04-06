jt include
===
![travis](https://api.travis-ci.org/wyicwx/jt-include.png)   实现include函数

##如何在一个文件内include另外一个文件？

首先，在将要处理的文件内打上include的标志 <%= include('xxx') %>，如下例子

```
<html>
	<head>
		<title>include</title>
		<style type="text/css">
			<%= include('css') %>
		</style>
	</head>
	<body>
		<%= include('./body.html') %>

		<%= include('script') %>
	</body>
</html>
```

include支持两种模式

在源文件中传递参数
```
<%= include('./body.html') %>
```

通过配置文件传递alias参数
```
<%= include('script') %>
```

####在源文件中传递参数

源文件中传递include参数，支持相对和绝对地址。

参数中include的相对文件是相对于源文件的路径。

使用下面的方式include的文件是相对于base目录下。 
```
~/file
```

####在配置文件中传递参数
```
var fs = {
	'include.js': [{
		'processor': 'jt-include',
		'file': 'index.html',
		'jt-include': {
			'css': './css.css',
			'script': './js.js'
		}
	}]
}
```
也可以通过配置文件传递include参数，和源文件中传递参数不同的是，相对路径是相对于fs中的虚拟文件路径。


####其他

include不支持value的processor传值模型，value类型使用include的processor会报错。
include的参数指定的文件没有读取到的情况下等价于include('');

##LICENSES

The MIT License (MIT)

Copyright (c) 2014 wyicwx<[wyicwx@gmail.com](mailto:wyicwx@gmail.com)>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.