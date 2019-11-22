"use strict";
import m from "mithril";
import styles from "./index.scss";


var attributes = ["Strength", "Constitution", "Dexterity", "Intelligence", "Wisdom", "Charisma"];

function attributeTagGenerator(attribute) {
    return m("div", attribute + ": " + getScore());

}


function getScore() {
    return Math.floor((Math.random() * 6 + 1))  + Math.floor((Math.random() * 6 + 1)) + Math.floor((Math.random() * 6 + 1)) }

function getAttributeTags() {
    var tags = [];
    for (var i = 0; i < attributes.length; i++) {
        tags.push(attributeTagGenerator(attributes[i]))
    }
    return tags;
}

export default {
    view: function(vnode) {
        return m("div", getAttributeTags())
    }






}

