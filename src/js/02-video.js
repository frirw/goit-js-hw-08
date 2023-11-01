import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      console.log(seconds);
      localStorage.setItem('videoplayer-current-time', seconds);
    });
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime || 0);
