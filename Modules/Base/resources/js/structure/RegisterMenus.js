import Bundle from './Bundle';

let menu = [];
/**
 * @author Khalid
 * publish Module Menu
 */
Bundle.forEach(module => {
    menu = menu.concat(module.Menu)
})

/**
 *
 */

export default menu;
