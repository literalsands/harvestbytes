import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.main.helpers({
  contact() {
    return "Grace@HACKAugusta.org";
  },
});

