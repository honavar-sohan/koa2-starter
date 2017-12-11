module.exports = {
    "extends": "airbnb-base",
    globals : {
        env : true,
        mongo : true,
        connectMongo : true,
        config : true
    },
    rules : {
        indent: [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
        "no-tabs": 0,        
    }
};