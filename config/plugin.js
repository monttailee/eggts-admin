'use strict';
//启用插件
/** @type Egg.EggPlugin */
module.exports = {
  nunjucks:{
    enable: true,
    package: 'egg-view-nunjucks',
  },
  mysql:{
    enable: true,
    package: 'egg-mysql',
  },
  sequelize:{
    enable: true,
    package: 'egg-sequelize',
  },
  passport:{
    enable: true,
    package: 'egg-passport',
  }
};