<?php

namespace Nodeloc\CheckinLeaderboard\Controllers;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;
use Carbon\Carbon;
use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Http\UrlGenerator;

class ListCheckinLeaderboardController extends AbstractListController{
    public $serializer = UserSerializer::class;
    protected $url;

    public function __construct(UrlGenerator $url){
        $this->url = $url;
    }

    protected function data(ServerRequestInterface $request, Document $document){
        $params = $request->getQueryParams();
        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);
        $actor = $request->getAttribute('actor');
        $allowViewLeaderBoard = $request->getAttribute('actor')->can('checkinLeaderboard.allowViewLeaderbaord');
        // 获取当前日期，取当前日期起始的时间
        $startOfDay = Carbon::now()->startOfDay();
        $endOfDay = Carbon::now()->endOfDay();

        if($allowViewLeaderBoard){
            $checkinLeaderboardResult = User::where('last_checkin_time', '>', $startOfDay)
                ->skip($offset)
                ->take($limit + 1)
                ->orderBy('last_checkin_money', 'desc')
                ->get();
            $hasMoreResults = $limit > 0 && $checkinLeaderboardResult->count() > $limit;

            if($hasMoreResults){
                $checkinLeaderboardResult->pop();
            }

            $document->addPaginationLinks(
                $this->url->to('api')->route('checkinLeaderboard.get'),
                $params,
                $offset,
                $limit,
                $hasMoreResults?null:0
            );

            return $checkinLeaderboardResult;
        }
    }

}
