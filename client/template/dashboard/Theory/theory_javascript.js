/**
 * Created by qby on 26.05.15.
 */
Template.theoryJavaScript.onRendered(function(){
    $(".theory li").each(function (i) {
        $(this).attr("style", "-webkit-animation-delay:" + i * 200 + "ms;"
            + "-moz-animation-delay:" + i * 200 + "ms;"
            + "-o-animation-delay:" + i * 200 + "ms;"
            + "animation-delay:" + i * 200 + "ms;");
        if (i == $(".theory li").size() -1) {
            $(".myList").addClass("play")
        }
    });
});
