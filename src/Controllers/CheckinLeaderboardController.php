<?php

namespace Nodeloc\CheckinLeaderboard\Controllers;

use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface;

class CheckinLeaderboardController{
    public function __invoke(Document $document, ServerRequestInterface $request){
        return $document;
    }
}
