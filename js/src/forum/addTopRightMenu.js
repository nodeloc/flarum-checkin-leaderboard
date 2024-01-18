import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import Button from 'flarum/common/components/Button';

export default function () {
  extend(HeaderSecondary.prototype, 'items', function (items) {
    const checkinLeaderBoardIcon = app.forum.attribute("checkinLeaderBoardIcon");

    items.add(
      'CheckinLeaderboard',
      <Button
        className="Button Button--flat"
        style="width:36px"
        onclick={() => {
          window.location.href = app.route('checkinLeaderboard');
        }}
        icon={checkinLeaderBoardIcon}
      >
        {app.translator.trans('nodeloc-checkin-leaderboard.forum.leaderboard-name')}
      </Button>,
      15
    );
  });
}
