<?php

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Nodeloc\CheckinLeaderboard\Controllers\CheckinLeaderboardController;
use Nodeloc\CheckinLeaderboard\Controllers\ListCheckinLeaderboardController;

$extend = [
    (new Extend\Frontend('admin'))->js(__DIR__.'/js/dist/admin.js'),
    (new Extend\Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js')->css(__DIR__.'/less/forum.less')
        ->route('/checkinLeaderboard', 'checkinLeaderboard.index', CheckinLeaderboardController::class),

    (new Extend\Locales(__DIR__ . '/locale')),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('allowViewLeaderbaord', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("checkinLeaderboard.allowViewLeaderbaord");
        }),

    (new Extend\Routes('api'))
        ->get('/checkinLeaderboard', 'checkinLeaderboard.get', ListCheckinLeaderboardController::class),

    (new Extend\Settings())
        ->serializeToForum('checkinLeaderBoardIcon', 'nodeloc-checkin-leaderboard.checkinLeaderBoardIcon')
        ->serializeToForum('checkinLeaderBoardEntryPosition', 'nodeloc-checkin-leaderboard.checkinLeaderBoardEntryPosition')
        ->serializeToForum('checkinLeaderBoardAdditionalInfo', 'nodeloc-checkin-leaderboard.checkinLeaderBoardAdditionalInfo')
        ->serializeToForum('checkinLeaderBoardHideMoneyText', 'nodeloc-checkin-leaderboard.checkinLeaderBoardHideMoneyText')
        ->serializeToForum('leaderboardMaxLoadCount', 'nodeloc-checkin-leaderboard.leaderboardMaxLoadCount', 'intval')
        ->serializeToForum('leaderboardInitLoadCount', 'nodeloc-checkin-leaderboard.leaderboardInitLoadCount', 'intval')
        ->serializeToForum('leaderboardLoadMoreCount', 'nodeloc-checkin-leaderboard.leaderboardLoadMoreCount', 'intval'),
];

return $extend;
