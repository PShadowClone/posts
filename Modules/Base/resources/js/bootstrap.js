window._ = require('lodash')
/**
 * register project's env
 * @author Amr
 */
require('./utils/settings')
/**
 * register project's env
 * @author Amr
 */
require('./style/index.js')
/**
 * register project's global mixins
 * @author Amr
 */
require('./mixins')

/**
 * register common components
 * @author Amr
 */
require('./common')
/**
 * register project's components
 * @author Amr
 */
require('./structure/RegisterComponents')

/**
 * register project's modules's mixins
 * @author Amr
 */
require('./structure/RegisterMixins')

/**
 * @author khalid
 * register plugins
 */
require('./plugins')

/**
 * @author khalid
 * register common components
 */
require('./common/components')

/**
 * register project's buses
 * @author Amr
 */
require('./buses')





