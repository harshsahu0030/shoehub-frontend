import { CiDeliveryTruck } from "react-icons/ci";
import { GrSchedulePlay } from "react-icons/gr";
import { BsAward } from "react-icons/bs";
import VerticalBanner01 from "../assets/vertival_banner01.png";
import VerticalBanner02 from "../assets/vertical_banner02.png";
import HorizontalBanner01 from "../assets/long_vertical_banner.png";
import SmallBanner01 from "../assets/small-banner01.png";
import SmallBanner02 from "../assets/small-banner02.png";
import SmallBanner03 from "../assets/small-banner03.png";
import SmallBanner04 from "../assets/small-banner04.png";

export const homeData = {
  banner: {
    vertical: [VerticalBanner01, VerticalBanner02],
    horizontal: [HorizontalBanner01],
    small: [SmallBanner01, SmallBanner02, SmallBanner03, SmallBanner04],
  },

  features: [
    {
      icon: BsAward,
      desc: "All products are genuine and assured with a guarantee.",
    },
    {
      icon: GrSchedulePlay,
      desc: "Order now so you dont miss the opportunities.",
    },
    {
      icon: CiDeliveryTruck,
      desc: "Your order will arrive at your door within a week.",
    },
  ],
};
