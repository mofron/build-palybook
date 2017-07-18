/**
 * @file main.js
 * @brief app code before pack
 */

let start = () => {
    try {
        
    } catch (e) {
        console.error(e.stack);
    }
}

try {
    require('mofron');
    require('expose-loader?app!../../conf/namesp.js');
    start();
} catch (e) {
    console.error(e.stack);
}
/* end of file */
