import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';

import addSidebarMenu from './addSidebarMenu';
import addTopRightMenu from './addTopRightMenu';
import SessionDropdown from 'flarum/forum/components/SessionDropdown';

export default function () {
  extend(SessionDropdown.prototype, 'items', function (items) {
    const allowViewLeaderboard = app.forum.attribute('allowViewLeaderbaord');

    if(allowViewLeaderboard){
      let checkinLeaderBoardEntryPosition = app.forum.attribute("checkinLeaderBoardEntryPosition");

      if(checkinLeaderBoardEntryPosition==0){
        addSidebarMenu();
      }else if(checkinLeaderBoardEntryPosition==1){
        addTopRightMenu();
      }
    }
  });
}