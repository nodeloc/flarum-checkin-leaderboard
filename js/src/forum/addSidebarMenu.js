import { extend } from 'flarum/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';

export default function addSidebarMenu() {
  extend(IndexPage.prototype, 'navItems', function (items) {
    const checkinLeaderBoardIcon = app.forum.attribute("checkinLeaderBoardIcon");

    items.add(
      'CheckinLeaderboard',
      <LinkButton icon={checkinLeaderBoardIcon} href={app.route('checkinLeaderboard')}>
        {app.translator.trans('nodeloc-checkin-leaderboard.forum.leaderboard-name')}
      </LinkButton>,
      15
    );

    return items;
  });
}
