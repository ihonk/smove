var direction = require("direction")
cc.Class({
    extends: cc.Component,

    properties: {
        // label: {
        //     default: null,
        //     type: cc.Label
        // },
        // defaults, set visually when attaching this script to the Canvas
        playPrefab: {
            default: null,
            type: cc.Prefab
        },
        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        centerNode: {
            default: null,
            type: cc.Node
        },
    },

    // use this for initialization
    onLoad: function () {
        var player = cc.instantiate(this.playPrefab);
        this.node.addChild(player);
        // newStar.setPosition(cc.p(0,0));

        this.schedule(function() {
            this.createBlock();
        }.bind(this), 1);
    },

    createBlock: function() {
        var random = cc.rand();
        var dir = Math.round(random) % 4;
        this.createOneBlock(cc.p(this.centerNode.x - 80,cc.winSize.height),5,dir);
        this.createOneBlock(cc.p(this.centerNode.x - 80,cc.winSize.height),5,dir);
    },

    // called every frame
    update: function (dt) {

    },

    createOneBlock: function(startPos,speed,dir) {
        var newBlock = cc.instantiate(this.blockPrefab);
        this.node.addChild(newBlock);
        newBlock.setPosition(startPos);
        var blockInstance = newBlock.getComponent('block');
        newBlock.getComponent('block').init(speed,dir);
    }
});
