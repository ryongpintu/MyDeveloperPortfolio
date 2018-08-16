import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll($(".blog"), "80%");
var revealOnScroll = new RevealOnScroll($(".our-work") ,"70%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
