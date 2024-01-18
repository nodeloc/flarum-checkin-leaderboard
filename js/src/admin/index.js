import {extend, override} from 'flarum/extend';

app.initializers.add('nodeloc-checkin-leaderboard', () => {
  app.extensionData
    .for('nodeloc-checkin-leaderboard')
    .registerSetting({
      setting: 'nodeloc-checkin-leaderboard.checkinLeaderBoardIcon',
      label: app.translator.trans('nodeloc-checkin-leaderboard.admin.settings.leaderboard-icon'),
      help: app.translator.trans('nodeloc-checkin-leaderboard.admin.settings.leaderboard-icon-help'),
      type: 'string',
    })
    .registerSetting({
      setting: 'nodeloc-checkin-leaderboard.checkinLeaderBoardEntryPosition',
      label: app.translator.trans('nodeloc-checkin-leaderboard.admin.settings.leaderboard-entry-position'),
      type: 'select',
      options: {
        0: app.translator.trans('nodeloc-checkin-leaderboard.admin.settings.leaderboard-entry-sideNav'),
        1: app.translator.trans('nodeloc-checkin-leaderboard.admin.settings.leaderboard-entry-topRightMenu')
      },
    })
    .registerSetting({
      setting: 'nodeloc-checkin-leaderboard.checkinLeaderBoardHideMoneyText',
      label: app.translator.trans('nodeloc-checkin-leaderboard.admin.settings.leaderboard-hide-money-text'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'nodeloc-checkin-leaderboard.checkinLeaderBoardAdditionalInfo',
      label: app.translator.trans('nodeloc-checkin-leaderboard.admin.settings.leaderboard-additional-info'),
      help: app.translator.trans('nodeloc-checkin-leaderboard.admin.settings.leaderboard-additional-info-help'),
      type: 'string',
    })
    .registerSetting({
      setting: 'nodeloc-checkin-leaderboard.leaderboardMaxLoadCount',
      label: app.translator.trans('nodeloc-checkin-leaderboard.admin.settings.leaderboard-max-load-count'),
      placeholder:50,
      min:1,
      type: 'number',
    })
    .registerSetting({
      setting: 'nodeloc-checkin-leaderboard.leaderboardInitLoadCount',
      label: app.translator.trans('nodeloc-checkin-leaderboard.admin.settings.leaderboard-init-load-count'),
      placeholder:20,
      min:1,
      type: 'number',
    })
    .registerSetting({
      setting: 'nodeloc-checkin-leaderboard.leaderboardLoadMoreCount',
      label: app.translator.trans('nodeloc-checkin-leaderboard.admin.settings.leaderboard-load-more-count'),
      placeholder:10,
      min:1,
      type: 'number',
    })
    .registerPermission({
        icon: 'fas fa-sort-amount-up',
        label: app.translator.trans('nodeloc-checkin-leaderboard.admin.permission.allow_view_leaderboard'),
        permission: 'checkinLeaderboard.allowViewLeaderbaord',
      },
      'moderate',
      90
    );
});
