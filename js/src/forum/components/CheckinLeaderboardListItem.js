import Component from "flarum/Component";
import Link from "flarum/components/Link";
import avatar from "flarum/helpers/avatar";
import username from "flarum/helpers/username";

export default class CheckinLeaderboardListItem extends Component {
  view() {
    const {leaderboardListItem,rankID} = this.attrs;
    const moneyName = app.forum.attribute('antoinefr-money.moneyname') || '[money]';
    let moneyValue = leaderboardListItem.attribute("money");
    moneyValue = Math.min(Math.max(1, Math.round(moneyValue)), 10);

    const idioms = {
      1: ["倒霉透顶"],
      2: ["时运不济"],
      3: ["平淡无奇"],
      4: ["寻常如故"],
      5: ["转运亨通"],
      6: ["幸运降临"],
      7: ["顺风顺水"],
      8: ["福气绵绵"],
      9: ["鸿运当头"],
      10: ["天时地利人和"],
    };

    const luckytext = idioms[moneyValue][0];

    const moneyText = app.forum.attribute('checkinLeaderBoardHideMoneyText') === "1"?moneyValue:moneyName.replace('[money]', moneyValue);
    let trophyClass = "CheckinLeaderboardListItemTrophyNone";
    let rankClass = "CheckinLeaderboardListItemRankTop";

    if(rankID===1){
      trophyClass = "CheckinLeaderboardListItemTrophyGold";
    }else if(rankID===2){
      trophyClass = "CheckinLeaderboardListItemTrophySilver";
    }else if(rankID===3){
      trophyClass = "CheckinLeaderboardListItemTrophyBronze";
    }else{
      rankClass = "CheckinLeaderboardListItemRankLower";
    }

    let avatarWithFrame,usernameWithColor;
    if('ziiven-decoration-store' in flarum.extensions){
      const { components } = require('@ziiven-decoration-store');
      avatarWithFrame = components.avatarWithFrame;
      usernameWithColor = components.usernameWithColor;
    }

    return (
      <div className="CheckinLeaderboardListItemContainer">
        <div class="CheckinLeaderboardListHeaderRank">
          <div class={rankClass}>{rankID}</div>
          <div class={trophyClass}>
            <i class="fas fa-trophy"></i>
          </div>
        </div>
        <div class="CheckinLeaderboardListHeaderUser">
          <Link href={app.route.user(leaderboardListItem)} className="transferHistoryUser" style="color:var(--heading-color)">
            {avatarWithFrame?avatarWithFrame(leaderboardListItem):avatar(leaderboardListItem)}{usernameWithColor?usernameWithColor(leaderboardListItem):username(leaderboardListItem)}
          </Link>
        </div>
        <div class="CheckinLeaderboardListHeaderLucky">
          {luckytext}
        </div>
        <div class="CheckinLeaderboardListHeaderMoney">
          {moneyText}
        </div>
      </div>
    );
  }
}
