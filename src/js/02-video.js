import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const saveCurrentTime = (time) => {
  localStorage.setItem('videoplayer-current-time', time);
};

const restoreCurrentTime = () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
};

const handleTimeUpdate = throttle((data) => {
  const currentTime = data.seconds;
  saveCurrentTime(currentTime);
}, 1000);

player.on('timeupdate', handleTimeUpdate);

player.ready().then(restoreCurrentTime);
