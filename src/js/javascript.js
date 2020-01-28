var inview_1 = new Waypoint.Inview
({
    element: document.getElementById("banner_title"),
    enter: function(direction)
    {
        $("#photo_holder").addClass('animation_fadeTop');
        $("#content_holder").addClass('animation_fadeTop');
    }
})



var inview_2 = new Waypoint.Inview
({
    element: document.getElementById("education"),
    enter: function(direction)
    {
        $("#institution_1").addClass('animation_fadeTop');
        $("#institution_2").addClass('animation_fadeTopDelay1');
        $("#institution_3").addClass('animation_fadeTopDelay2');
        $("#institution_4").addClass('animation_fadeTopDelay3');
    }
})



var inview_3 = new Waypoint.Inview
({
    element: document.getElementById("personal_skills"),
    enter: function(direction)
    {
        $("#technical_skills").addClass('animation_fadeTop');
        $("#language_skills").addClass('animation_fadeTopDelay1');
        $("#soft_skills").addClass('animation_fadeTopDelay2');
    }
})



var inview_4 = new Waypoint.Inview
({
    element: document.getElementById("work_experience"),
    enter: function(direction)
    {
        $("#position_1").addClass('animation_fadeTop');
        $("#position_2").addClass('animation_fadeTopDelay1');
    }
})



var inview_99 = new Waypoint.Inview
({
    element: document.getElementById("about_me"),
    enter: function(direction)
    {
        $(".home_arrow").show();
    }
})