'use strict';
module.exports = (robot) => {
    robot.hear(/サラダチキン/i,(msg)=> {
        const username = msg.message.user.name;
        msg.send('今日も糖質制限頑張れー'+username);
    });
};
