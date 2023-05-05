import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(OnPlay, 1000));
player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

function OnPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}
