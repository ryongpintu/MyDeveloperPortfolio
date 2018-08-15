import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll($(".blog"), "80%");
var revealOnScroll = new RevealOnScroll($(".our-work") ,"70%");