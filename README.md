Node-red Input Split
========================

[![RedConnect Approved](https://img.shields.io/badge/RedConnect-Approved-brightgreen.svg?style=flat)](https://www.redconnect.io/addons/input-split/)

Install
-------

Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-input-split

## Overview

Split an input on multiple outputs based on the provided configuration.


## Example

 Assuming that our configuration is to split the input on :


> 	payload.a --> output 1
> 	payload.b --> output 2
> 	payload.c --> output 3

The below input will become


```JSON
{
   	"payload" : {
   		"a" : 2,
   		"b" : 3,
   		"c" : 4
   	},
   	"_other" : 4
}
```

Output 1

```JSON
{
   	"payload" : 2,
   	"_other" : 4
}
```

Output 2

```JSON
{
   	"payload" : 3,
   	"_other" : 4
}
```

Output 3

```JSON
{
   	"payload" : 4,
   	"_other" : 4
}
```


## Input Split

This node defines from which point the flow splits.

The node have the following properties :

### Properties to Split

Here you define how many couples of input [tiny arrow] --> outputs that you want, the value in output is always putted as payload.
