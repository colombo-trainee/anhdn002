/**
 * Created by Love Barca on 5/22/2016.
 */
 jQuery(document).ready(function ($) {

            var slideshow_SlideoTransitions = [
                [{b: 5500, d: 3000, o: -1, r: 240, e: {r: 2}}],
                [{b: -1, d: 1, o: -1, c: {x: 51.0, t: -51.0}}, {
                    b: 0,
                    d: 1000,
                    o: 1,
                    c: {x: -51.0, t: 51.0},
                    e: {o: 7, c: {x: 7, t: 7}}
                }],
                [{b: -1, d: 1, o: -1, sX: 9, sY: 9}, {b: 1000, d: 1000, o: 1, sX: -9, sY: -9, e: {sX: 2, sY: 2}}],
                [{b: -1, d: 1, o: -1, r: -180, sX: 9, sY: 9}, {
                    b: 2000,
                    d: 1000,
                    o: 1,
                    r: 180,
                    sX: -9,
                    sY: -9,
                    e: {r: 2, sX: 2, sY: 2}
                }],
                [{b: -1, d: 1, o: -1}, {b: 3000, d: 2000, y: 180, o: 1, e: {y: 16}}],
                [{b: -1, d: 1, o: -1, r: -150}, {b: 7500, d: 1600, o: 1, r: 150, e: {r: 3}}],
                [{b: 10000, d: 2000, x: -379, e: {x: 7}}],
                [{b: 10000, d: 2000, x: -379, e: {x: 7}}],
                [{b: -1, d: 1, o: -1, r: 288, sX: 9, sY: 9}, {
                    b: 9100,
                    d: 900,
                    x: -1400,
                    y: -660,
                    o: 1,
                    r: -288,
                    sX: -9,
                    sY: -9,
                    e: {r: 6}
                }, {b: 10000, d: 1600, x: -200, o: -1, e: {x: 16}}]
            ];

            var slideshow_options = {
                $AutoPlay: true,
                $SlideDuration: 800,
                $SlideEasing: $Jease$.$OutQuint,
                $CaptionSliderOptions: {
                    $Class: $JssorCaptionSlideo$,
                    $Transitions: slideshow_SlideoTransitions
                },
                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$
                },
                $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$
                }
            };

            var slideshow_slider = new $JssorSlider$("slideshow", slideshow_options);
        });
