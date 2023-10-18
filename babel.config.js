module.exports = {
    presets: [
      
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ['@babel/preset-react',{runtime:"automatic"}],
      ["@parcel/babel-preset-env"]
  
  ],
  };