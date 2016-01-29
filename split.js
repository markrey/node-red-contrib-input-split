/**
 * Copyright 2015 mcarboni@redant.com
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/



 module.exports = function(RED) {
    "use strict";

    function inputSplitNode(n) {
        var node = this;

        RED.nodes.createNode(this,n);
        this.inputProps = n.inputProps.map(function (a) {
            return a.split(".");
        });

        var l = this.inputProps.length;

        this.on('input',function (msg) {
            var outputs = [];
            for (var i=0;i<l;i++) {
                //Find the property
                var prop = node.inputProps[i].reduce(function (obj, i) {
                    return (typeof obj === 'object')
                            ? obj[i]
                            : obj;
                }, msg);

                if (prop !== undefined) {
                    var output = RED.util.cloneMessage(msg);
                    output.payload = prop;
                    outputs.push(output);
                } else {
                    outputs.push(null);
                }
            }
            node.send(outputs);
        });

    }

    RED.nodes.registerType("Input Split",inputSplitNode);
};
