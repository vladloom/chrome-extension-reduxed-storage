const presets = [
  [
    "@babel/env",
    {
      targets: {
        chrome: "56",
      },
      useBuiltIns: "entry",
    },
  ],
]

module.exports = { presets }