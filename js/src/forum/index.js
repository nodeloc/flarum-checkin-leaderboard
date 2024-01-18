import app from 'flarum/forum/app';
import { extend } from 'flarum/extend';
import attachMenu from './attachMenu';
import CheckinLeaderboardIndexPage from './components/CheckinLeaderboardIndexPage';

app.initializers.add('nodeloc-checkin-leaderboard', () => {
  app.routes['checkinLeaderboard'] = {
    path: '/checkinLeaderboard',
    component: CheckinLeaderboardIndexPage,
  };

  attachMenu();
});