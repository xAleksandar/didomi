import lang from "../../lib/lang/en";
import { UI_ROUTES } from "../../utils/routes";

export const MENU_LIST = [
  {
    id: 1,
    label: lang.commonGiveConsent,
    path: UI_ROUTES.giveConsent,
  },
  {
    id: 2,
    label: lang.commonCollectedConsents,
    path: UI_ROUTES.consents,
  },
];
