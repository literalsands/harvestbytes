import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
  contact() {
    return "Grace@HACKAugusta.org";
  },
  hackathonChallenges() {
    return [{
      topic: "Food Waste",
      details: "\
      Farmers often find themselves with leftover fresh produce after the farmers market.\
      How can we help them sell their extra produce?\
      "
    }, {
      topic: "Transparency",
      details: "\
      How can we better verify that <br /> chefs and restaurants are, indeed, buying from local farmers as they claim?\
      "
    }, {
      topic: "Urban Farming",
      details: "\
      In the city of Augusta, much of <br /> our soil tests positive for heavy metals, specifically lead.\
      How can we help urban farmers identify and cope with the pollutants in their soils?\
      "
    }, {
      topic: "School Gardens",
      details: "\
      School gardens are excellent <br /> learning tools,\
      but maintenance is often neglected during the summer months.\
      Can technology be used to organize and guide volunteers?\
      Are there other ways to push a garden, unmaintained, through the Georgia summer?\
      "
    }, {
      topic: "Farmer Prosperity",
      details: "\
        The folks at <a href=\"https://www.facebook.com/JandLFarmAndStables/\">J and L Farm</a> strive <br /> to be more competitive at the local farmers markets.\
        Improve their capacity to sow seed by retrofitting their hand-pushed Amish planter.\
        Come ready to tinker with this farm implement and improve its design.\
      "
    }, {
      topic: "Home Gardening",
      details: "\
      It's easy to collect and store rain <br /> from a rooftop, but it's a challenge to deliver and distribute that supply effectively to a garden.\
      Create a low-cost system that a home gardener could afford.\
      "
    }]
  }
});

