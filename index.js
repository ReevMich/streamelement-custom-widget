var FIREWORK_REWARD_ID = '5cd182d8-51b9-4c61-89c9-440880000a5b';

ComfyJS.onChat = (user, message, flags, self, extra) => {
    if (flags.customReward) {

        switch (extra.customRewardId) {
            case FIREWORK_REWARD_ID:
                triggerConfettiReward(user, message)
                break;
            default: console.log('I DONT KNOW WHAT HAPPENED: CANT FIND REWARD_ID');
                break;
        }

    }
}

function triggerConfettiReward(user, message) {

    if (wasStartedAtSomePoint) {
        InitConfettiPlugin()
    }
    StartConfetti();

    setTimeout(() => {
        StopConfetti();
        console.log('ALL DONE WITH FIREWORKS')
    }, 10000)
}

ComfyJS.Init('Captainjunebug');

